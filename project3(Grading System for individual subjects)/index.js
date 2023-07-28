
// Function for marksheet 
function marksheet(){
let name = prompt("PLease Enter Your Name");
let father_Name = prompt("Please Enter Your father's Name");
let rollNumber = +prompt("PLease Enter Your Roll Number");

// Obtained Marks 
let math_ob = Number(document.getElementById("math_ob1").value);
let urdu_ob = Number(document.getElementById("urdu_ob1").value);
let english_ob = Number(document.getElementById("english_ob1").value);
let islamiyat_ob = Number(document.getElementById("islamiyat_ob1").value);
let pakistan_std_ob = Number(document.getElementById("pakistan_std_ob1").value);
let chemistry_ob = Number(document.getElementById("chemistry_ob1").value);
let physics_ob = Number(document.getElementById("physics_ob1").value);
let computer_ob = Number(document.getElementById("computer_ob1").value);
 obtained_Marks = Number(math_ob+urdu_ob+english_ob+islamiyat_ob+pakistan_std_ob+chemistry_ob+physics_ob+computer_ob);
    // Total Marks 
let math = 150;
let urdu = 150;
let english = 150;
let islamiyat = 100;
let pakistan_std = 100;
let chemistry = 150;
let physics = 150;
let computer = 150;
 total_Marks = (math+urdu+english+islamiyat+pakistan_std+chemistry+computer+physics);

// individual Percentage % Calculation system

let per1 =((math_ob/math)*100).toFixed(2);
let per2 = ((urdu_ob/urdu)*100).toFixed(2);
let per3 = ((english_ob/english)*100).toFixed(2);
let per4 = ((islamiyat_ob/islamiyat)*100).toFixed(2);
let per5 = ((pakistan_std_ob/pakistan_std)*100).toFixed(2);
let per6 = ((chemistry_ob/chemistry)*100).toFixed(2);
let per7 = ((physics_ob/physics)*100).toFixed(2);
let per8 = ((computer_ob/computer)*100).toFixed(2);
console.log(per1);
// Result 
 result = ((obtained_Marks/total_Marks)*100).toFixed(2);
    // stylesheet linking and Page header tags
document.write(' <link rel="stylesheet" href="index.css"> <header><nav>&nbsp<center><h1>Percentage & Grading Calucalation System for Matric </h1></center><a href="https://www.facebook.com/ahmadrazakhokhar.developer/"><img src="./ahmad.JPG" alt="ahmad" id="span"></a></nav></header>');
// Individual subject's grading system Table
document.write('<body><br><br><br><center><form><table><thead>MarkSheet </thead> <th>Name:</th><th><div>'+name+'</div></th><th>S/O</th><th><div>'+father_Name+'</div></th><th>Roll Number</th><th><div>'+rollNumber+'</div></th>');

document.write('<tr><th>SNO.</th><th>Subject</th><th>Obtained Marks</th><th>%Age</th><th>Total Marks</th><th>Grade</th></tr>');
document.write('<tr><td><b>1</b></td><td><div><b>Math</b></div></td><td><div>'+math_ob+'</div></td><td>'+per1+'</td><td><p>150</p></td>');
// sub1  grading system
if(per1>100){
    alert("Please enter correct values, Now Refresh the page to get valid calculations");
    location.reload();
}
else if((per1)>=90){document.write('<td><b>A+</b></td>');}
else if((per1)>=80){document.write('<td><b>A</b></td>');} else if((per1)>=70){document.write('<td><b>B</b></td>');}
else if((per1)>=60){document.write('<td><b>C</b></td>');} else if((per1)>=50){document.write('<td><b>C</b></td>');}
else if((per1)>=40){document.write('<td><b>F</b></td>');} else{document.write('<td><b>U</b></td></tr>');}


document.write('<tr><td><b>2</b></td><td><div><b>Urdu</b></div></td><td><div>'+urdu_ob+'</div></td><td>'+per2+'</td><td><p>150</p></td></td>');
// sub2
if(per2>100){
    alert("Please enter correct values, Now Refresh the page to get valid calculations");
    location.reload();
}
else if((per2)>=90){document.write('<td><b>A+</b></td>');}
else if((per2)>=80){document.write('<td><b>A</b></td>');} else if((per2)>=70){document.write('<td><b>B</b></td>');}
else if((per2)>=60){document.write('<td><b>C</b></td>');} else if((per2)>=50){document.write('<td><b>D</b></td>');}
else if((per2)>=40){document.write('<td><b>F</b></td>');} else{document.write('<td><b>U</b></td></tr>');}


document.write('<tr><td><b>3</b></td><td><div><b>English</b></div></td><td><div>'+english_ob+'</div></td><td>'+per3+'</td><td><p>150</p></td>');
//sub3
if(per3>100){
    alert("Please enter correct values, Now Refresh the page to get valid calculations");
    location.reload();
}
else if((per3)>=90){document.write('<td><b>A+</b></td>');}
else if((per3)>=80){document.write('<td><b>A</b></td>');} else if((per3)>=70){document.write('<td><b>B</b></td>');}
else if((per3)>=60){document.write('<td><b>C</b></td>');} else if((per3)>=50){document.write('<td><b>D</b></td>');}
else if((per3)>=40){document.write('<td><b>F</b></td>');} else{document.write('<td><b>U</b></td></tr>');}


document.write('<tr><td><b>4</b></td><td><div><b>Islamiyat</b></div></td><td><div>'+islamiyat_ob+'</div></td><td>'+per4+'</td><td><p>100</p></td>');
//sub4
if(per4>100){
    alert("Please enter correct values, Now Refresh the page to get valid calculations");
    location.reload();
}
else if((per4)>=90){document.write('<td><b>A+</b></td>');}
else if((per4)>=80){document.write('<td><b>A</b></td>');} else if((per4)>=70){document.write('<td><b>B</b></td>');}
else if((per4)>=60){document.write('<td><b>C</b></td>');} else if((per4)>=50){document.write('<td><b>D</b></td>');}
else if((per1)>=40){document.write('<td><b>F</b></td>');} else{document.write('<td><b>U</b></td></tr>');}

document.write('<tr><td><b>5</b></td><td><div><b>Pakistan Studies</b></div></td><td><div>'+pakistan_std_ob+'</div></td><td>'+per5+'</td><td><p>100</p></td>');
//sub5
if(per5>100){
    alert('Please enter correct values, Now Refresh the page to get valid calculations');
    location.reload();
}
else if((per5)>=90){document.write('<td><b>A+</b></td>');}
else if((per5)>=80){document.write('<td><b>A</b></td>');} else if((per5)>=70){document.write('<td><b>B</b></td>');}
else if((per5)>=60){document.write('<td><b>C</b></td>');} else if((per5)>=50){document.write('<td><b>D</b></td>');}
else if((per5)>=40){document.write('<td><b>F</b></td>');} else{document.write('<td><b>U</b></td></tr>');}


document.write('<tr><td><b>6</b></td><td><div><b>Chemistry</b></div></td><td><div>'+chemistry_ob+'</div></td><td>'+per6+'</td><td><p>150</p></td>');
//sub6
if(per6>100){
    alert("Please enter correct values, Now Refresh the page to get valid calculations");
    location.reload();
}
else if((per6)>=90){document.write('<td><b>A+</b></td>');}
else if((per6)>=80){document.write('<td><b>A</b></td>');} else if((per6)>=70){document.write('<td><b>B</b></td>');}
else if((per6)>=60){document.write('<td><b>C</b></td>');} else if((per6)>=50){document.write('<td><b>D</b></td>');}
else if((per6)>=40){document.write('<td><b>F</b></td>');} else{document.write('<td><b>U</b></td></tr>');}


document.write('<tr><td><b>7</b></td><td><div><b>Physics</b></div></td><td><div>'+physics_ob+'</div></td><td>'+per7+'</td><td><p>150</p></td>');
//sub7
if(per7>100){
    alert("Please enter correct values, Now Refresh the page to get valid calculations");
    location.reload();
}
else if((per7)>=90){document.write('<td><b>A+</b></td>');}
else if((per7)>=80){document.write('<td><b>A</b></td>');} else if((per7)>=70){document.write('<td><b>B</b></td>');}
else if((per7)>=60){document.write('<td><b>C</b></td>');} else if((per7)>=50){document.write('<td><b>D</b></td>');}
else if((per7)>=40){document.write('<td><b>F</b></td>');} else{document.write('<td><b>U</b></td></tr>');}


document.write('<tr><td><b>8</b></td><td><div for=""><b>Computer</b></div></td><td><div>'+computer_ob+'</div></td><td>'+per8+'</td><td><p>150</p></td>');
//sub8
if(per8>100){
    alert('Please enter correct values, Now Refresh the page to get valid calculations');
    location.reload();
}
else if((per8)>=90){document.write('<td><b>A+</b></td>');}
else if((per8)>=80){document.write('<td><b>A</b></td>');} else if((per8)>=70){document.write('<td><b>B</b></td>');}
else if((per8)>=60){document.write('<td><b>C+</b></td>');} else if((per8)>=50){document.write('<td><b>D</b></td>');}
else if((per8)>=40){document.write('<td><b>F</b></td>');} else{document.write('<td><b>U</b></td></tr>');}


// Overall Result MarkSheet including Percentage Obtained and Tatal Marks along the final Grade 
document.write(('<h2>Your Achivements!</h2>'));
document.write("<tr><td>" + name + "</td><td> <b> Your Total Marks: </b> " + total_Marks + "</td></tr>");

document.write("<tr><td>" + name + "<b></td><td> Your obtained marks: </b>" + obtained_Marks + "</td></tr>");

document.write("<tr><td>" + name + "</td><td> <b> Your result</b>: " + result+ "</td></tr>");



// Grading and Percentage % System For Total Obtained Marks

if((result)>= 90){
    document.write("<tr><td>"+name + "</td><td>Have achived <b>A+</b> Grade </td> </tr>");
    document.write("<tr><td>"+name + "</td><td> has done an exellent job</td></tr>" );
}
else if((result)>= 80){
    document.write("<tr><td>"+name + "</td><td>Have achived <b>A</b> Grade </td></tr>");
    document.write("<tr><td>"+name + "</td><td>  has done a remarkable performance </td> </tr>" );
}
else if((result)>= 70){
    document.write("<tr><td>"+name + "</td><td> Have achived <b>B+</b> Grade");
    document.write("<tr><td>"+name + "</td><td> has done a good job </td></tr>" );
}
else if((result)>= 60){
    document.write("<tr><td>"+name + "</td><td> Have achived <b>B</b> Grade");
    document.write("<tr><td>"+name + "</td><td> has done a fair job </td></tr>" );
}
else if((result)>= 50){
    document.write("<tr><td>"+name + "</td><td> Have achived <b>C+</b> Grade");
    document.write("<tr><td>"+name + "</td><td> has done a satisfactory job </td></tr>" );
}
else if((result)>= 40){
    document.write("<tr><td>"+name + "</td><td> Have achived <b>C</b> Grade");
    document.write("<tr><td>"+name + "</td><td> is an underacheiver </td></tr>" );
}
else{
    document.write("<tr><td>"+name + "</td><td> Have achived U Grade</td></tr>");
    document.write("<tr><td>"+name + "</td><td> Has Failed in the Exams </td></tr></table></form></center></body>");
}

// footer 
document.write("<footer><div><p>copywrite license &copy; Ahmad Raza </p><p> Under the license @2023</p></div></footer>");
};


// Email Sending Functions 
function sendEmail() {
  Email.send({
  Host: "smtp.gmail.com",
  Username : "Your Gmail Address",
  Password : "Your Gmail Password",
  To : 'recipient’s email address',
  From : "sender’s email address",
  Subject : "email subject",
  Body : "email body",
  Attachments : [
  	{
  		name : "smtpjs.png",
  		path:"https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
  	}]
  }).then(
  	message => alert("mail sent successfully")
  );
}