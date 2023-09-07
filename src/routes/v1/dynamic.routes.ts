import express from "express";
import { dynamicController } from "../../controller/dynamicController";
import validate from "../../middlewares/validate";
import verify from "../../middlewares/verifyToken";
import { payloadGenerator } from "../../utils/payloadGenerator";

const dynamicRoute = (path: string) => {
  const route = express.Router();

  route.post("/create", verify, validate(payloadGenerator(path)), (request, response) => {
    dynamicController.postSpecificDetail(request, response, path);
  });

  route.post("/update/:id", verify, validate(payloadGenerator(path)), (request, response) => {
    dynamicController.updateSpecificDetail(request, response, path);
  });

  route.get("/delete/:id", verify, (request, response) => {
    dynamicController.deleteSpecificDetail(request, response, path);
  });

  route.get(`/get${path}sList`, verify, (request, response) => {
    dynamicController.getSpecificDetailList(request, response, path);
  });

  return route;
};

export default dynamicRoute;
