/**
 * Range gives you an array which has all the numbers from start param to end param.
 * @param start number
 * @param end number
 */
export const range = (start: number = 0, end: number): object => {
    let arr = [];
    while (start != end) {
        arr.push(start)
        start++
    }
    return arr
}

/**
 * Returns Generator Object for odd numbers
 * @param till number
 */
export function* oddGenerator(till: number) {
    let returnedArray = range(0, till);
    for (let number of Object.values(returnedArray)) {
        if (number % 2 !== 0) {
            yield number
        }
    }
}

/**
 * Returns Generator Object for even numbers
 * @param till number
 */
export function* evenGenerator(till: number) {
    let returnedArray = range(0, till) 
    for (let number of Object.values(returnedArray)) {
        if (number % 2 === 0) {
            yield number;
        }
    }
}
