// Complete the function in the editor. In which you are given one object as a parameter, in that object, there is a data member named n a m e . Your task is to create a method inside this object named s e t t e r , such that this method will print the value of the data member named as name


 function Check(obj1){
    obj1.setter = function(){
     console.log(this.name)
   }
 }


//  Delete a Parameter

function Check(obj1) {
    delete obj1.rollno;
   return "True";
}


// Check whether the Package is Dream Package or not

function Check(obj1) {
    if(obj1["salary"]>500000){
      return "Dream";
    }
    else {
      return "NotDream"
    }
}

// Check whether the Object has a parameter or not

function Check(obj1) {
    let count_keys=0;
    for(let i in obj1){
      count_keys++;
    }
    if(count_keys>0){
      return "true";
    }
    else {
      return "false";
    }
 }

//  Merge the Objects

function Check(obj1,obj2) {
    return Object.assign(obj1, obj2)
}

//Object Multiplyer

function Check(a,obj1) {
    obj1["id"]=a*obj1["id"];
       obj1["houseno"]=a*obj1["houseno"];
       return obj1; 
   }


//    Find the  sum of Object Members

function Check(obj1) {
    let sum=0;
    for(let i in obj1){
      sum=sum+(obj1[i]);
    }
    return sum;
}



// Check whether the Objects are same or not.

function check(obj1,a,b) {
    let result = (obj1.name == a) && (obj1.id == b);
    if(result){
      return "true";
    }
    else{
      return "false";
    }
}

   