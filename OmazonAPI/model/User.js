const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {  
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    paymentPassword: {type:String , required:true},
    isSeller: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);