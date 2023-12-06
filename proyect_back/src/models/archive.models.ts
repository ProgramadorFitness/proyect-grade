import {Table, Model, Column, DataType} from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: "archive"
})

export class Archive  extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    id!:number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    route!:string
}