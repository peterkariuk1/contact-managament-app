const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc getAllContacts
//@route GET /api/contacts
//@access private
const getAllContacts = asyncHandler(async(req,res) => {
    const contacts = await Contact.find( {user_id: req.user.id});//the userid was added after validation and addition from the contact model
    res.status(200).json(contacts);
});

//@desc createContact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async(req,res) => {
    console.log("The body is: ",req.body);
    const {name,email,phone} = req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error ("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id // added after contactModel id addition to allow validation by a jwt token
    })
    res.status(201).json(contact);
});

//@desc getContact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    res.status(200).json(contact);
});

//@desc updateContact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }

    if( contact.user_id.toString() !== req.user.id ){
        res.status(403);
        throw new Error ('User denied permission');
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new : true }
    )
    res.status(200).json(updatedContact);
});

//@desc deleteContact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }

    if( contact.user_id.toString() !== req.user.id ){
        res.status(403);
        throw new Error ('User denied permission');
    }

    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"Contact deleted sucessfully"});
    
});

module.exports = {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}