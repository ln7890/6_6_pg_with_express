import { config } from "dotenv";
import express from "express";
import routeGroup from "./router/groups.route.js";

config();
const app = express();

app.use(express.json());
app.use("/group", routeGroup);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
