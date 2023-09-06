import { MongoService } from "../mongo";

export class JobService {
    static async postJobDetail(bodyContent:any) {
        return await MongoService.collectionDetails("job").then((obj) => {
            return obj?.connection.insertOne(bodyContent).finally(() => {
              obj?.client.close();
            });
          });
    }
}