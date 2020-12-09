  function Validation()
  {
  let username=document.getElementById("username");
  let error1=document.getElementById("error1");
  return usernameValidation(username,error1);
    
    
  }
  
  function usernameValidation(username,error1)
  {
    let pwd=document.getElementById("pwd");
    let error2=document.getElementById("error2");
  
    if(username.value=="admin" )
    {
      error1.innerHTML="Valid username.";
      error1.style.color="green";
      return pwdValidation(pwd,error2);
      
    }
   else{
  
      error1.innerHTML="Invalid username.";
      error1.style.color="red";
      return false;
  
       } 
    
  }

  function pwdValidation(pwd,error2)
  {
    
    if( pwd.value=="12345")
    {
      error2.innerHTML="Correct password.";
      error2.style.color="green";
      return true;
      
    }
   else{
  
      error2.innerHTML="Incorrect password.";
      error2.style.color="red";
      return false;
  
       } 
    
  }