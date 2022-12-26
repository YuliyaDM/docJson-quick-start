/**
 * Want to see a tutorial about index page? Go here - {@tutorial index-tutorial}. 
 */
const calculator = require('./calculator')

console.log(calculator.getSum(100, "45"));
console.log(calculator.getMultiply(43, 98));
console.log(calculator.getDifferenceDefault(45, 89));
console.log(calculator.getDividing(45, "398"));
console.log(calculator.getDegree(2, 5));



/* --- TypeDefs --- */

/**
 * @typedef {object} WorkerType
 * @property {string} name
 * @property {string} last_name
 * @property {number} age
 */

/** * @type {WorkerType} */
const WORKER_EXAMPLE = {
    name: "Julian",
    last_name: "Roberts",
    age: 28
}



/* --- strings --- */

/**
 * Organization type
 * @type {string}
 */
const ORGANIZATION = "Moon Company"

/**
 * Working status type
 * @type {"working" | "not working"}
 */
const WORKING_STATUS = "working"

/**
 * Deadline type
 * @type {"yes" | "no"}
 */
const DEADLINE = "yes"



/* --- numbers --- */

/**
 * Workers Amount type
 * @type {number}
 */
const WORKERS_AMOUNT = 9



/* --- Arrays --- */

/**
 * List of ages type
 * @type {number[]}
 */
const AGELIST = [29, 23, 19, 8]

/**
 * Workers type
 * @type {Array<number>}
 */
const WORKERS_AGE = [23, 43, 32];



/* --- Object --- */

/** 
 * User type 1
 * @type {{age: number, name: string, last_name: string}}
 */
const USER_EXAMPLE_1 = {
    age: 12,
    name: "Jane",
    last_name: "Doe"
}

/**
 * Student creation
 * @param {string} name 
 * @param {number} age 
 * @returns {void}
 * @constructor
 */
function Student(name, age) {
    this.name = name;
    this.age = age;
}

/**
 * Return name
 * @returns {string} return name
 */
Student.prototype.GetName = function() {
    return this.name
}

/**
 * Return age
 * @returns {number} return age
 */
Student.prototype.GetAge = function () {
    return this.age
}

/**
 * @type {Student}
 */
const STUDENT_EXAMPLE = new Student("Mike", 23)

console.log(STUDENT_EXAMPLE.GetAge(), STUDENT_EXAMPLE.GetName())



/* --- Functions --- */

/**
 * Random Function type
 * @param {number} [min = 1] 
 * @param {number} [max = min + 1] 
 * @returns {number}
 */
function Random (min = 1, max = min + 1) {
    return Math.round(Math.random() * (max - min) + min)
}

/**
 * @param {number} amount - your amount of objects
 * @param {number} totals - total amount of objects
 * @returns {string}
 */
function PercentConverter (amount, totals) {
    /** @type {number} */
    const percents = Math.round(amount / (totals / 100))
    return `${percents}%`
}



/* --- Classes --- */

class Member {

    /**
     * @constructor constructor of class Member
     * @param {string} name name of the new member
     * @param {string} last_name last_name of the new member
     * @param {number} age age of the new member
     * @param {string} email email of the new member
     */
    constructor(name, last_name, age, email) {
        /**
         * @property {string} __ID
         * @private
         */
        let __ID;

        /**
         * @property {string} name 
         */
        this.name = name;

        /**
         * @property {string} last_name
         */
        this.last_name = last_name;

        /**
         * @property {number} age
         */
        this.age = age;

        /**
         * @property {string} email
         */
        this.email = email;
        /**
         * @private
         */
        __ID = `adbcef${name}12345${this.age}` // just like an example
    }

    /**
     * name type
     * @property {Function} Name
     * @param {string} [name = undefined] 
     * @returns {void | string}
     */
    Name (name = undefined) {
        if (!name) return this.name
        this.name = name
    }

    /**
     * last name type
     * @property {Function} Last_name
     * @param {string} [last_name = undefined] 
     * @returns {void | string}
     */
    Last_name  (last_name = undefined) {
        if (!last_name) return this.last_name
        this.last_name = last_name
    }

    /**
     * email type
     * @property {Function} Email
     * @param {string} [email = undefined] 
     * @returns {void | string}
     */
    Email (email = undefined) {
        if (!email) return this.email
        this.email = email
    }

    /**
     * age type
     * @property {Function} Age
     * @param {number} [age = undefined] 
     * @returns {void | number}
     */
    Age (age = undefined) {
        if (!age) return this.age
        this.age = age
    }
}

/**
 * @type {Member}
*/
const MEMBER_EXAMPLE = new Member("Jack", "Adamson", 12, "jackadams04@gmail.com")

console.log(MEMBER_EXAMPLE.Age(), MEMBER_EXAMPLE)

/**
 * @file index.js is the root file for this experimental-project
 * @author Julia Pirogova <juliapirogova03@gmail.com>
 * @see {@link https://github.com/YuliyaDM?tab=repositories My Github}
 * @license Apache-2.0
 */