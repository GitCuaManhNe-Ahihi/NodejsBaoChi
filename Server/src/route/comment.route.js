import { getComment, submitComment } from "../controller/comment.controller";
import express from "express";
const route = express.Router();

const InitRouteComment = (app) => {
    route.post("/api/v1/comment", submitComment);
    route.get("/api/v1/comment", getComment);
    return app.use(route);
    };

export default InitRouteComment;