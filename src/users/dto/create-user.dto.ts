import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({ example: "user@email.ru", description: "Электронная почта пользователя" })
    readonly email: string;

    @ApiProperty({ example: "Pass12345", description: "Пароль пользователя" })
    readonly password: string;
}