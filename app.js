let dob= new Date (prompt('write age in this (12,august,2005)format')); 
let dobT = dob.getTime()
console.log('dobT',dobT);




let date = new Date();
let dTime = date.getTime();

console.log('dTime',dTime);
  


let callAge = dTime - dobT;
let final = Math.floor(callAge /(1000 * 60 * 60 * 24* 365));


console.log('final',final)

// console.log(date);       
// document.write(date);
 

// let dob = new Date ('12,june 2005');
// let dTime = dob.getTime();
// console.log('dobTime',dobTime);


