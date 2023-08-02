const Form = require('../models/form');

exports.formSubmit = async(req,res)=>{
    try{
        await Form.createOne(req.body);
        return res.status(200).json({
            message: "Registration Successfull!"
        });
    }
    catch(error)
    {
        console.log("Some error occured!");
        return res.status(500).json({
            message: "Server error!"
        });
    }
}
