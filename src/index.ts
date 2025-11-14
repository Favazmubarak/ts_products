import express, { urlencoded } from "express";
import type { Application, Request, Response } from "express";
import { connectDB } from "./config/database";
import router from "./Routes/productRoutes";

const app: Application = express();
const PORT = 3000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",router)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
