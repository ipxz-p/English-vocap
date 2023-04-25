import jwt from "jsonwebtoken";
import db from "../config/database.js";
import dotenv from 'dotenv'
dotenv.config()
export const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({
        message: "No token provided!"
        });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
        return res.status(401).send({
            message: "Unauthorized!"
        });
        }
        req.userId = decoded.id;
        next();
    });
};
export const isWordsetOwner = (req, res, next) => {
    const {username, wordSet_id} = req.body;
    db.query("SELECT *, (SELECT role from user where username = ?)`role` from wordset WHERE wordSet_id = ?", 
        [username, wordSet_id],
        async function (err, results) {
            if(err) throw err;
            if (results[0].username !== username && results[0].role !== 'admin'){
                return res.status(400).json({message: "You do not have permission to perform this action"})
            }
            next()
            
        })
}
