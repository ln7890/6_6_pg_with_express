import { Router } from "express";
import { groupContollerClass } from "../controller/groups.controller.js";

const route = Router();
const grClass = new groupContollerClass();

route
  .post("/", grClass.createGroup)
  .get("/", grClass.groupAll)
  .put("/:id", grClass.updateGroup);

export default route;
