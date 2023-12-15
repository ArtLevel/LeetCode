/**
 * @return {Function}
 */

const createHelloWorld = () =>  (...args) => 'Hello World'

createHelloWorld()()

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
