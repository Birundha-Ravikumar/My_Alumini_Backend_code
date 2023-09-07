import express from "express";
import { JobController } from "../../controller/jobController";
import validate from "../../middlewares/validate";
import jobsValidation from "../../validations/jobs.validation";
import verify from "../../middlewares/verifyToken";

const route = express.Router();

route.post("/create", verify, validate(jobsValidation.jobPostPayload), (request, response) => {
  JobController.postJobDetail(request, response);
});

route.post("/update/:id", verify, validate(jobsValidation.jobPostPayload), (request, response) => {
  JobController.updateJobDetail(request, response);
});

route.get("/delete/:id", verify, (request, response) => {
  JobController.deleteJobDetail(request, response);
});

route.get("/getJobsList", verify, (request, response) => {
  JobController.getJoblist(request, response);
});
export default route;
