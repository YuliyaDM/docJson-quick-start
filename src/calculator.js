/**
 * The App module - {@tutorial calculator-tutorial}
 * @module calculator
 */

/**
 * @typedef {Function} CalculatorFunc
 * @param {string | number} number_1 - should be bigger than the second one (it is not super neccesarily)
 * @param {string | number} number_2
 * @returns {number}
 */

/** @type {CalculatorFunc} */
module.exports.getSum = (number_1, number_2) => ((+number_1) + (+number_2));

/** @type {CalculatorFunc} */
module.exports.getMultiply = (number_1, number_2) => ((+number_1) * (+number_2));

/** @type {CalculatorFunc} */
module.exports.getDifferenceDefault = (number_1, number_2) => ((+number_1) - (+number_2));

/** @type {CalculatorFunc} */
module.exports.getDividing = (number_1, number_2) => ((+number_1) / (+number_2));

/** @type {CalculatorFunc} */
module.exports.getDegree = (number_1, number_2) => ((+number_1) ** (+number_2));
