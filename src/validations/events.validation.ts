import Joi from "joi";

const eventPostPayload = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    venue: Joi.string().required(),
    time: Joi.string().required(),
    eventDate: Joi.string().required(),
  }),
};

const eventValidation = {
  eventPostPayload,
};

export default eventValidation;
