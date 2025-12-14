//Task 1

let marks = [80, 90, 70, 85, 95];

let avg=marks.reduce((a,v)=>a+v,0)

avg=avg/5;

console.log(avg)

//Task 2

let numbers = [1,2,3,4,5,6,7,8,9];

let even=numbers.filter(n=>n%2==0);

console.log(even)


//Task 3

let cart = { 
item: "Laptop", 
price: 45000, 
quantity: 2 
}; 

let bill=cart.price*cart.quantity;

console.log(bill)


//Task 4

let movies = ["Inception", "Avatar", "Interstellar", "The Dark Knight", "Joker"];
console.log(movies)
movies.push("Dhurandhar")
console.log(movies)
movies.pop()
console.log(movies)

for(let i=0;i<movies.length;i++){
    console.log(movies[i])
}


//Task 5

let user = {name:"Aman", age:21, course:"JS"};

let jsonD=JSON.stringify(user);//converting object -> JSON
console.log(jsonD);

let objD=JSON.parse(jsonD);//converting JSON -> object
console.log(objD)


//Task 6
let arr = [10, 40, 25, 80, 15];

let max=arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}

console.log(max)

//Task 7

let names=["ram","shyam","mohan"];

let upper=names.map(n=>n.toUpperCase())

console.log(upper)


