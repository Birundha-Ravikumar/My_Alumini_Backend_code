import { Request, Response } from "express";
import dbConfig from "../config/mongo";
import { errorHandle } from "../middlewares/error";
import { JobService } from "../service/jobService";
import { IJobDetails } from "../models/JobModel";

export class JobController {
  static postJobDetail(request: Request, response: Response) {
    try {
      let bodyContent: IJobDetails = request.body;
      JobService.postJobDetail(bodyContent)
        .then((data: any) => {
          response.status(200).json({ data: data, Message: "Job details added Successfully" });
        })
        .catch((e: any) => {
          errorHandle.writeLog("Exception in JobController - PostJobDetail", e);
          response.status(500).send(dbConfig.message.serverError);
        });
    } catch (e: any) {
      errorHandle.writeLog("Exception in JobController - PostJobDetail", e);
    }
  }
  static updateJobDetail(request: Request, response: Response) {
    try {
      let bodyContent: IJobDetails = request.body;
      let id: string = request.params.id;
      JobService.updateJobDetail(id, bodyContent)
        .then((data: any) => {
          response.status(200).json({ Message: "Job Details updated Successfully", data: { _id: id, ...bodyContent } });
        })
        .catch((e: any) => {
          errorHandle.writeLog("Exception in JobController - PostJobDetail", e);
          response.status(500).send(dbConfig.message.serverError);
        });
    } catch (e: any) {
      errorHandle.writeLog("Exception in JobController - PostJobDetail", e);
    }
  }
  static deleteJobDetail(request: Request, response: Response) {
    try {
      let id: string = request.params.id;
      JobService.deleteJobDetail(id)
        .then((data: any) => {
          response.status(200).json({ Message: "Job deleted Successfully" });
        })
        .catch((e: any) => {
          errorHandle.writeLog("Exception in JobController - PostJobDetail", e);
          response.status(500).send(dbConfig.message.serverError);
        });
    } catch (e: any) {
      errorHandle.writeLog("Exception in JobController - PostJobDetail", e);
    }
  }
  static getJoblist(request: Request, response: Response) {
    try {
      JobService.getJoblist()
        .then((data: any) => {
          response.status(200).json({ data: data, Message: "Job details list fetched Successfully" });
        })
        .catch((e: any) => {
          errorHandle.writeLog("Exception in JobController - PostJobDetail", e);
          response.status(500).send(dbConfig.message.serverError);
        });
    } catch (e: any) {
      errorHandle.writeLog("Exception in JobController - PostJobDetail", e);
    }
  }
}
