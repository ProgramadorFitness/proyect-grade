import {Table, Column, Model, DataType} from 'sequelize-typescript'

@Table({
    timestamps: false,
    tableName:'users'
})

export class User extends Model {
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
    admission_date!: Date

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    roll_type!: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    state!:string
}