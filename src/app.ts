import * as express from "express"
import { sequelize } from "./database"
import Offer from "./models/offer.model";
import Seller from "./models/seller.model";
import routes from './routes/transactions';

const app = express()
const port = 3000;
app.use('/', routes);

app.listen(port, () => {
    console.log(`App runing at http://localhost:${port}`);
    sequelize.authenticate().then(async () => {
        console.log("Database Connected Successfully!")

        try {
            await sequelize.sync({ force: true })
            Seller.create({ name: "Diaa" })
            Seller.create({ name: "mohamed" })
            Seller.create({ name: "ahmed" })
            Seller.create({ name: "mostafa" })
            Offer.create({ title: "mobile", fees: 200, amount: 2, sellerId: 1 })
            Offer.create({ title: "tv", fees: 150, amount: 2, sellerId: 2 })
            Offer.create({ title: "laptop", fees: 500, amount: 1, sellerId: 1 })
            Offer.create({ title: "monitor", fees: 300, amount: 1, sellerId: 1 })
        } catch (error) {
            console.log("Error : " + error.message);
        }

    }).catch((e: any) => {
        console.log("Error : " + e.message);
    })
})