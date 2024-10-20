import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import userRoute from "./Routes/Users.js";
import payments from "./API/payments.js";



const corsOptions = {
  origin: ["'http://localhost:5173'"],
};

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors(corsOptions));
// app.use("user", userRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



app.post('/payment', payments);

// app.get(incomingGrant)