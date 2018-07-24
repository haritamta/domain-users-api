process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
var Mockgoose = require('mockgoose').Mockgoose;
var mockgoose = new Mockgoose(mongoose);

let User = require('../models/user');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
before(function (done) {
    mockgoose.prepareStorage().then(function () {
        console.log("testing")
        mongoose.connect('localhost:27017/users', { useNewUrlParser: true }, function (err) {
            done(err);
        });
    });
});

describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        User.remove({}, (err) => {
            done();
        });
    });

    describe('/POST user', () => {
        it('it should POST a user account ', (done) => {
            let user = {
                givenName: "Peter",
                surname: "Pan",
                email: "peter@test.com.au",
                suburb: "Pyrmont"
            }
            chai.request(server)
                .post('/submit')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.givenName.should.be.eql("Peter");
                    res.body.suburb.should.be.eql("Pyrmont");
                    //   console.log(JSON.stringify(res.body));
                    let id = res.body._id;
                    let userUpdate = {
                        suburb: "Newtown"
                    }
                    chai.request(server)
                        .post('/update/' + id)
                        .send(userUpdate)
                        .end((err, res) => {
                            res.should.have.status(200);
                            chai.request(server)
                                .get('/' + id)
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.suburb.should.be.eql("Newtown");
                                    done();
                                });
                        });
                });
        });
    });

});