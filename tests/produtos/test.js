const chai = require('chai');
const chaiHttp = require('chai-http');
const subSet = require('chai-subset'); 
const server = require('../../index');
const produtoService = require("../../services/produtos/services");

chai.use(chaiHttp);
chai.use(subSet);


//variaveis auxiliares para o teste

let _id = "";
let produto = {
    "Imagem": "Sem Imagem",
    "Preco": 1.99,
    "Estoque": 1,
    "Habilitado": true,
    "Nome": "Produto De Teste",
    "Descricao": "Descricao do produto de teste"
}

describe("Produtos", () => {

    describe("/POST produto", () => {
        it("Testando POST de Produto", (done) => {
            chai.request(server)
                .post("/api/produto")
                .send(produto)
                .end((err, res) => {
                    chai.expect(err).to.be.null;
                    chai.expect(res).to.have.status(200);
                    chai.expect(res.body.dados).to.containSubset(produto);
                    _id = res.body.dados._id;
                    done();
                });
        });
    });

    

    describe("/GET produto", () => {
        it("Testando GET todos os Produtos", (done) => {
            chai.request(server)
                .get("/api/produto")
                .end((err, res) => {
                    chai.expect(res).to.have.status(200);
                    chai.expect(res.body).to.be.a('array');
                    done();
                });
        });
    });

    describe("/GET/:id produto", () => {
        it("Testando GET de Produtos por Id", (done) => {
            chai.request(server)
                .get(`/api/produto/${_id}`)
                .end((err, res) => {
                    chai.expect(res).to.have.status(200);
                    //chai.expect(res.body).to.be.a('array');
                    chai.expect(res.body._id).to.be.eq(_id);
                    chai.expect(res.body).to.be.not.empty;
                    done();
                });
        });
    });

    describe("/PUT/:id produto", () => {
        it("Testando PUT de Produtos por Id", (done) => {
            produto.Nome = "Nome do Produto de Testes depois de Editar";
            chai.request(server)
                .put(`/api/produto/${_id}`)
                .send(produto)
                .end((err, res) => {
                    chai.expect(res).to.have.status(200);
                    chai.expect(res.body.dados._id).to.be.eq(_id);
                    chai.expect(res.body.sucesso).to.be.eq(true);
                    chai.expect(res.body.dados.Nome).to.be.eq("Nome do Produto de Testes depois de Editar");
                    done();
                });
        });
    });


    describe("/DELETE/:id produto", () => {
        it("Testando DELETE de Produtos por Id", (done) => {
            console.log(_id);
            chai.request(server)
            .delete(`/api/produto/${_id}`)
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                //chai.expect(res.body).to.be.a('array');
                chai.expect(res.body.sucesso).to.be.eq(true);
                chai.expect(res.body.menssagem).to.be.eq("Produto apagado com sucesso");
                done();
            });
            done();
        });
    });

});