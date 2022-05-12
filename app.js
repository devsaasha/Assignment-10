
// #------------- Create an email pattern ------------ 

let email ="saasha735@gmail.com";
let emailPattern =/^[a-z0-9_.]*@[a-z]{2,}\.[a-z]{2,5}$/;
console.log(emailPattern.test(email));


// #------------- # Create a  username pattern ------------ 

let username ="saasha08";
let usernamePattern =/^[a-z0-9]{6,}|([a-z0-9_.]*@[a-z]{2,}\.[a-z]{2,5})$/;
console.log(usernamePattern.test(username));

// #------------- # Create a Bangladeshi phone number pattern ------------ 

let number ="01759632906";
let numberPattern =/^(\+8801|01|0088)[0-9]{9}$/;
console.log(numberPattern.test(number));

// #------------- # Create a password pattern ------------ 

let password ="112ashA@.";
let passwordPattern =/^[0-9a-z]*[A-Z]([*.!@#$%^&:;<>,.]){1,}$/;
console.log(passwordPattern.test(password));

// #------------- # Create a zipcode pattern ------------ 

let zipcode ="5860";
let zipcodePattern =/^[0-9]{4,5}$/;
console.log(zipcodePattern.test(zipcode));