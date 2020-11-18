import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty } from "sequelize-typescript";

export interface OfferI{
    id?: number | null
    title: string
    fees: number
    amount: number
    last_updated: Date
}

@Table(
    {
        tableName: "offer",
        timestamps: true
    }
)
export default class Offer extends Model implements OfferI{
    
    @AllowNull(false)
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number
    
    @AllowNull(false)
    @NotEmpty
    @Column
    title!: string
    
    @AllowNull(false)
    @NotEmpty
    @Column
    fees!: number
    
    @AllowNull(false)
    @NotEmpty
    @Column
    amount!: number

    @AllowNull(false)
    @NotEmpty
    @Column
    last_updated!: Date
}