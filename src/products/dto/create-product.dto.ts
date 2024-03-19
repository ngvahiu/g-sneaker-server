import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(20)
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsString()
    color: string;
}
