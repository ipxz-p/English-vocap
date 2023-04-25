import db from '../config/database.js'

export const getPlayHistoryByUsername = (username, result) => {
    db.query("select * from `play_history` join wordset using (wordSet_id) where play_history.username = ?",
    username,
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}

export const addPlayHistory = (score, max_score, type, wordset_id, username, result) => {
    db.query("insert into `play_history`(`score`, `max_score`, `type`, wordset_id, `username`) VALUES (?, ?, ?, ?, ?)",
    [score, max_score, type, wordset_id, username],
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}
