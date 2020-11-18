import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty } from "sequelize-typescript";

export interface SellerI{
    id?: number | null
    name: string
}

@Table(
    {
        tableName: "seller",
        timestamps: true
    }
)
export default class Seller extends Model implements SellerI{
    
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number
    
    @AllowNull(false)
    @NotEmpty
    @Column
    name!: string
}