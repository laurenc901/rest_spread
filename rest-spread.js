
 const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0)

 const findMin = (...nums) => Math.min(...nums)

 const mergeObjects = (a, b) => ({...a, ...b})

 const doubleAndReturnArgs = (arr, num1, num2) => [...arr, num1*2, num2*2];

 const removeRandom = items => {
     let index = Math.floor(Math.random() * items.length);
     return [...items.slice(0, index), ...items.slice(index +1)];
 }

 const extend = (array1, array2) => [...array1, ...array2];

 const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

 const removeKey = (obj, key) => {
     let removeObj = {...obj};
     delete removeObj[key];
     return removeObj;
 }

 const combine = (obj1, obj2) => ({...obj1, ...obj2});

 const update = (obj, key, val) => ({ ...obj, [key]: val })