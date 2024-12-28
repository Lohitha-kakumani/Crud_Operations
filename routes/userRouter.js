import { create, deletUser, getAll, getOne, update } from "../controller/userController.js";
import express from "express";

const route = express.Router();

route.post("/create", create); // creating a router for create-controller
route.get("/getall",getAll); // router to get the data
route.get("/getone/:id",getOne); // to get only one data using id
route.put("/update/:id",update); // toupdate
route.delete("/delete/:id",deletUser);
export default route;