import { Request, Response } from 'express';
import { sequelize } from "../database";
import Offer from '../models/offer.model';
import Seller from '../models/seller.model';

class transactionController {
    static listAll = (req: Request, res: Response) => {
        let seller_id = req.query.seller_id;
        let page = req.query.page;
        let per_page = req.query.per_page;

        const offset = Number(page)!=1 ? (Number(page)-1) * Number(per_page) : 0;
        console.log(`SellerID: ${seller_id}\nPage: ${page}\nPerPage: ${per_page}\nOffset: ${offset}`);
        Offer.findAndCountAll({
            where: {
                sellerid: `${seller_id}`
            },
            offset: offset,
            limit: Number(per_page)
        }).then(transactions => {
            console.log("Transaction Length : " + transactions.rows.length);
            //transactions.forEach(transaction => console.log(transaction));
            const totalPages = Math.ceil(transactions.count / Number(per_page));
            const response = {
                "data": {
                    "paging": {
                        "total": totalPages,
                        "current_page": page,
                        "per_page": transactions.rows.length
                    }
                },
                "transaction": transactions
            };
            res.json(response);
        })
    }
}

export default transactionController;