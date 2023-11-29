import { Table, Column, DataType, Model } from "sequelize-typescript";

@Table({
    timestamps:false,
    tableName: "login"
})

export class Login extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    username!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    tipo!:number
}