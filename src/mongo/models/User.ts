const mongoose = require('mongoose');

const userModel= mongoose.Schema(
    {
        name:{
            type: String,
            isRequired: true
        },
        events:[
            {
                type: Object,
            },
        ],
    }
)

const Users= mongoose.model("Users",userModel)
module.exports= Users;

export {};