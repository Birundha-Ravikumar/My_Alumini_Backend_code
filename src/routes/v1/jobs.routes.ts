import express from "express";
import {JobController} from "../../controller/jobController";
import validate from "../../middlewares/validate";
import jobsValidation from "../../validations/jobs.validation";
import verify from "../../middlewares/verifyToken";


const route = express.Router();


route.post("/create", validate(jobsValidation.jobPostPayload), (request, response) => {
    JobController.postJobDetail(request, response);
})

// route.get("/getJobsList",verify, (request, response) => {
//     JobController.getStudentlist(request, response);
// })

// route.get("/getspecificJob",verify, (request, response) => {
//     JobController.getSpecificUser(request, response);
// })
export default route
