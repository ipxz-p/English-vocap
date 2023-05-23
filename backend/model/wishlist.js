import db from '../config/database.js'

export const getWishlistByUsername = (username, result) => {
    db.query("select * from `wishlist` join `wordset` using (wordSet_id) where `wishlist`.wishlist_username = ?",
    username,
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}

export const addWishlist = (wordset_id, username, result) => {
    db.query("insert into `wishlist`(wordSet_id, wishlist_username) VALUES (?, ?)",
    [wordset_id, username],
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}

export const removeWishlist = (wordset_id, username, result) => {
    db.query("DELETE FROM `wishlist` where wordSet_id = ? and wishlist_username = ?",
    [wordset_id, username],
    (err, results) => {
        if(err){
            return result(err, null)
        }else{
            return result(null, results)
        }
    })
}