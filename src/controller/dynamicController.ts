import { Request, Response } from "express";
import dbConfig from "../config/mongo";
import { errorHandle } from "../middlewares/error";
import { dynamicService } from "../service/dynamicService";

export class dynamicController {
  static postSpecificDetail(request: Request, response: Response, collectionName: string) {
    try {
      let bodyContent: any = request.body;
      dynamicService
        .postSpecificDetail(bodyContent, collectionName)
        .then((data: any) => {
          response.status(200).json({ data: data, Message: `${collectionName} details added Successfully` });
        })
        .catch((e: any) => {
          errorHandle.writeLog(`Exception in ${collectionName}Controller - Post${collectionName}Detail`, e);
          response.status(500).send(dbConfig.message.serverError);
        });
    } catch (e: any) {
      errorHandle.writeLog(`Exception in ${collectionName}Controller - Post${collectionName}Detail`, e);
    }
  }
  static updateSpecificDetail(request: Request, response: Response, collectionName: string) {
    try {
      let bodyContent: any = request.body;
      let id: string = request.params.id;
      dynamicService
        .updateSpecificDetail(id, bodyContent, collectionName)
        .then((data: any) => {
          response
            .status(200)
            .json({ Message: `${collectionName} Details updated Successfully`, data: { _id: id, ...bodyContent } });
        })
        .catch((e: any) => {
          errorHandle.writeLog(`Exception in ${collectionName}Controller - update${collectionName}Detail`, e);
          response.status(500).send(dbConfig.message.serverError);
        });
    } catch (e: any) {
      errorHandle.writeLog(`Exception in ${collectionName}Controller - update${collectionName}Detail`, e);
    }
  }
  static deleteSpecificDetail(request: Request, response: Response, collectionName: string) {
    try {
      let id: string = request.params.id;
      dynamicService
        .deleteSpecificDetail(id, collectionName)
        .then((data: any) => {
          response.status(200).json({ Message: `${collectionName} deleted Successfully` });
        })
        .catch((e: any) => {
          errorHandle.writeLog(`Exception in ${collectionName}Controller - delete${collectionName}Detail`, e);
          response.status(500).send(dbConfig.message.serverError);
        });
    } catch (e: any) {
      errorHandle.writeLog(`Exception in ${collectionName}Controller - delete${collectionName}Detail`, e);
    }
  }
  static getSpecificDetailList(request: Request, response: Response, collectionName: string) {
    try {
      dynamicService
        .getSpecificDetaillist(collectionName)
        .then((data: any) => {
          response.status(200).json({ data: data, Message: `${collectionName} details list fetched Successfully` });
        })
        .catch((e: any) => {
          errorHandle.writeLog(`Exception in ${collectionName}Controller - get${collectionName}DetailList`, e);
          response.status(500).send(dbConfig.message.serverError);
        });
    } catch (e: any) {
      errorHandle.writeLog(`Exception in ${collectionName}Controller - get${collectionName}DetailList`, e);
    }
  }
}
