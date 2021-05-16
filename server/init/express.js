import bodyParser from "body-parser";
import cors from "cors";
import errorHandler from "errorhandler";
import morgan from "morgan";
import apiRouter from "../api/routes";

export default app => {
    app.disable("x-powered-by");
    app.use(cors());
    app.use(morgan("dev"));
    app.use(errorHandler());
    app.use(bodyParser.json());
    app.use("/api", apiRouter);
};
