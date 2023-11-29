import {Table, Column, DataType, Model} from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: "wallets"
})

export class Wallets extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    id_loan!:number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    id_collector!:number
}