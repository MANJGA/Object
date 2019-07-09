let user = 1;

function test(obj){
  if (typeof obj !=="object"){
    alert("It isn't object");
  } else {

  let lenght=0;
  
  for (let key in obj){
     lenght++;
  };
  
  if (lenght===0){
    alert("Object is empty"); 
  } else {
    alert("Lenght of object is: " + lenght);
  };
  
 }

};

test(user);