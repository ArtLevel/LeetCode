// 2667. Create Hello World Function

/**
 * @return {Function}
 */

const createHelloWorld = () => (...args) => 'Hello World'

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
		}
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
		toBe: (val) => val === initValue || (() => {
			throw new Error('Not Equal')
		})(),
		notToBe: (val) => val !== initValue || (() => {
			throw new Error('Equal')
		})()
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

const map = (arr, fn) => {
	const newArray = []

	for (let i = 0; arr.length > i; i++) {
		newArray[i] = fn(arr[i], i)
	}

	return newArray
}

const newArray = map([1, 2, 3], function plusI(n, i) {
	return n + i
})

console.log(newArray)

// 2626. Array Reduce Transformation
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (nums, fn, init) => {
	let accum = init

	for (let i = 0; nums.length > i; i++) {
		accum = fn(accum, nums[i])
	}

	return accum
}

console.log(reduce([1, 2, 3, 4], function sum(accum, curr) {
	return accum + curr
}, 0))

// 2634. Filter Elements from Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) => {
	const newArray = []

	for (let i = 0; arr.length > i; i++) {
		const item = arr[i]
		if (fn(item, i)) {
			newArray.push(item)
		}
	}

	return newArray
}

console.log(filter([1, 2, 3], function firstIndex(n, i) {
	return i === 0
}))

// 2629. Function Composition

const compose = (functions) => {

	return function(x) {
		let accum = x

		for (let i = functions.length - 1; i >= 0; i--) {
			accum = functions[i](accum)
		}

		return accum
	}
}

console.log(compose([x => x + 1, x => x * x, x => 2 * x])(4))

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// 2703. Return Length of Arguments Passed

const argumentsLength = (...args) => {
	let count = 0

	for (let i = 0; args.length > i; i++) {
		count += 1
	}

	return count
}

// 2666. Allow One Function Call

/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function(fn) {
	let isCalled = false

	return function(...args) {
		const result = isCalled ? undefined : fn(...args)

		isCalled = true

		return result
	}
}

let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1, 2, 3)) // 6
console.log(onceFn(2, 3, 6)) // returns undefined without calling fn

// 2723. Add Two Promises

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async (promise1, promise2) => {
	const res = await Promise.all([promise1, promise2])

	return res.reduce((acc, num) => acc + num, 0)
}

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
	.then(console.log) // 4

