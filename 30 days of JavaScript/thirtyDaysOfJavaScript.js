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
        toBe: (val) => {
            if(val === initValue) {
                return val === initValue
            } else {
                throw new Error('Not Equal')
            }
        },
        notToBe: (val) => {
            if(val !== initValue) {
                return val !== initValue
            }
        }
    }
}

console.log(expect(5).notToBe(null))
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
