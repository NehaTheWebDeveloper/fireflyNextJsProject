import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true,
      unique:true

    },
    isVerified:{
      type:Boolean,
      default:false

    },
    isAdmin:{
      type:Boolean,
      default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenEXpiry:Date,
    veriFyToken:Date,

  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;