import {sum, mult, inc} from './functions.js'

test('sum function test', () => {
    expect(sum(10,10)).toEqual(20);
    expect(sum(1,10)).toEqual(11);
    expect(sum(0,-5)).toEqual(-5);
})

test('mult function test', () => {
    expect(mult(10,10)).toEqual(100);
    expect(mult(1,10)).toEqual(10);
    expect(mult(0,6)).toEqual(0);
})

test('inc function test', () =>{
    expect(inc(2)).toEqual(3);
    expect(inc(-5)).toEqual(-4);
    expect(inc(0)).toEqual(1);
})