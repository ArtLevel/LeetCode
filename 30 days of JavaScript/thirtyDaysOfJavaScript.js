// 2667. Create Hello World Function

/**
 * @return {Function}
 */

const createHelloWorld = () =>  (...args) => 'Hello World'

createHelloWorld()()

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// 2620. Counter

/**
 * @param {number} n
 * @return {Function} counter
 */

const createCounter = (n) => {
    let counter = n

    return () => {
        return counter++
    }
}

const counter = createCounter(10)
counter()
counter()
counter()

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// 2665. Counter II

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

const createCounter2 = function(init) {
    let count = init

    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => {
            count = init
            return init
        },
    }
}

class Counter {
    constructor(init) {
        this.init = init
        this.count = init
    }

    increment() {
        return ++this.count
    }

    decrement() {
        return --this.count
    }

    reset() {
        this.count = this.init
        return this.count
    }
}


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// 2704. To Be Or Not To Be

/**
 * @param {string} val
 * @return {Object}
 */

const expect = (initValue) => {
    return {
        toBe: (val) => val === initValue || (() => {throw new Error('Not Equal')})(),
        notToBe: (val) => val !== initValue || (() => {throw new Error('Equal')})()
    }
}

console.log(expect(5).notToBe(null))
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// 2635. Apply Transform Over Each Element in Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const map = (arr, fn) => arr.map(fn)

const newArray = map([1, 2, 3], function (n) {return n + 1})

console.log(newArray)

// 2626. Array Reduce Transformation
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (nums, fn, init) => nums.reduce(fn, init)

// 2634. Filter Elements from Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) => arr.filter(fn)