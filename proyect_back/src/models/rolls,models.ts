import { Table, Model, DataType, Column } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: 'rolls'
})

export class Roll extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    id!: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    id_user!: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name_roll!: string
}

