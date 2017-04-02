const request = require('supertest')
const expect = require('expect')

var app = require('./server').app;
describe('Server',()=>{
  describe('GET /',()=>{
    it('should return hello world', (done)=>{
      request(app)
        .get('/')
        .expect(200)
        .expect((res)=>{
          expect(res.body).toEqual({text:'hello world!'})
        })
        .end(done);
    });
  });
  describe('GET /users',()=>{
    it('should return user object', (done)=>{
      request(app)
        .get('/users')
        .expect(200)
        .expect((res)=>{
          expect(res.body).toInclude({
            name:'Steve',
            age:41
          })
        })
        .end(done);
    });
  })

})
