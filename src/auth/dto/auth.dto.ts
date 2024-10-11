import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class AuthDto{
    //to use transformers you have to amke it a class
    @IsEmail()
    @IsNotEmpty()
    email:string;
    @IsString()
    @IsNotEmpty()
    password:string
    @IsString()
    @IsNotEmpty()
    firstName:string
    
    @IsString()
    @IsNotEmpty()
    lastName:string
}

export class SignInDto{

@IsEmail()
@IsNotEmpty()
email:string

@IsString()
@IsNotEmpty()
password:string
}

