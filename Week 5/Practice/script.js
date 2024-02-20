arr=["Faisal","Hassan","Hanzla","Kashif","Ukasha"]
console.log(arr)

arr.pop()
console.log(arr)

arr.push("Ukasha")
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift("Faisal")
console.log(arr)

arr1 = ["Imtiaz","Shoaib"]
arr2 = arr.concat(arr1)
console.log(arr2)

arr3 = arr2.slice(2)
console.log(arr3)

arr4 = arr3.splice(1, 0,"Faisal","Hassan")
console.log(arr4)

a = arr2.indexOf("Hanzla")
console.log("Index of Hanzla is "+ a)

console.log(arr2.lastIndexOf("Shoaib"))

console.log(arr2.includes("Faisal"))
console.log(arr2.includes("Ali"))

array = [{id:1,name: 'Banana'},{id:2,name: 'Mango'},{id:3,name: 'Guava'},{id:2,name: 'Mango'},{id:3,name: 'Guava'},{id:2,name: 'Mango'}]
const obj = {}
let element;
for(let i=0;i<array.length;i++){
     element = array[i].id;
if(obj[element]){
    obj[element]++;
}
else{
    obj[element] = 1;
}
}
console.log(obj)