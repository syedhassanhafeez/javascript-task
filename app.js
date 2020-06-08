// Chapter # 1
// task 1
alert("Good Morning")
// task 2
document.write("Error! Please enter a valid password.")
// task 3
document.write("Welcome to JS Land...<br/> Happy Coding!")
// task 4
alert("Welcome to JS Land...")
alert("Happy Coding!\nPrevent this page for creating additional dialogs.")
// task 5
console.log("Hello...I can run JS through my web browser's console")
// task 6
alert("Use of alert")
// Chapter 2
// task 1
var username;
// task 2
var myName = "Syed Hassan Bin Hafeez";
alert(myName)
// task 3
var message;
message = "Hello World";
alert(message)
// task 4
var name = "Syed Hassan Bin Hafeez";
alert(name)
var age = "15 years old";
alert(age)
var certification = "Certified Mobile Application Development";
alert(certification)
// task 5
var oneVariable;
oneVariable = "PIZZA\nPIZZ\nPIZ\nPI\nP "
alert(oneVariable)
// task 6
var email;
email = " syedhassanbinhafeez@gmail.com";
alert("My email address is" + email);
// task 7
var book = " A smarter way to learn JavaScript";
alert("I am trying to learn from the Book" + book)
// task 8
document.write("Yah! I can write HTML content through Javascript");
// task 9
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")
document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")
// Chapter 3
// task 1
var age = "15";
alert("I am " + age + " years old");
// task 2
var visits;
visits = parseInt(visits) + 1;
document.write("You have visited this site "+visits+" times")
// task 3
var birthYear = 2000;
document.write("My birth year is " + birthYear + "\nDatatype of my declared variable is number")
// task 4
var Visitorsname = "John Doe";
var Producttitle = "T-shirt";
var Quantity = "5";
document.write(Visitorsname + " ordered " + Quantity + Producttitle + "(s) on XYZ Clothing store");
// Chapter 4
// task 1
var name1, name2, name3;
// task 2
var name1, name2, myName_3,name$4,name$5;
// task 3
document.write("<h3>Rules for naming JS variables</h3>")
document.write("Variable names can only contain letters, numbers, dollar signs, and underscores.") 
document.write(" Variables must begin with a letter, $ . For example $name, _name or name ")
document.write("Variable names are case sensitive")
document.write(" Variable names should not be JS keywords")
// Chapter 5
// task 1
var value1 = 3;
var value2 = 5;
var addvalue = value1 + value2;
document.write("Sum of "+value1+" and "+value2+" is "+ addvalue)
// task 2
var addvalue = value1 + value2;
document.write("Sum of "+value1+" and "+value2+" is "+ addvalue)
var addvalue = value1 * value2;
document.write("Sum of "+value1+" and "+value2+" is "+ addvalue)
var addvalue = value1 / value2;
document.write("Sum of "+value1+" and "+value2+" is "+ addvalue)
var addvalue = value1 % value2;
document.write("Sum of "+value1+" and "+value2+" is "+ addvalue)
// task 3
var value;
value = 5;
document.write("Initial value:"+value)
var value1 = value + 1;
document.write("Value after increment is: "+value1)
var value2 = value1 + 7;
document.write("Value after addition is: "+value2)
var value3 = value2 - 1;
document.write("Value after decrement is: "+value3)
var value4 = value3 % 3;
document.write("The remainder is : "+value4)
// task 4
var ticket = parseInt("600PKR");
var ticket1 = 5;
var totalCost = ticket * ticket1;
document.write("Total cost to buy "+ticket1+" tickets to a movie is "+totalCost) 
// task 5
var table;
document.write("Table of 4<br /> 4 * 1 = 4<br /> 4 * 2 = 8<br /> 4 * 3 = 12<br /> 4 * 4 = 16<br /> 4 * 5 = 20<br /> 4 * 6 = 24<br />4 * 7 = 28<br /> 4 * 8 = 32<br />  4 * 9 = 36<br />  4 * 10 = 40<br />")
// task 6
var Celcius = 25;
var Fahrenheit = (Celcius * 9/5) + 32 
document.write(Celcius + " is "+Fahrenheit);
var Fahrenheit1 = 70; 
var Celcius1 = (Fahrenheit1 - 32) * (5/9);
document.write(Fahrenheit1 + " is " + Celcius1);
// task 7
var priceofitem1 = 650;
var priceofitem2 = 100;
var orderedquantityofitem1 = 3;
var orderedquantityofitem2 = 7;
var shippingcharges = 100; 
var totalCost = ((priceofitem1 * orderedquantityofitem1)+(priceofitem2 * orderedquantityofitem2)+shippingcharges)
document.write("Price of item 1 is "+priceofitem1+"<br />Quantity of item 1 is "+orderedquantityofitem1+"<br />Price of item 2 is"+priceofitem2+"<br />Quantity of item 2 is "+orderedquantityofitem2+"<br />Shipping Charges "+shippingcharges)
document.write("<br />Total cost of your order is "+totalCost)
// task 8
var totalMarks = 980;
var marksObtained = 804;
var percentage = ((marksObtained/totalMarks)*100)
document.write("<h2>Marks Sheet</h2><br /><br />Total marks:"+totalMarks+"<br />Marks obtained: "+marksObtained+"<br />Percentage: "+percentage)
// task 9
var usDollars = 104.80;
var saudiRiyals = 28;
var totalCurrency = ((10 * usDollars)+(25 * saudiRiyals))
document.write("<h2>Currency in PKR </h2><br />Total Currency in PKR: "+totalCurrency)
// task 10
var mathExpression = (((2 + 5) * 10) / 2)
document.write(mathExpression) 
// task 11
var currentYear = 2016;
var birthYear = 1992;
var yourAge = 24;
document.write("<h2>Age Calculator</h2><br />Current Year: "+currentYear+"<br />Birth Year: "+birthYear+"<br />Your Age: "+yourAge)
