import {
    getWishlistByUsername,
    addWishlist,
    removeWishlist
} from "../model/wishlist.js";

export const showWishlistByUsername = (req, res) => {
    const {username} = req.body;
    if(!username){
        return res.status(400).json({
            message: "Please login"
        })
    }
    getWishlistByUsername(username, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const AddWishlist = (req, res) => {
    const {wordset_id, username} = req.body;
    if(!username){
        return res.status(400).json({
            message: "Please login"
        })
    }
    if(!wordset_id){
        return res.status(400).json({
            message: "Please enter wordset id"
        })
    }
    addWishlist(wordset_id, username, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const RemoveWishlist = (req, res) => {
    const {wordset_id, username} = req.body;
    if(!username){
        return res.status(400).json({
            message: "Please login"
        })
    }
    removeWishlist(wordset_id, username, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}