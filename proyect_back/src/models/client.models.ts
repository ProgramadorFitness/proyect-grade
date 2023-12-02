import {Table, Model, Column, DataType} from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: "clients"
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

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    state!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    genre!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    city!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    neighborhood!:string
}