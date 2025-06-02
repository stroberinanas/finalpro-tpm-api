import express from "express";
import cors from "cors";
import userRoute from "./routes/UserRoute.js"; // import routing

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Pakai routes user
app.use(userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
