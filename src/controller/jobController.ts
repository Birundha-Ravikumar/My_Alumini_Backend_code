import { Request, Response } from "express";
import dbConfig from "../config/mongo";
import { errorHandle } from "../middlewares/error";
import { JobService } from "../service/jobService";
import { IJobDetails } from "../models/JobModel";

export class JobController{
    static postJobDetail(request:Request,response:Response) {
        try {
          let bodyContent :IJobDetails= request.body;
          JobService.postJobDetail(bodyContent)
            .then((data:any) => {
              response.status(200).json(data);
            })
            .catch((e: any) => {
                errorHandle.writeLog(
                  "Exception in JobController - PostJobDetail",
                  e
                );
                response.status(500).send(dbConfig.message.serverError);
              });
          } catch (e:any) {
            errorHandle.writeLog(
              "Exception in JobController - PostJobDetail",
              e
            );
            }
      }
}