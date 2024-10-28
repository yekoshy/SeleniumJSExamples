//add
//sub
//multiplication
//division
import { assert } from 'chai';

describe('Mathematical Operations - Test Suite', function(){

    it('Addition of two numbers', function(){
  
      let a = 10;
      let b = 10;
  
      let c = a+b;
  
      assert.equal(c,20);
  
    });

    it('substraction of two numbers', function(){
  
        let a = 10;
        let b = 10;
    
        let c = a-b;
    
        assert.equal(c,0);
    
      });
    it(' subdivision of two numbers', function(){
  
        let a = 10;
        let b = 10;
    
        let c = a/b;
    
        assert.equal(c,1);
    
      });
      it(' multiplication of two numbers', function(){
  
        let a = 10;
        let b = 10;
    
        let c = a*b;
    
        assert.equal(c,100);
    
      });

});
