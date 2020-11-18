import {Sequelize} from "sequelize-typescript"

export const sequelize = new Sequelize('easykash', 'root', '123', {
   host: 'localhost',
   dialect: 'mysql',
   models: [__dirname + '/models'] 
});