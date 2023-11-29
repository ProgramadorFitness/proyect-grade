import {Table, Model, Column, DataType} from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: "loans"
})

export class Loans extends Model {
    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    id_client!:number

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    value_initial!:number

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    value_end!:number

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    interest!:number
}