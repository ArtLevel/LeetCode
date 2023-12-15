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
