import * as mongoDB from "mongodb";
import dbConfig from "../config/mongo";
import env from "../config/environment";
import dotenv from "dotenv";
dotenv.config({ path: `.env.${env.NODE_ENV}` });
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotallySecretKey", { encoding: "base64", pbkdf2Iterations: 10000, saltLength: 10 });
const decryptedString = cryptr.decrypt(process.env.MONGO_URI);

let dbcon_url: string | undefined = decryptedString;

export class MongoService {
  static async collectionDetails(type: any) {
    if (dbcon_url) {
      let client = new mongoDB.MongoClient(dbcon_url);
      await client.connect();
      let db = client.db(dbConfig.databaseName);
      var collection = db.collection(dbConfig.collection.user);
      switch (type) {
        case "user":
          collection = db.collection(dbConfig.collection.user);
          break;
        case "job":
          collection = db.collection(dbConfig.collection.job);
          break;
        case "event":
          collection = db.collection(dbConfig.collection.event);
          break;
        case "gallery":
          collection = db.collection(dbConfig.collection.gallery);
          break;
        default:
          break;
      }
      return {
        client: client,
        connection: collection,
      };
    }
  }
}
