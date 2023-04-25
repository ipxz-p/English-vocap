import db from '../config/database.js'
export const getAllWordSet = (result) => {
    db.query("SELECT *, COUNT(id)`total_word` FROM `wordset` join word USING (wordSet_id) GROUP by wordSet_id",
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}

export const getWordSetByUsername = (username, result) => {
    db.query("SELECT *, COUNT(id)`total_word` FROM `wordset` join word USING (wordSet_id) WHERE username = ? GROUP by wordSet_id", 
    username,
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}

export const getWordSetNotThisUsername = (username, result) => {
    if(!username){
        db.query("SELECT *, COUNT(id)`total_word` FROM `wordset` join word USING (wordSet_id) GROUP by wordSet_id", 
        (err, results) => {
            if(err){
                return result(err, null)
            }else{
                return result(null, results)
            }
        })
    }
    else{
        db.query("SELECT *, COUNT(id)`total_word` FROM `wordset` join word USING (wordSet_id) WHERE username != ? GROUP by wordSet_id", 
        username,
        (err, results) => {
            if(err){
                return result(err, null)
            }else{
                return result(null, results)
            }
        })
    }
}

export const addWordSet = (title, des, username, result) => {
    db.query("insert into `wordset` (name, description, username) value (?, ?, ?) ", 
    [title, des, username],
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}

export const editWordSet = (title, des, wordSet_id, result) => {
    db.query("UPDATE `wordset` SET `name` = ?, `description` = ? where `wordSet_id` = ? ", 
    [title, des, wordSet_id],
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}

export const deleteWordSetByID = (wordSet_id, result) => {
    db.query("delete from `wordset` where `wordSet_id` = ?", 
    [wordSet_id],
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}
