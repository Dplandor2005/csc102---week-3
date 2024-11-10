function validate()
{
   // get variables from form  
   var name = document.getElementById("initstring").value;
   var lname = document.getElementById("str2").value;
   var empNum = document.getElementById("firstnum").value;
// concat name with a space in between 
   var fullname = name+ " " +lname + birthdate;

   document.getElementById("inputstatus").innerHTML = fullname;
// make sure string is long enough 
   if (fullname.length <=8)
   {
       document.getElementById("inputstatus").innerHTML = "Name already used"
   }

   if ( (empNum >30) || (empNum <28) )
   {
       document.getElementById("inputstatus").innerHTML = "number is not 9 digits";
   }
}