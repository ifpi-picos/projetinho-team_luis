import bodyParser from "body-parser";
import express from "express";
import { router } from "./routes";

const server = express();
const PORT = process.env.PORT;

server.use(bodyParser.json());
server.use(express.json());
server.use(router);

server.listen(PORT, () => {
    console.log("Server Running!");
});
