const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../index');
const produtoService = require("../../services/produtos/services");

chai.use(chaiHttp);

describe("Produtos", () => {
    describe("/GET Produtos", () => {
        it("Testando GET todos os Produtos", (done) => {
            chai.request(server)
                .get("/api/produto")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});