import {
    createAuthenticatedClient,
    OpenPaymentsClientError,
    isFinalizedGrant,
  } from "@interledger/open-payments";
import readline from "readline/promises";
import dotenv from 'dotenv'




dotenv.config()


export default async function payments(reg, res) {

  try{

    const key =  process.env.PRIVATE_KEY
    const wallet = process.env.WALLET_ADDRESS
    const id = process.env.KEY_ID
    const {amount} = req.body
    
    const keyBuffer = Buffer.from(key, 'base64').toString("utf-8")
    
    client = await createAuthenticatedClient({
      walletAddressUrl: wallet,
      privateKey: keyBuffer,
      keyId: id,
    });

    const sendingWalletAddress = await client.walletAddress.get({
      url: "https://$ilp.interledger-test.dev/lubasi", 
    });
    const receivingWalletAddress = await client.walletAddress.get({
      url: "https://$ilp.interledger-test.dev/lee", 
    });

    
//grant for incoming payment
  const incomingPaymentGrant = await client.grant.request(
    {
      url: receivingWalletAddress.authServer,
    },
    {
      access_token: {
        access: [
          {
            type: "incoming-payment",
            actions: ["read", "complete", "create"],
          },
        ],
      },
    }
  );

  //incoming payment
  const incomingPayment = await client.incomingPayment.create(
    {
      url: receivingWalletAddress.resourceServer,
      accessToken: incomingPaymentGrant.access_token.value,
    },
    {
      walletAddress: receivingWalletAddress.id,
      incomingAmount: {
        assetCode: receivingWalletAddress.assetCode,
        assetScale: receivingWalletAddress.assetScale,
        value: amount,
      },
    }
  );

  // quote grant
  const quoteGrant = await client.grant.request(
    {
      url: sendingWalletAddress.authServer,
    },
    {
      access_token: {
        access: [
          {
            type: "quote",
            actions: ["create", "read"],
          },
        ],
      },
    }
  );

  // Create a quote
  const quote = await client.quote.create(
    {
      url: sendingWalletAddress.resourceServer,
      accessToken: quoteGrant.access_token.value,
    },
    {
      walletAddress: sendingWalletAddress.id,
      receiver: incomingPayment.id,
      method: "ilp",
    }
  );

//outgoing grant payment
  const outgoingPaymentGrant = await client.grant.request(
    {
      url: sendingWalletAddress.authServer,
    },
    {
      access_token: {
        access: [
          {
            type: "outgoing-payment",
            actions: ["read", "create"],
            limits: {
              debitAmount: {
                assetCode: quote.debitAmount.assetCode,
                assetScale: quote.debitAmount.assetScale,
                value: quote.debitAmount.value,
              },
            },
            identifier: sendingWalletAddress.id,
          },
        ],
      },
      interact: {
        start: ["redirect"],
        finish: {
          method: "redirect",
          uri: "http://localhost:3000",
          nonce: crypto.randomUUID(),
        },
      },
    }
  );

  await readline
    .createInterface({ input: process.stdin, output: process.stdout })
    .question("\nPlease accept grant and press enter...");

  let finalizedOutgoingPaymentGrant;

  const grantContinuationErrorMessage =
    "\nThere was an error continuing the grant. You probably have not accepted the grant at the url (or it has already been used up, in which case, rerun the script).";

  try {
    finalizedOutgoingPaymentGrant = await client.grant.continue({
      url: outgoingPaymentGrant.continue.uri,
      accessToken: outgoingPaymentGrant.continue.access_token.value,
    });
  } catch (err) {
    if (err instanceof OpenPaymentsClientError) {
      console.log(grantContinuationErrorMessage);
      process.exit();
    }

    throw err;
  }

  if (!isFinalizedGrant(finalizedOutgoingPaymentGrant)) {
    console.log(
      "There was an error continuing the grant. You probably have not accepted the grant at the url."
    );
    process.exit();
  }

  const outgoingPayment = await client.outgoingPayment.create(
    {
      url: sendingWalletAddress.resourceServer,
      accessToken: finalizedOutgoingPaymentGrant.access_token.value,
    },
    {
      walletAddress: sendingWalletAddress.id,
      quoteId: quote.id,
    }
  );
  process.exit();

  } catch {

  }

}


 

  


 

 

 


  
  

 