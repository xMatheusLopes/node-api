import "reflect-metadata";
import { createConnection } from "typeorm";
import server from "./server";

// createConnection()
//   .then((connection) => {
//     console.log("Conexão iniciada");
//     connection.close();
//   })
//   .catch((error) => {
//     console.error(error);
//   });

server.listen(8081, "0.0.0.0");
console.log("Server listening on port 8081");


