const {add, subtract} = require('./demo1');

describe("Addition test", () => {
    test("Adding 2 and 4 = 6", () => {
    expect(add(2,4)).toBe(6);
    });
});

describe("Subtraction test", () => {
   test("Subtracting 2 from 4 = 2", () => {
       expect(subtract(4, 2)).toBe(2);
   });
});

