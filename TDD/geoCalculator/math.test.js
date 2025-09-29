const {add} = require("./math");

test("Does add() exist?", () => {
    expect(typeof add).toBe("function");
});

test("Does add() have only 2 params?", () => {
    expect(add.length).toBe(2);
});