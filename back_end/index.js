import express from "express";
import cors from "cors";
import userRoute from "./Routes/Users";

const corsOptions = {
  origin: ["'http://localhost:5173'"],
};

const app = express();

app.use(cors(corsOptions));
app.use("user", userRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
