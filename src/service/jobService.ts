import { ObjectId } from "mongodb";
import { IJobDetails } from "../models/JobModel";
import { MongoService } from "../mongo";

export class JobService {
  static async postJobDetail(bodyContent: IJobDetails) {
    return await MongoService.collectionDetails("job").then((obj) => {
      return obj?.connection.insertOne(bodyContent).finally(() => {
        obj?.client.close();
      });
    });
  }
  static async updateJobDetail(id: string, bodyContent: IJobDetails) {
    return await MongoService.collectionDetails("job").then((obj) => {
      return obj?.connection.findOneAndUpdate({ _id: new ObjectId(id) }, { $set: bodyContent }, {}).finally(() => {
        obj?.client.close();
      });
    });
  }
  static async deleteJobDetail(id: string) {
    return await MongoService.collectionDetails("job").then((obj) => {
      return obj?.connection.findOneAndDelete({ _id: new ObjectId(id) }).finally(() => {
        obj?.client.close();
      });
    });
  }
  static async getJoblist() {
    return await MongoService.collectionDetails("job").then((obj) => {
      return obj?.connection
        .find({})
        .toArray()
        .finally(() => {
          obj?.client.close();
        });
    });
  }
}
