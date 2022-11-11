import doetenv from "dotenv";
import express from "express";
import { mongoConnect } from "./db/mongo.connection";
import userRoutes from "./user/routes/user.routes";

mongoConnect();
const app = express();

app.use(express.json());

//create a middleware to log the request for down request
//sempre que houve uma requisição, esse middleware será chamado
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path}`);
//   next();
// });

app.use("/users", userRoutes);
app.listen(3000, () => console.log("Server is running on port 3000"));
