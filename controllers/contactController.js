const asyncHandler = require("express-async-handler");
const Contact = require("../models/constactModel")

//!desc get all contatct
//@route  GET / api/conatcts
//@access private
const getContacts = asyncHandler(async(req,res)=>{
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
})


//@desc create new contatct
//@route  POST/ api/conatcts
//@access private
const createContact = asyncHandler(async(req,res)=>{
    console.log("the request body is ",req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });
    res.status(201).json(contact);
})


//@desc get contact
//@route  GET/ api/conatcts/:id
//@access private
const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact ){
        res.status(404);
        throw new Error ("Conatct not find")
    }
    res.status(200).json(contact);
})


//@desc update contatct
//@route  PUT/ api/conatcts/:id
//@access private
const updateContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact ){
        res.status(404);
        throw new Error ("Conatct not find")
    }

    if(contact.user_id.toString()!== req.user.id){
        res.status(403);
        throw new Error("user don't have permission to update other user constacts")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(202).json(updatedContact);
})


//@desc delete contatct
//@route  DELETE/ api/conatcts/:id
//@access private
const deleteContact =asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error ("Conatct not find")
    }

    if(contact.user_id.toString()!== req.user.id){
        res.status(403);
        throw new Error("user don't have permission to update other user constacts")
    }
    
    await contact.deleteOne();
    res.status(203).json(contact);
 })

module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};