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

const createCounter = function(init) {
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