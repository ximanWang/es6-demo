/**
 * remove Duplocate elements form array
 */
removeDupForEach = array => {
    let obj = {};

    array.forEach(element => {
        if (!obj[element]) {
            obj[element] = 0;
        }
    });

    return Object.keys(obj);
}

removeDupSet = array => {
    return [... new Set(array)]
}

removeDupFilter = array => {
    return array.filter((element, index) => {
        return index === array.indexOf(element);
    })
}

removeDupReduce = array => {
    let newArray = array.reduce((map, element) => {
        map[element] = 0;
        return map;
    },{})
    return Object.keys(newArray);
}


console.log(removeDupForEach([1, 2, 3, 3, 'e', 'r', 'd', 'w', 'e', 'd']));
console.log(removeDupSet([1, 2, 3, 3, 'e', 'r', 'd', 'w', 'e', 'd']));
console.log(removeDupFilter([1, 2, 3, 3, 'e', 'r', 'd', 'w', 'e', 'd']));
console.log(removeDupReduce([1, 2, 3, 3, 'e', 'r', 'd', 'w', 'e', 'd']));

