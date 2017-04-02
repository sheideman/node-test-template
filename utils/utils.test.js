const expect = require('expect');

const utils = require('./utils');
describe('Utils',()=>{
  describe('#add', ()=>{
    it('should add two numbers', () => {
        var res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');
    });
    it('should async add two numbers', (done) => {
        var res = utils.asyncAdd(4, 3,(sum)=>{
          expect(sum).toBe(7).toBeA('number');
          done();
        });

    });
  })
describe('#square', ()=>{
  it('should async square', (done) => {
      var res = utils.asyncSquare(4,(sum)=>{
        expect(sum).toBe(16).toBeA('number');
        done();
      });

  });
  it('should square a number', () => {
      var res = utils.square(9);
      expect(res).toBe(81).toBeA('number');
  });
})
  it('should set first name and last name',()=>{
    var user = {location:'Mesa',age:41}
    var res = utils.setName(user,'Steve Heideman');
    expect(res).toInclude({firstName:'Steve', lastName:'Heideman'})
  })

})
