import Promise from "bluebird";
import express from "express";
const endpointHandler = require("endpoint-handler");

const router = express.Router();
const { route } = endpointHandler(router);

route.get("/", (req, res) => Promise.resolve("Example"));

export default router;
