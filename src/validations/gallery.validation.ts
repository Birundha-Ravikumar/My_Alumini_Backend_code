import Joi from "joi";

const galleryPostPayload = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

const galleryValidation = {
  galleryPostPayload,
};

export default galleryValidation;
