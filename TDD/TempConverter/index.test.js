const { convertCelsiusToFahrenheit, convertFahrenheitToCelsius} = require("./index");

describe("Do functions exist?", () => {
    test("Does C-F function exist?", () => {
        expect(typeof convertCelsiusToFahrenheit).toBe("function");
    });
    test("Does F-C function exist?", () => {
        expect(typeof convertFahrenheitToCelsius).toBe("function");
    });
});

describe("Do functions accept only one param?", () => {
    test("Does C-F function accept only one param?", () => {
        expect(convertCelsiusToFahrenheit.length).toBe(1);
    });
    test("Does F-C function accept only one param?", () => {
        expect(convertFahrenheitToCelsius.length).toBe(1);
    });
});

describe("Do functions handle NaNs?", () => {

    let dataTypes = [ null, undefined, true, "hello", [] ];

    dataTypes.forEach((e) => {
        test(`Does C-F function handle ${e} ?`, () => {
            expect(convertCelsiusToFahrenheit(e)).toBe("Invalid number.");
        });
    });

    dataTypes.forEach((e) => {
        test(`Does F-C function handle ${e} ?`, () => {
            expect(convertFahrenheitToCelsius(e)).toBe("Invalid number.");
        });
    });
});

describe("Do functions return correct values?", () => {
    test("Does C-F function return correct value?", () => {
        expect(convertCelsiusToFahrenheit(-15)).toBeCloseTo(5, 0.1);
    });
    test("Does F-C function return correct value?", () => {
        expect(convertFahrenheitToCelsius(15)).toBeCloseTo(-9.4, 0.1);
    });
});

describe("Should gracefully handle zero Kelvin.", () => {
    test("Does C-F handle zero Kelvin?", () => {
        expect(convertCelsiusToFahrenheit(-273.16)).toBe("Error, temp out of range.");
    });
    test("Does F-C handle zero Kelvin?", () => {
        expect(convertFahrenheitToCelsius(-459.7)).toBe("Error, temp out of range.");
    });
});
