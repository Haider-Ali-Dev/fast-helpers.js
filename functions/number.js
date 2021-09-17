const range = (start=0, end) => {
    let arr = [];
    while (start != end) {
        arr.push(start)
        start++
    };
    return arr
}

function* oddGenerator(till) {
    let returnedArray = range(0, till);
    for (let number of returnedArray) {
        if (number % 2 !== 0) {
            yield number
        }
    }
}

function* evenGenerator(till) {
    let returnedArray = range(0, till) 
    for (let number of returnedArray) {
        if (number % 2 === 0) {
            yield number;
        }
    }
}


export { range, oddGenerator, evenGenerator };