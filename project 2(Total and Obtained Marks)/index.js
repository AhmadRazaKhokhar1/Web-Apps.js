alert("Hi Welcome to the Online Grading Website! Please answer to all the questions"); // we can use string using double quotes "" inside which anything written will be printed
// alert(2.5555); we add decimal integers in the alert
// alert(true); we use boolean data type in the alert
// Data type
// string ===>more than one character, number or symbols will be printed as it is
// number ===> 2, 3, 6, 1.255

// Boolean True and False
//Basic information

// To Ask a Question we use prompt
document.write('<link rel="stylesheet" href="style.css"> <center>'); 
Age = prompt("Enter Your Age");
confirm(Age +'years old');
// To write an alert
document.write("<br><br><br><form><b>Age: </b>" + Age + "years old"+"<br>");
console.log(Age); /*console.log() is used for checking developer errors*/

// Marks Percentage
student_Name = prompt("Enter Your Name");
document.write("<b>Name:</b>"+student_Name+"<br>");
student_Total_Marks = prompt("Enter your Total Marks");
student_Obtained_Marks = prompt("Enter your Obtained Marks");
document.write(student_Name+" Has Obtained  <b> "+ student_Obtained_Marks + " </b>/<b> " + student_Total_Marks+"</b><br><br>");
result = (student_Obtained_Marks / student_Total_Marks) * 100;

alert(result + "%");
console.log(result);
document.write("<table><tr><td>"+student_Name + "</td><td> have achived   <b>" + result + "</b> % </td></tr>");


// Grading for student's Percentage of the obtained marks

if(result >= 90){
    document.write("<tr><td>"+student_Name + "</td><td>Have achived " + " <b>A+</b> " + " Grade </td> </tr>");
    document.write("<tr><td>"+student_Name + "</td><td> has done an exellent job</td></tr>" );
}
else if(result >= 80){
    document.write("<tr><td>"+student_Name + "</td><td>Have achived  " + "<b>A</b>" + " Grade </td></tr>");
    document.write("<tr><td>"+student_Name + "</td><td>  has done a good job </td> </tr>" );
}
else if(result >= 70){
    document.write("<tr><td>"+student_Name + "</td><td> Have achived  " + "<b>B+</b>" + " Grade");
    document.write("<tr><td>"+student_Name + "</td><td> has done a fair job </td></tr>" );
}
else if(result >= 60){
    document.write("<tr><td>"+student_Name + "</td><td> Have achived  " + "<b>B</b>" + " Grade");
    document.write("<tr><td>"+student_Name + "</td><td> has done a satisfactory job </td></tr>" );
}
else if(result >= 50){
    document.write("<tr><td>"+student_Name + "</td><td> Have achived  " + "<b>C+</b>" + " Grade");
    document.write("<tr><td>"+student_Name + "</td><td> has done a satisfactory job </td></tr>" );
}
else if(result >= 40){
    document.write("<tr><td>"+student_Name + "</td><td> Have achived  " + "<b>C</b>" + " Grade");
    document.write("<tr><td>"+student_Name + "</td><td> has done a satisfactory job </td></tr>" );
}
else{
    document.write("<tr><td>"+student_Name + "</td><td> Have achived  " + "U" + " Grade");
    document.write("<br><tr><td>"+student_Name + "</td><td> Has Failed in the Exams </td></tr></table>" + "</form></center>");
}




/*
single equal '=' means assigning to a variable

double equals '==' means equals to and value is same

Triple equals '===' means strictly equals to the other value even the data type

*/
