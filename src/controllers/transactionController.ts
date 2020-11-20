import { Request, Response } from 'express';
import { sequelize } from "../database";
import Offer from '../models/offer.model';
import Seller from '../models/seller.model';

class transactionController {
    static listAll = (req: Request, res: Response) => {
        //page=1&per_page=10&seller_id=id
        let seller_id = req.query.seller_id;
        let page = req.query.page;
        let per_page = req.query.per_page;

        //const offset=0;
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
            console.log("totalPages : " + totalPages);
            const response = {
                "data": {
                    "paging": {
                        "totalPages": totalPages,
                        "pageNumber": page,
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