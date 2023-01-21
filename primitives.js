/**
 * The sum of two numbers 		
 *
 * @param		number1 Some number.
 * @param		number2 Some other number.
 * @returns	The sum of the two numbers.
 */
const sum = (number1, number2) => number1 + number2

/**
 * The subtract of two numbers 		
 *
 * @param		number1 Some number.
 * @param		number2 Some other number.
 * @returns	The subtract of the two numbers.
 */
const sub = (number1, number2) => number1 - number2

/**
 * The multiply of two numbers 		
 *
 * @param		number1 Some number.
 * @param		number2 Some other number.
 * @returns	The multiply of the two numbers.
 */
const mult = (number1, number2) => number1 * number2

/**
 * The division of two numbers 		
 *
 * @param		number1 Some number.
 * @param		number2 Some other number.
 * @returns	The division of the two numbers.
 */
const div = (number1, number2) => number1 / number2

/**
 * Give an year, returns the century 		
 *
 * @param		year An year above 100.
 * @returns	The corresponded century.
 */
const centuryFromYear = (year) => Math.ceil(year/100)

module.exports = {sum, sub, mult, div, centuryFromYear}