// Ask the user to enter a 4 digit code. Ask the user to enter the password again. If the passwords are the same print "Password is set."
// If the passwords are different print "ERROR, Passwords are different."

var Usercode = parseInt(prompt("Enter your four digit code:"));
var UsercodeAgain= parseInt(prompt("Enter your digit code again"));

if( Usercode == UsercodeAgain)
{
    console.log("Password is set");
}

else
{
    console.log("Error, Passwords are Different!!!!");
}