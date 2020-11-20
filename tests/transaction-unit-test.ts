import { Request, Response } from 'express';
const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
chai.use(chaiHttp)
const app = require('../src/app.ts')


//Unit Test to Test Transaction Endpoint

describe("Get /listall", function() {
	it("should return status 200", function(done) {
            setTimeout(done, 300);
            chai.request(app)
            .get('/listall')
            .end(function (err:Error, res:Response) {
                expect(res.status).to.equal(200);
            })
       });
});