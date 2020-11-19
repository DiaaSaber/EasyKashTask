import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, ForeignKey, BelongsTo, CreatedAt } from "sequelize-typescript";
import Seller from "./seller.model";

// export interface OfferI {
//     id?: number | null
//     title: string
//     fees: number
//     amount: number
//     last_updated: Date
// }

@Table(
    {
        tableName: "offer",
        timestamps: true
    }
)
export default class Offer extends Model<Offer>{

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
    @CreatedAt
    last_updated!: Date

    @ForeignKey(() => Seller)
    @Column
    sellerId!: number;

    @BelongsTo(() => Seller)
    seller!: Seller;
}