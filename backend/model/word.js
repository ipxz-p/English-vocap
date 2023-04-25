import db from '../config/database.js'

export const addWord = (thai, english, type, wordset_id, result) => {
    db.query("insert into `word`(thai, english, type, wordset_id) VALUES (?, ?, ?, ?)",
    [thai, english, type, wordset_id],
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}

export const getAllWord = (wordset_id, result) => {
    db.query("select ROW_NUMBER() OVER ( ORDER BY id) `index`, id, thai, english, type from `word` where wordset_id = ? ORDER BY id",
    [wordset_id],
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}

export const updateWord = (thai, english, type, wordId, result) => {
    db.query("update `word` set `thai` = ?, `english` = ?, `type` = ? where `id` = ?",
    [thai, english, type, wordId],
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}

export const deleteWord = (wordId, result) => {
    db.query("DELETE FROM `word` WHERE `id` = ?",
    [wordId],
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}