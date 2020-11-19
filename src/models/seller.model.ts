import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, HasMany } from "sequelize-typescript";
import Offer from "./offer.model";

// export interface SellerI{
//     id?: number | null
//     name: string
//     offer: Offer
// }

@Table(
    {
        tableName: "seller",
        timestamps: true
    }
)
export default class Seller extends Model<Seller>{
    
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number
    
    @AllowNull(false)
    @NotEmpty
    @Column
    name!: string

    @HasMany(() => Offer)
    offer!: Offer[];
}