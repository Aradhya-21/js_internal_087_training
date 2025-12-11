//datetime and time stamp

let myDate=new Date()
console.log(myDate.toString())  //convert the output into readable format
console.log(myDate.toDateString()) //only provide the day and date in the output
console.log(myDate.toLocaleDateString())  //provide date in mm/dd/yyyy format
console.log(myDate.toLocaleString())   //provide date in mm/dd/yyyy format with time in GMT
console.log(myDate.toUTCString())