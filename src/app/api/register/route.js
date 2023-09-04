import Database from "@/Database/Database";
import User from "@/Models/User";
import { hash } from "bcrypt";
import Joi from "joi";
import { NextResponse } from "next/server";


const schema = Joi.object({
  name : Joi.string().required(),
  email : Joi.string().email().required(),
  password : Joi.string().min(6).required(),
  role: Joi.string().required()
})

export  const  dynamic = 'force-dynamic'

export async function Post(req){
  await Database();
  const {name, email, password, role} = await req.json()

  //validate schema
  const{error} = schema.validate({name,email,password,role})

  if(error){
    return NextResponse.json({
      success : false,
      message : email.details[0]
    })
  }

  try{
     //check user is exit or not
     const isUserAlreadyExists = await User.findOne({email})

     if(isUserAlreadyExists){
      return NextResponse.json({
        success : false,
        message : 'User is already exist . please try with another email'
      })
     }
     else{
      const hashPassword = await hash(password,12)
      const newlyCreatedUser = await User.create({
        name,email,password : hashPassword,role 
      })

      if(newlyCreatedUser){
        return NextResponse.json({
          success : false,
          message : 'Account Created Successfully'
        })
      }

     }
  }
  catch(error){
    console.log('Error is new user registration')
    return NextResponse.json({
      success : false,
      message : 'Something went wrong ? please try agin latter'
    })
  }

}