import {Table, Model, Column, DataType} from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: "collectors"
})

export class Collectors extends Model {
    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    name!:string

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    lastName!:string

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    email!:string

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    phone!:number

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    address!:string

}