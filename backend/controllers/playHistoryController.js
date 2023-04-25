import { addPlayHistory, getPlayHistoryByUsername } from "../model/playHistory.js";

export const showPlayHistoryByUsername = (req, res) => {
    const {username} = req.body;
    getPlayHistoryByUsername(username, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const AddPlayHistory = (req, res) => {
    const {score, max_score, type, wordset_id, username} = req.body;
    addPlayHistory(score, max_score, type, wordset_id, username, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}