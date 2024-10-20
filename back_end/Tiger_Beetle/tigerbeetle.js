const assert = require("assert");
var QRCode = require("qrcode");

const {
  createClient,
  CreateAccountError,
  CreateTransferError,
} = require("tigerbeetle-node");

const express = require("express");
var cors = require("cors");
const app = express();
const PORT = 3502;

// Route to handle GET request at the root
app.get("/", (req, res) => {
  res.send("Hello, TigerBeetle!");
});

// middlwares
app.use(cors());
app.use(express.json());

const bodyParser = require("body-parser");

const client = createClient({
  cluster_id: 0n,
  replica_addresses: [process.env.TB_ADDRESS || "3001"],
});

// Helper function to convert all BigInt values to strings recursively
const convertBigIntToString = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(convertBigIntToString);
  } else if (typeof obj === "object" && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        typeof value === "bigint" ? value.toString() : value,
      ])
    );
  }
  return obj;
};

// fetch the user data from tb
app.get("/api/user/:id", async (req, res) => {
  const userId = req.params.id;
  const id = BigInt(userId);
  let accounts = await client.lookupAccounts([id]);
  assert.equal(accounts.length, 1);
  console.log(accounts[0]);
  const response = convertBigIntToString(accounts[0]);
  return res.status(200).json(response);
});

function randomBigInt(bits) {
  let result = BigInt(0);
  for (let i = 0; i < bits; i += 30) {
    // 30 bits at a time
    const chunk = BigInt(Math.floor(Math.random() * (1 << 30)));
    result = (result << BigInt(30)) | chunk;
  }
  return result;
}

// create a user account on tb
app.post("/api/create_account", async (req, res) => {
  console.log("creating account... ");
  const { ledger } = req.body;
  const id = randomBigInt(1);
  console.log("created new account: ", id);
  try {
    let accountErrors = await client.createAccounts([
      {
        id: id,
        debits_pending: 0n,
        debits_posted: 0n,
        credits_pending: 0n,
        credits_posted: 0n,
        user_data_128: 0n,
        user_data_64: 0n,
        user_data_32: 0,
        reserved: 0,
        ledger: Number(ledger),
        code: 1,
        flags: 0,
        timestamp: 0n,
      },
    ]);

    for (const error of accountErrors) {
      console.error(
        `Batch account at ${error.index} failed to create: ${
          CreateAccountError[error.result]
        }.`
      );
    }
    assert.equal(accountErrors.length, 0);
    const response = convertBigIntToString({ id: id });
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: `Batch account at ${error.index} failed to create: ${
        CreateAccountError[error.result]
      }.`,
    });
  }
});

app.post("/api/withdraw", async (req, res) => {
  console.log("request: ", req.body);
  let { from, to, amount, ledger } = req.body;
  try {
    // if (typeof Sfrom !== "string") {
    //   return res.status(400).json({ error: "Input must be a string." });
    // }
    // if (typeof Sto !== "string") {
    //   return res.status(400).json({ error: "Input must be a string." });
    // }

    from = BigInt(from); // Parse as BigInt
    to = BigInt(to); // Parse as BigInt
    amount = BigInt(amount); // Parse as BigInt
    ledger = Number(ledger); // Parse as BigInt
    console.log(from, to, amount, ledger);

    let transferErrors = await client.createTransfers([
      {
        id: randomBigInt(100), // we generate this number: must be big integer
        debit_account_id: from,
        credit_account_id: to,
        amount: amount,
        pending_id: 0n,
        user_data_128: 0n,
        user_data_64: 0n,
        user_data_32: 0,
        timeout: 0,
        ledger: 700,
        code: 10,
        flags: 0,
        timestamp: 0n,
      },
    ]);
    for (const error of transferErrors) {
      console.error(
        `Batch transfer at ${error.index} failed to create: ${
          CreateTransferError[error.result]
        }.`
      );
    }
    assert.equal(transferErrors.length, 0);

    console.log("ok");

    // Send the usersList as a response to the client
    res.send("Transaction (Withdraw) successfully made");
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: `Batch transfer at ${error.index} failed to create: ${
        CreateTransferError[error.result]
      }.`,
    });
  }
});

// create send tx
app.post("/api/send", async (req, res) => {
  console.log("request: ", req.body);
  let { from, to, amount, ledger } = req.body;
  try {
    // if (typeof Sfrom !== "string") {
    //   return res.status(400).json({ error: "Input must be a string." });
    // }
    // if (typeof Sto !== "string") {
    //   return res.status(400).json({ error: "Input must be a string." });
    // }

    from = BigInt(from); // Parse as BigInt
    to = BigInt(to); // Parse as BigInt
    amount = BigInt(amount); // Parse as BigInt
    ledger = Number(ledger); // Parse as BigInt
    console.log(from, to, amount, ledger);

    let transferErrors = await client.createTransfers([
      {
        id: randomBigInt(100), // we generate this number: must be big integer
        debit_account_id: from,
        credit_account_id: to,
        amount: amount,
        pending_id: 0n,
        user_data_128: 0n,
        user_data_64: 0n,
        user_data_32: 0,
        timeout: 0,
        ledger: 700,
        code: 10,
        flags: 0,
        timestamp: 0n,
      },
    ]);
    for (const error of transferErrors) {
      console.error(
        `Batch transfer at ${error.index} failed to create: ${
          CreateTransferError[error.result]
        }.`
      );
    }
    assert.equal(transferErrors.length, 0);

    console.log("ok");

    // Send the usersList as a response to the client
    res.send("Transaction successfully made");
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: `Batch transfer at ${error.index} failed to create: ${
        CreateTransferError[error.result]
      }.`,
    });
  }
});

app.post("/api/generate_qr_code", (req, res) => {
  const { url } = req.body;
  console.log("Received url from user: ", url);
  QRCode.toDataURL(url).then((dataUrl) => {
    res.status(200).json({ url: dataUrl });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.export = app;
