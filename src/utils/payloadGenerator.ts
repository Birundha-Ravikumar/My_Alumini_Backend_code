import jobsValidation from "../validations/jobs.validation";
import galleryValidation from "../validations/gallery.validation";
import eventsValidation from "../validations/events.validation";

export const payloadGenerator = (payloadName: string) => {
  switch (payloadName) {
    case "job":
      return jobsValidation.jobPostPayload;
    case "event":
      return eventsValidation.eventPostPayload;
    case "gallery":
      return galleryValidation.galleryPostPayload;
    default:
      return {};
  }
};
