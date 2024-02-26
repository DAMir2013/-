function checkLengthElem(array) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i].length <= 3) {
            result.push(array[i]);
        }
    }

    return result;
}

console.log(checkLengthElem(['Hello', '2', 'world', ':-)']));
console.log(checkLengthElem(['1234', '1567', '-2', 'computer science']));
console.log(checkLengthElem(['Russia', 'Denmark', 'Kazan']));