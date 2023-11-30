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
    id_user!:number

}