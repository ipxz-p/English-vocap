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

export const getAllWordSetByUsername = (username, result) => {
    db.query("SELECT *, COUNT(id)`total_word` FROM `wordset` left join word USING (wordSet_id) WHERE username = ? GROUP by wordSet_id", 
    username,
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}

export const getWordSetByUsername = (username, result) => {
    db.query("SELECT *, COUNT(id)`total_word` FROM `wordset` left join word USING (wordSet_id) WHERE username = ? GROUP by wordSet_id HAVING(`total_word` >= 10)", 
    username,
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}

export const getWordSetById = (id, result) => {
    db.query("SELECT * FROM `wordset`  WHERE wordSet_id = ?", 
    id,
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results[0])
        }
    })
}

export const getWordSetNotThisUsername = (username, result) => {
    if(!username){
        db.query("SELECT *, COUNT(id)`total_word` FROM `wordset` join word USING (wordSet_id) GROUP by wordSet_id HAVING(`total_word` >= 10)", 
        (err, results) => {
            if(err){
                return result(err, null)
            }else{
                return result(null, results)
            }
        })
    }
    else{
        db.query("SELECT *, wordset.wordSet_id, COUNT(id)`total_word` FROM `wordset` join word USING (wordSet_id) left join wishlist on (wishlist.wordSet_id = wordset.wordSet_id and wishlist.wishlist_username = ?) where wordset.username != ? GROUP by wordset.wordSet_id HAVING(`total_word` >= 10)", 
        [username, username],
        (err, results) => {
            if(err){
                return result(err, null)
            }else{
                return result(null, results)
            }
        })
    }
}

export const getAllWordSetNotThisUsername = (username, result) => {
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
        db.query("SELECT *, wordset.wordSet_id, COUNT(id)`total_word` FROM `wordset` join word USING (wordSet_id) left join wishlist on (wishlist.wordSet_id = wordset.wordSet_id and wishlist.wishlist_username = ?) where wordset.username != ? GROUP by wordset.wordSet_id", 
        [username, username],
        (err, results) => {
            if(err){
                return result(err, null)
            }else{
                return result(null, results)
            }
        })
    }
}

export const getWordSetByKeyword = (keyword, result) => {
    db.query("SELECT *, COUNT(id)`total_word` FROM `wordset` join word USING (wordSet_id) WHERE `name` like ? OR description like ? GROUP by wordSet_id", 
    [`%${keyword}%`, "%"+keyword+"%"],
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
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
