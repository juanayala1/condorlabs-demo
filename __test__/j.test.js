const request = require('supertest');
const app = require('../index');
const connect = require("../0. config/connectionMongoDb");
describe('Api testing', () => {
    const user =  { id: "1", name: "Username", login: "user"};

    beforeAll(async () => {
        await connect();
        jest.setTimeout(90 * 1000);  
    })

      
    it('Get all users', async (done) => {
        const expectedResponse = []
        await request(app)
        .get('/api/product')
        .expect(200)
        // .end((err, res) => {
        //     expect(res.body).toEqual(expectedResponse)
        //     done();
        // })
    }, 10000)
    // it('Create a user', (done) => {
    //     const expectedResponse = [user]
    //     request(app)
    //     .post('/user')
    //     .send(user)
    //     .expect(200)
    //     .end((err, res) => {
    //         expect(res.body).toEqual(expectedResponse)
    //         done();
    //     })
    // })
    // it('Get user record by id', (done) => {
    //     const expectedResponse = {...user}
    //     request(app)
    //     .get('/user/1')
    //     .expect(200)
    //     .end((err, res) => {
    //         expect(res.body).toEqual(expectedResponse)
    //         done();
    //     })
    // })
    // it('Update a user record', (done) => {
    //     const updateUser = {name: 'Updated name'}
    //     const expectedResponse = {...user, ...updateUser}
    //     request(app)
    //     .put('/user/1')
    //     .send(updateUser)
    //     .expect(200)
    //     .end((err, res) => {
    //         expect(res.body).toEqual(expectedResponse)
    //         done();
    //     })
    // })
    // it('Get user record which does not exists', (done) => {
    //     const expectedResponse = {
    //         message: 'No user found with given ID'
    //     }
    //     request(app)
    //     .get('/user/2')
    //     .expect(400)
    //     .end((err, res) => {
    //         expect(res.body).toEqual(expectedResponse)
    //         done();
    //     })
    // })
})