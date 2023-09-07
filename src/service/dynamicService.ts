import { ObjectId } from "mongodb";
import { MongoService } from "../mongo";

export class dynamicService {
  static async postSpecificDetail(bodyContent: any, collection: string) {
    return await MongoService.collectionDetails(collection).then((obj) => {
      return obj?.connection.insertOne(bodyContent).finally(() => {
        obj?.client.close();
      });
    });
  }
  static async updateSpecificDetail(id: string, bodyContent: any, collection: string) {
    return await MongoService.collectionDetails(collection).then((obj) => {
      return obj?.connection.findOneAndUpdate({ _id: new ObjectId(id) }, { $set: bodyContent }, {}).finally(() => {
        obj?.client.close();
      });
    });
  }
  static async deleteSpecificDetail(id: string, collection: string) {
    return await MongoService.collectionDetails(collection).then((obj) => {
      return obj?.connection.findOneAndDelete({ _id: new ObjectId(id) }).finally(() => {
        obj?.client.close();
      });
    });
  }
  static async getSpecificDetaillist(collection: string) {
    return await MongoService.collectionDetails(collection).then((obj) => {
      return obj?.connection
        .find({})
        .toArray()
        .finally(() => {
          obj?.client.close();
        });
    });
  }
}
