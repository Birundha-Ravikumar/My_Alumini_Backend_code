import Joi from "joi";

const jobPostPayload = {
  body: Joi.object().keys({
    jobID: Joi.number().required(),
    title: Joi.string().required(),
    discription: Joi.string().required(),
    email: Joi.string().required().email(),
    contactNumber: Joi.number().required(),
    website: Joi.string().required(),
    position: Joi.string().required(),
  }),
};

const jobValidation = {
  jobPostPayload,
};

export default jobValidation;
