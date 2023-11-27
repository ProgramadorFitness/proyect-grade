import {Table, Model, Column, DataType} from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: "clients2"
})

export class Client  extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    id_number!:number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    lastName!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    address!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    phone!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    phone2!:string
}