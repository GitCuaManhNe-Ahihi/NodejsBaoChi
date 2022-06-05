import { getCommentService, sendComment } from "../serviceQuery/firebaseQuery";
const httpErrors = require("http-errors");

export const submitComment = async (req, res, next) => {
    try{
        const {idpost,name,url,content} = req.body;
        const result = await sendComment({idpost,name,url,content});
        return res.status(200).json(result);
    }
    catch(e){
        return next(httpErrors(500, e.message));
    }
}
export const getComment = async (req, res, next) => {
    try{
        const {idpost} = req.query;
        const result = await getCommentService(idpost);
        return res.status(200).json(result);
    }
    catch(e){
        return next(httpErrors(500, e.message));
    }
}