import * as chai from 'chai'; // Import the entire Chai library
 // Assert no chaining Possible
 // Should, Expect  chaining is possibel
const { expect, assert } = chai;
chai.should();


// Activate `should` style

chai.should();
// Expect
let a=1, b=1;
expect(a).to.be.equals(b, "a and be are not equal");
//Should
a.should.be.equals(b);
//assert
assert.equal(a,b, "a and b are not equal")

// object/sting/boolean
function myObj(){
 return{

    a:100,
    b:'Hello',

 }

}
// here not copmaring the object content
 let x= new myObj () , y= new myObj();
//expect(x).to.be.equals(y, 'x and y are not equal');


 // to compare oject content: deep.equal deep.equals
 
 expect(x).to.be.deep.equals(y, 'x and y are not equal');
 //should
 x.should.to.be.deep.equals(y, 'x and y are not equal');
 //assert
  assert.deepEqual(y,x, "x and y are not equal");

 // chaining different expressions Should and Expect
 // x is an object; x and y are equal
 //keyword and, with, but , that
expect(x).to.be.an('object').and.to.be.deep.equals(y);
//Should
 x.should.to.be.an('object').and.to.be.deep.equals(y);


//arrays
 let numbers= [1,2,3,0];
 //expect(numbers).to.be.an('array').that.includes(4);
 numbers.should.be.an('array').that.includes(3);
 //assert
 assert.isArray(numbers, 'Numbers is not an Array');

 



