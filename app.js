//CHAPTER # 21-25

//Question # 1 :

function c21_q1() {
  var firstname = prompt("Enter your first name :", ),
     lastname = prompt("Enter your last name :", ),
    fullname=firstname+lastname;
    
    alert("Welcome! to my page " + fullname);
    
    
  
  }
  
  //Question # 2 :
  
  function c21_q2() {
    var fone_model = prompt("Enter your favourite mobile phone model :", );
    
    document.write("Your favourite phone model is: "+fone_model+"<br/> Length of string: "+fone_model.length);
    
  
  }
  
  //Question # 3 :
  
  function c21_q3() {
    var str="Pakistani";
    document.write("String: "+str+"<br/> Index of 'n': "+ str.indexOf('n'));

    
  
  }
  
  //Question # 4 :
  
  function c21_q4() {
    var str="Hello World";
    document.write("String: "+str+"<br/>Last index of 'l': "+ str.lastIndexOf('l'));

  
  
  }
  
  
  //Question # 5 :
  
  function c21_q5() {
    var str="Pakistani";
    document.write("String: "+str+"<br/> Character at index 3: "+ str.charAt(3));
  
       }
    
  
  
  
  //Question # 6 :
  
  function c21_q6() {
    var firstname = prompt("Enter your first name :", ),
     lastname = prompt("Enter your last name :", ),
    str="Welcome! to my page " ;
    
    alert(str.concat(firstname,lastname));
    
   
  
  }
  
  //Question # 7 :
  
  function c21_q7() {
    var city="Hyderabad",
    newcity=city.replace("Hyder","Islam")
    document.write("City: "+city+"<br> After Replacement: "+newcity);
  
  }
  //Question # 8 :
  
  function c21_q8() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    
    document.write("<h1>Before Replacement the text is:</h1> "+message);
   
    for (var i=0 ; i<message.length; i++){
        if(i===message.indexOf("and")){
            message=message.replace(/and/g ,"&");
        }
    }
   
    
    document.write("<h1>After Replacement the text is:</h1> "+message);
  
  }
  //Question # 9 :
  
  function c21_q9() {
    
    var str = "472",
    number=parseInt(str);
    document.write("Value :  "+str+"<br/> Type :  "+typeof(str));
    document.write("<br/> Value :  "+number+"<br/> Type :  "+typeof(number));
    
    
    
  
  }
  //Question #10 :
  
  function c21_q10() {
    
    var user_input = prompt("Enter any word :", ) ,
    capital_word=user_input.toUpperCase();
    document.write("User input :  "+user_input);
    document.write("<br/> Upper case:  "+capital_word);
    
    
  
  }
  
  
  //Question # 11 :
  
  function c21_q11() {
    var user_input = prompt("Enter any word :", ) ;
    
     var firstChar = user_input.slice(0, 1);
     var  otherChars = user_input.slice(1);
     firstChar = firstChar.toUpperCase();
     otherChars = otherChars.toLowerCase();
     var final_Str = firstChar + otherChars;
     document.write("User input :  "+user_input);
     document.write("<br/> Title case:  "+final_Str);
     
  
  }
  
  //Question # 12 :
  
  function c21_q12() {
    var num= 35.36;
    var numberAsString = num.toString().replace(".", "");

 document.write("Number :  "+num);
     document.write("<br/> Result :  "+numberAsString);
     
  
  }
  
  //Question # 13 :
  
  function c21_q13() {
    
    
    var username = prompt("Enter your username :",),
    char_check;
    

 for (var i = 0; i < username.length; i++) {
   char_check=username.charCodeAt(i);
  
 if (char_check===33 || char_check===44 || char_check===46 || char_check===64) {
 alert("Please enter a valid username");
 break;
 }
 }
  
  }
  
  //Question # 14 :
  
  function c21_q14() {
    var user_input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'm? :", ) ,
    A = ["cake", "apple pie", "cookie", "chips", "patties"];
    user_input=user_input.toLowerCase();
    for(var i=0 ; i<=4; i++){
      if(user_input===A[i]){
        alert(user_input+" is available at index "+i+" in our Bakery.");
        break;
      } 
      
    }
    if(user_input!==A[i]) {
    
      alert(user_input+" is not available in our Bakery.");
    }
  
  }
  
   //Question # 15 :
  
   function c21_q15() {
    var password = prompt("Enter password :", ) ,
    first_char=password.charCodeAt(0),
     pass_length=password.length,
    correct_pass;
    for(var i=0 ; i<pass_length; i++){
      correct_pass=password.charCodeAt(i);
      if(first_char>=48 && first_char <=57 ){
        if(pass_length<6){
        alert("Password can not begin with a number and it must at least 6 characters long \n Please enter a valid password");
        break;
      }
      else if(first_char>=48 && first_char <=57){

       
        alert("Password can not begin with a number \n Please enter a valid password");
        break;

      }
     
      

      }
      else if(pass_length<6){
        alert(" Password must at least 6 characters long \n Please enter a valid password");
        break;
      }
      else if((correct_pass<48 || correct_pass>57) && (correct_pass<65 || correct_pass>90) && (correct_pass<97 || correct_pass>122) ){
             alert(" Password should contain alphabets and numbers \n Please enter a valid password");
             break;
              }
      
    }
    
  }
 
   //Question # 16 :
  
   function c21_q16() {
    var university = "University of Karachi";
  var res = university.split(" ");
  var final_result;
  
  
  for(var i=0 ; i<res.length; i++){
   
    final_result=res[i].split("");
    document.write("<br/><br/>")
   
    for(var j=0 ; j<final_result.length; j++){
  
    
      document.write(final_result[j]+"  <br/>");
    }
      
    } 
    
  }
  
  
 
   //Question # 17 :
  
   function c21_q17() {
    var user_input = prompt("Input any string :", ) ,
    last_char=user_input.charAt(user_input.length-1);
    document.write("User input: "+user_input);
    document.write("<br/> Last character of input: "+last_char);


  }
 
   //Question # 18 :
  
   function c21_q18() {
    var text = "The quick brown fox jumps over the lazy dog",
     res = text.split(" ");
  
    count=0;
    for (var i=0 ; i<res.length; i++){
      if(res[i].toLowerCase()==="the"){
          count=count+1;
      }
  }
  document.write("Text: "+text);

  
  document.write("<br/> There are "+count+" occurances of the word 'the'");

}

//CHAPTER # 26-30

//Question # 1 :

function c26_q1() {
  var num = +prompt("Enter any positive integer :", ),
  round_value=Math.round(num),
  floor_value=Math.floor(num),
  ceil_value=Math.ceil(num);

    document.write("Number " + num);
    document.write("<br/> Round off value " + round_value);
    document.write("<br/> Floor value " +floor_value);
    document.write("<br/> Ceil value " + ceil_value);
    
    
  
  }
  
  //Question # 2 :
  
  function c26_q2() {
    var num = +prompt("Enter any negative integer :", ),
    round_value=Math.round(num),
    floor_value=Math.floor(num),
    ceil_value=Math.ceil(num);
  
      document.write("Number " + num);
      document.write("<br/> Round off value " + round_value);
      document.write("<br/> Floor value " +floor_value);
      document.write("<br/> Ceil value " + ceil_value);
      
      
      
  
  }
  
  //Question # 3 :
  
  function c26_q3() {
    var num = +prompt("Enter any number to find its absolute value :", ),
   absolute_value=Math.abs(num);
    document.write("The absolute value of "+num+" is "+absolute_value);

    
  
  }
  
  //Question # 4 :
  
  function c26_q4() {
    var bigDecimal = Math.random();
     var improvedNum = (bigDecimal * 6) + 1;
     var dice_value = Math.floor(improvedNum); 
    
     document.write("Random dice value: "+dice_value);
    
  
  
  }
  
  
  //Question # 5 :
  
  function c26_q5() {
    var bigDecimal = Math.random();
     var improvedNum = (bigDecimal * 6) + 1;
     var coin_value = Math.floor(improvedNum); 
     if(coin_value<=2){
     document.write(coin_value+"<br/> Random coin value: Heads ");
    }
    else if(coin_value>=2){
      document.write(coin_value+"<br/> Random coin value: Tails ");
     }

       }
    
  
  
  
  //Question # 6 :
  
  function c26_q6() {
    var bigDecimal = Math.random();
     var improvedNum = (bigDecimal * 99) + 1;
     var random_num = Math.floor(improvedNum); 
    
     document.write("Random number between 1 & 100: "+random_num);
   
  }
  
  //Question # 7 :
  
  function c26_q7() {
    var user_input=prompt("Enter your weight in kilograms ", );
    var user_weight=parseFloat(user_input);
    document.write("The weight of user is "+user_weight+" kilograms");
  
  }
  //Question # 8 :
  
  function c26_q8() {
    var user_input=+prompt("Input a number between 1 to 10 ", );
    var bigDecimal = Math.random();
     var improvedNum = (bigDecimal * 9) + 1;
     var secret_num = Math.floor(improvedNum); 
     if(user_input===secret_num){
      alert("Congratulation! you input a correct number "+secret_num);
     }
     else {
       alert("Try again!");
      }
 
      
    
     document.write("Random number between 1 & 100: "+random_num);
   
  }

  //CHAPTER # 31-34

//Question # 1 :

function c31_q1() {
  var currentDate = new Date();  
  alert("Current Date & Time: "+currentDate); 
  
  }
  
  //Question # 2 :
  
  function c31_q2() {
    var monthNames = ["January", "Febuary", "March", "April", "May", "June", "July","August","September","Octuber","November","December"];
 var now = new Date();
 var theMonth = now.getMonth();
 var current_month = monthNames[theMonth];
   
    alert("Current Month: "+current_month);
   
       
   
    
  }
  
  //Question # 3 :
  
  function c31_q3() {
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     var now = new Date();
 var theDay = now.getDay();
 var current_day = dayNames[theDay];
 if(current_day.length>3)
 {
   var day_name=current_day.slice(0,3);
   alert("Today is "+day_name);
  
    
 }
 else{
 alert("Today is "+current_day);
}
    
    
  
  }
  
  //Question # 4 :
  
  function c31_q4() {
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     var now = new Date();
 var theDay = now.getDay();
 var current_day = dayNames[theDay];
 if(current_day==="Sunday" || current_day==="Saturday")
 {
   
   alert("It’s Fun day");
  
    
 }
 else{
 alert("Today is "+current_day);
}
    
    
  
  
  }
  
  
  //Question # 5 :
  
  function c31_q5() {
    var now = new Date();
 var month_day = now.getDate();
if (month_day<16){
  alert("First fifteen days of the month");
}
else{
  alert("Last days of the month");
}
}
    
  
  
  
  //Question # 6 :
  
  function c31_q6() {
    var currentDate = new Date();  
    var millsSince = currentDate.getTime();
    var minSince=millsSince/60000;
    document.write("Current Date & Time: "+currentDate+"<br/> Elapsed milliseconds since January 1, 1970: "+millsSince+"<br/> Elapsed minutes since January 1, 1970: "+minSince);
       
  }
  
  //Question # 7 :
  
  function c31_q7() {
    var now = new Date();
    var day_time = now.getHours();
   if (day_time>12){
     alert("It's PM");
   }
   else{
     alert("It's AM");
   }
  }
  //Question # 8 :
  
  function c31_q8() {
    var laterDate = new Date("December 31, 2020");
    alert("Later date: "+laterDate);
  }
  //Question # 9 :
  
  function c31_q9() {
    
   var msDiff =  new Date().getTime() - new Date("April 25, 2020").getTime();
 var daysTillToday = Math.floor(msDiff / (1000 * 60 * 60 * 24));
 alert(daysTillToday+" days have passed since 1st Ramadan, 2020");
  }
  //Question #10 :
  
  function c31_q10() {
   var beginningDate=new Date("January 1, 2015 00:00:00");
   var refrenceDate=new Date("December 05, 2015 22:50:16");
    var mDiff =  refrenceDate - beginningDate ;
    var minutesTill = Math.floor(sDiff / (1000*60));
    document.write("On refrence date December 05, 2015 22:50:16 00:00:00 GMT +0500 (PKT) , "+minutesTill+" minutes had passed since beginning of 2015.");
   }
  
  //Question # 11 :
  
  function c31_q11() {
    var now = new Date();
    document.write("Current date: "+now);
    var dateHourAgo = new Date();
   dateHourAgo.setHours(dateHourAgo.getHours()-1);
    document.write("<br/> 1 hour ago it was : "+dateHourAgo);
   
  
  }
  
  //Question # 12 :
  
  function c31_q12() {
    var now = new Date();
    document.write("Current date: "+now);
    var dateYearsAgo = new Date();
   dateYearsAgo.setFullYear(dateYearsAgo.getFullYear()-100);
    document.write("<br/> 100 years ago it was : "+dateYearsAgo);
   
  }
  
  //Question # 13 :
  
  function c31_q13() {
    var age=+prompt("Enter your age: ", );
    var birthYear=new Date();
    birthYear.setFullYear(birthYear.getFullYear()-age);
    document.write("Your age is "+age);
    document.write("<br/> Your birth year is "+birthYear.getFullYear());
    
    
  
  }
  
  //Question # 14 :
  
  function c31_q14() {
    var customerName = prompt("Enter Customer Name: ", ) ,   
 currentMonth=prompt("Enter current month: ", ) ,
 Number_of_units=+prompt("Enter Number of units: ", ) ,
 Charges_per_unit=16 ,
 LatePaymentSurcharge=+prompt("Enter Late Payment Surcharge: ", ) ,
 netAmountPayable_withinDueDate = Number_of_units * Charges_per_unit,
 grosAmountPayable_afterDueDate = netAmountPayable_withinDueDate + LatePaymentSurcharge;
 document.write("<h1>K-Electric Bill</h1>");
 document.write("<br/> Customer Name: "+customerName);
 document.write("<br/> Current Month: "+currentMonth);
 document.write("<br/> No of units: "+Number_of_units);
 document.write("<br/> Charge per unit: "+Charges_per_unit);
 document.write("<br/><br/> Net Amount Payable (within Due Date): "+netAmountPayable_withinDueDate.toFixed(2));
 document.write("<br/> Late Payment Surcharge: "+LatePaymentSurcharge);
 document.write("<br/> Gross Amount Payable (after Due Date): "+grosAmountPayable_afterDueDate.toFixed(2));
 
  
  }

      //CHAPTER # 35-38

//Question # 1 :

function c35_q1() {
  var currentDate = new Date();  
  alert("Current Date & Time: "+currentDate); 
  
  }
  
  //Question # 2 :
  
  function c35_q2() {
    var first_name = prompt("Enter your first name :", );
    var last_name = prompt("Enter your last name :", );
    var full_name = first_name+last_name
    
    alert("Hello! " + full_name + " Welcome to my page");
    
  }
  
  //Question # 3 :
  
  function c35_q3() {
    var no1 = +prompt("Enter 1st no :", ),
 no2 = +prompt("Enter 2nd no :", );
 sum = no1 + no2 ;
 document.write("Sum of " + no1 + " and " + no2 + " is " + sum);
 
    
    
  
  }
  
  //Question # 4 :
  
  function c35_q4(no1,no2,operator) {
    
   var  sum=no1+no2,
    sub = no1 - no2 ,
    mul = no1 * no2 ,
    div = no1 / no2 ,
    mod = no1 % no2 ;
   
   if(operator==="+"){
    document.write("Sum of " + no1 + " and " + no2 + " is " + sum);
   
   }
   else if(operator==="-"){
    document.write("Subtraction of " + no1 + " and " + no2 + " is " + sub);
   
   }
   else if(operator==="*"){
    document.write("Product of " + no1 + " and " + no2 + " is " + mul);
   
   }
   else if(operator==="/"){
    document.write("Division of " + no1 + " and " + no2 + " is " + div);
   
   }
   else if(operator==="%"){
    document.write("Modulus of " + no1 + " and " + no2 + " is " + mod);
   
   }
   
  }
  
  //Question # 5 :
  
  function c35_q5(no) {
    
    var sqNo=no*no
    document.write("The square of the no is "+sqNo);
    
  
  
}
    
  
  
  
  //Question # 6 :
  
  function c35_q6() {
    var no = +prompt("Enter any no to find its factorial:", ),
    factorial=1;
    for(var i=1; i<=no; i++)  
{
factorial= factorial*i;
} 
document.write("Factorial of "+no+" is "+factorial); 
       
  }
  
  //Question # 7 :
  
  function c35_q7() {
    var start_no = +prompt("Enter any no to start the counting:", ),
     end_no = +prompt("Enter any no to end the counting:", );
     document.write("<h1>Counting from  "+start_no+" to  "+end_no+"</h1>"); 
       

     for(var i=start_no; i<=end_no; i++)  
{
  document.write("<br/> "+i); 
       

} 
  }
  //Question # 8 :
  
  function calculateHypotenuse() {
    var base = +prompt("Enter base of a right angle triangle:", ),
    perpendicular = +prompt("Enter perpendicular of a right angle triangle:", );
    
    function calculateSquare(){
      var base_sq=base*base,
       per_sq=perpendicular*perpendicular,
      Hypotenuse_sq =base_sq+per_sq,
      Hypotenuse=Math.sqrt(Hypotenuse_sq);
      document.write("Base of aright angle triangle: "+base); 
      document.write("<br/> Perpendicular of aright angle triangle: "+perpendicular); 
      document.write("<br/> Hypotenuse of aright angle triangle: "+Hypotenuse.toFixed(3)); 
  }
  calculateSquare();
  
   }
  //Question # 9 :
  
  function c35_q9_byVariable(width,height) {
    var area = width*height;
    document.write("Width of a Rectangle: "+width); 
    document.write("<br/> Height of a Rectangle:: "+height); 
    document.write("<br/> Area of a Rectangle: "+area); 

  
  }
  function c35_q9_byValue(width=5,height=3) {
    var area = width*height;
    document.write("Width of a Rectangle: "+width); 
    document.write("<br/> Height of a Rectangle: "+height); 
    document.write("<br/> Area of a Rectangle: "+area); 

  
  }
  
  //Question #10 :
  
  function c31_q10() {
    var string = prompt("Enter any string: ", ),
    res=string.split(""),
    j=res.length,
    check=false;
    for(var i=0; i<j;i++){
      j--;
      if(res[i]===res[j]){
        check=true;
      }
      else{
        check=false;
    document.write("It is not palindrome");
    break;
      }
    }
    if(check===true){
      document.write("It is palindrome");
    
    }
    } 
    
  
  
  
  //Question # 11 :
  
  function c31_q11(message) {
    
    document.write("Input String: "+message);
    document.write("<br/> Output String: ");
    var otherChars;
    var finalStr;
    var res=message.split(" ");
    for (var i=0; i<res.length;i++){
     firstChar = res[i].slice(0, 1);
      otherChars =res[i].slice(1);
     firstChar =firstChar.toUpperCase();
     otherChars = otherChars.toLowerCase();
     finalStr = firstChar + otherChars;
     document.write(finalStr+" ");
    }
   
   
  
  }
  
  //Question # 12 :
  
  function c31_q12(input_string) {
    
    document.write("Input String: "+input_string);
    document.write("<br/> Longest word: ");
 
   
    var res=input_string.split(" ");
    var longest_word=res[0];
    var check=false;
    
    for (var i=1; i<res.length;i++){
      if(longest_word.length<res[i].length){
        longest_word=res[i];
        check=true;
      }
      else{
        longest_word=longest_word;
      }
     
    }
    if (check===true){
    document.write(longest_word);
  }
    
  }
  
  //Question # 13 :
  
  function c31_q13(string,letter) {
    
     res = string.split("");
  
    count=0;
    for (var i=0 ; i<res.length; i++){
      if(res[i]===letter){
          count=count+1;
      }
  }
  document.write("String: "+string);

  
  document.write("<br/> There are "+count+" occurances of the letter ' "+letter+" ' in the word "+string);

  }
  
  //Question # 14 :
  
  function calculateCircumference() {
    var radius = +prompt("Enter radius of a circle:", ),
    circumference=2*3.142*radius;
    document.write("The circumference is "+circumference.toFixed(3));
   
    function calculateArea() {
     
      var Area=3.142*(radius*radius);
      document.write("<br/> Area of a circle: "+Area.toFixed(3)); 
  }
  calculateArea();
  
   }
 