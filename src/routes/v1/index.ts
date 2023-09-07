import express from "express";

import loginRoute from "./login.route";
import studentRoute from "./student.route";
import dynamicRoute from "./dynamic.routes";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: loginRoute,
  },
  {
    path: "/student",
    route: studentRoute,
  },
  {
    path: "/job",
    route: dynamicRoute("job"),
  },
  {
    path: "/event",
    route: dynamicRoute("event"),
  },
  {
    path: "/gallery",
    route: dynamicRoute("gallery"),
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
