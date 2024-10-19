import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDto{
    @IsString()
    @IsNotEmpty()
title:string

@IsString()
@IsNotEmpty()
description:string

@IsString()
@IsNotEmpty()
link:string
}


export class EditDto{
@IsNotEmpty()
bookmarkid:number
@IsString()
@IsOptional()
title:string

@IsString()
@IsOptional()
description:string

@IsString()
@IsOptional()
link:string
}

export class deleteDto{
    @IsNotEmpty()
    @IsNumber()
    bookmarkid:number
}