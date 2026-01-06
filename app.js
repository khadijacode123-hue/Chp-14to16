// =========>Question:1<=========

var empty = [];
// =========>Question:2<=========
var students = ["", "", "", "", "", "", "", "", "", ""];

// =========>Question:3<=========
var students = ["Khadija", "Ayesha", "Sana", "Amna", "Zainab"];

// =========>Question:4<=========
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// =========>Question:5<=========

var answers = [true, false, false, true];

// =========>Question:6<=========

var mixed = ["Arwa", 19, true, false, "Ali", 20];

// =========>Question:7<=========

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("<h1>Qualifications:</h1> <br>");
document.write("1)" + qualifications[0] + "<br>")
document.write("2)" + qualifications[1] + "<br>")
document.write("3)" + qualifications[2] + "<br>")
document.write("4)" + qualifications[3] + "<br>")
document.write("5)" + qualifications[4] + "<br>")
document.write("6)" + qualifications[5] + "<br>")
document.write("7)" + qualifications[6] + "<br>")
document.write("8)" + qualifications[7] + "<br>")

// =========>Question:8<=========

var students = ["Khadija", "Ayesha", "Sana"];
var score = [300, 450, 350];
var totalMarks = 500;
var percentage = (score / totalMarks * 100);
document.write("Score of " + students[0] + " is " + score[0] + " Percantage:" + score[0] / totalMarks * 100 + "%<br>");
document.write("Score of " + students[1] + " is " + score[1] + " Percantage:" + score[1] / totalMarks * 100 + "%<br>")
document.write("Score of " + students[2] + " is " + score[2] + " Percantage:" + score[2] / totalMarks * 100 + "%<br>")

// =========>Question:9<=========

var colors = ["Red", "Green", "Blue"];
var user = prompt("Which color you want to add in the beginning?");
colors.unshift(user)
document.write(colors + "<br>");
var user1 = prompt("Which color you want to add in the end?");
colors.push(user1)
document.write(colors + "<br>");
var user2 = prompt("Which color you want to add in the beginning?");
var user3 = prompt("Which color you want to add in the beginning?");
colors.unshift(user2, user3)
document.write(colors + "<br>");
var user4 = prompt("Which color you want to delete from the beginning?");
colors.shift(user4)
document.write(colors + "<br>");
var user5 = prompt("Which color you want to delete from the end?");
colors.pop(user5)
document.write(colors + "<br>");

var user6 = prompt("At which index you want to add a color?");
var user7 = prompt("Which color you want to add?");
colors.splice(user6, 0, user7)
document.write(colors + "<br>");
var user8 = prompt("At which index you want to delete color(s)?");
var user9 = prompt("How many colors you want to delete?");
colors.splice(user8, user9)
document.write(colors + "<br>");

// =========>Question:10<=========
var scores = [320, 230, 480, 120];
scores.sort();
document.write("Scores of Students:" + scores + "<br>");
document.write("Ordered Scores of Students:" + scores.sort() + "<br>");

// =========>Question:11<=========

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities List:<br>" + cities + "<br>");
var selectedCities = cities.slice(2, 4);
document.write("Selected Cities List:<br>" + selectedCities + "<br>");

// =========>Question:12<=========
var cat = ["This", "is", "my", "cat"];
var catstring = cat.join("")
document.write("Array:<br>" + cat + "<br>");
document.write("String:<br>" + catstring + "<br>");

// =========>Question:13<=========

var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");
document.write("Devices:<br>" + devices + "<br>");
document.write("Out:<br>" + devices.shift() + "<br>");
document.write("Out:<br>" + devices.shift() + "<br>");
document.write("Out:<br>" + devices.shift() + "<br>");
document.write("Out:<br>" + devices.shift() + "<br>");

// end===================






