import { Request, Response } from 'express';
import { sequelize } from "../database";
import Offer from '../models/offer.model';
import Seller from '../models/seller.model';

class transactionController {
    static listAll = (req: Request, res: Response) => {
        //page=1&per_page=10&seller_id=id
        const seller_id = req.query.seller_id;
        const page = req.query.page;
        const per_page = req.query.per_page;

        Offer.findAll({ where: { sellerid: `${seller_id}` } }).then(transactions => {
            console.log("Transaction Length : " + transactions.length);
            transactions.forEach(transaction => console.log(transaction));
            res.json(transactions);
        })
        Seller.findAll().then(results => {
            console.log("Results Length : " + results.length);
        })
    }
}

export default transactionController;