
// C->F: (°C × 1.8) + 32
// F->C: (°F - 32) / 1.8

const convertCelsiusToFahrenheit = (inTemp) => {

    if (typeof inTemp !== "number") return "Invalid number.";
    if (inTemp < -273.15) return "Error, temp out of range."

    return inTemp * 1.8 + 32;
}

const convertFahrenheitToCelsius = (inTemp) => {

    if (typeof inTemp !== "number") return "Invalid number.";
    if (inTemp < -459.6) return "Error, temp out of range.";

    return (inTemp - 32) / 1.8;
}

module.exports = {
    convertCelsiusToFahrenheit,
    convertFahrenheitToCelsius
}