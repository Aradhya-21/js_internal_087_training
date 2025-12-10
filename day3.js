//About array and its methods

let arr=["Apple", "Banana", "Mango", "Orange","Grapes"]
console.log(arr)


arr.push("Papaya")
console.log(arr)
arr.pop()

console.log(arr)

arr.unshift("Kiwi")
console.log(arr)
arr.shift()
console.log(arr)





//Order methods practice


let num = [10,15,20,25,30,35]
let double=num.map(n=>n*2)

console.log(double)

let ar=[2,4,6,8]
console.log(ar)
let doubles=ar.map(n=>n*2)
console.log(doubles)

let nums=[10,25,30,5,60]
console.log(nums)
let find=num.filter(n=>n>20)
console.log(find)


let n=[1,2,3,4,5]
console.log(n)
let sum=n.reduce((a,v)=>a+v,0)
console.log(sum)


//Object stores data in key-value pairs

let student = { 
name: "Rahul", 
age: 22, 
course: "JavaScript" 
}; 

console.log(student.name)
console.log(student['age'])
student.city="DELHI"
console.log(student)
delete student.age
console.log(student)

//Object -> JSON file
let jsonD=JSON.stringify(student)
console.log(jsonD)

let objD=JSON.parse(jsonD)
console.log(objD)


/*Day 3 Summary
Create arrays & apply common methods 
Iterate arrays using loops 
Use basic map, filter, reduce 
Create & modify objects 
Convert JSON ↔ Object*/