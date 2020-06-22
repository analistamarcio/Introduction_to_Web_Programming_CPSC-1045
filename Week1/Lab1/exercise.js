let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let userName = firstName.substring(0, 1) + lastName.substring(0, 5) + (Math.floor(Math.random() * 89) + 10);
console.log(userName);
