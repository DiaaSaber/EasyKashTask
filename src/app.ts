import * as express from "express"
import { sequelize } from "./database"

const app = express()
const port = 3000;

app.listen(port, () => {
    console.log(`App runing at http://localhost:${port}`);
    sequelize.authenticate().then(async() => {
        console.log("Database Connected Successfully!")

        try {
            await sequelize.sync({force: true})
        } catch (error) {
            console.log("Error : " + error.message);
        }

    }).catch( (e: any) => {
        console.log("Error : " + e.message);
    })
})