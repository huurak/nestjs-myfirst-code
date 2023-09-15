import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    
    @ApiProperty({ example: 1, description: "Уникальный идентификатор поля" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: "user@email.ru", description: "Электронная почта пользователя" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;
    
    @ApiProperty({ example: "Pass12345", description: "Пароль пользователя" })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: "false", description: "Статус блокиировки пользователя: Забанен или нет" })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: "Описание", description: "Причина блокировки пользователя" })
    @Column({ type: DataType.BOOLEAN, allowNull: true })
    banReason: string;

    @BelongsToMany( () => Role, () => UserRoles )
    roles: Role[];
}