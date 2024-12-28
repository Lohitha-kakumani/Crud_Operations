//apis - CRUD

import User from '../model/userModel.js'; //user is in model

//create api - function to create the data
export const create = async(req, res) => {
    try{
        const userData = new User(req.body); //req.body - model - database

        if(!userData){
            return res.status(404).json({msg: "user data not found"});
        }

        const savedData = await userData.save();
        res.status(200).json(savedData); // sending the saved data

    }catch(error){
        res.status(500).json({error : error});
    }
}

//function to fetch the data
export const getAll = async(req,res) => {
    try{
        const userData = await User.find();
        if(!userData){
            return res.status(404).json({msg:"user data not found"});
        }

        res.status(200).json(userData);

    }catch(error){
        res.status(500).json({error:error});
    }
}

//to-get only one data not all
export const getOne = async(req,res) => {
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"user not found"});
        }
        res.status(200).json(userExist);

    }catch (error) {
        res.status(500).json({error: error});
    }
}

//function to update the data
export const update = async(req,res) => {
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg:"user not found"});
        }

        const updatedData = await User.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(updatedData);

    }catch(error){
        res.status(500).json({error:error});
    }
}

//delet data

export const deletUser = async(req,res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg: "user not exist"});
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"user deleted succesfullt"});
    } catch (error) {
        res.status(500).json({error:error});
    }
}