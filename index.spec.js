const sampleAdd = require('./index.js');

describe('sampleAdd', () => {
  it('should know how to do 1+1', () =>{
    expect(sampleAdd(1, 1)).toBe(2);
  });
  it('should know how to do 10+0', () =>{
    expect(sampleAdd(10, 0)).toBe(10);
  });
})
