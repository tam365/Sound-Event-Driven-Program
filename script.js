//Line two function declaring and etherating through each coditions and excuting 
function CountDown(){
    alert();
    var count = 10;  //My initial value to count down
    for(i=0; i < 11; i++){  //for loop checking the numbers of loop taken to make sure it went in until my count reachs zero
        setTimeout(function() // time interval to excute every one second
        {    
            document.getElementById("blast").innerHTML= ("Counting:"+ " "+count);  //count down get printed out every one second on the screen
                
            if(count == 5)   //if condition checks if count equals 5 to print out the next linie
            {
                document.getElementById("blast").innerHTML= ("Counting:"+ " "+ "YOU ARE HALF WAY:" + count );  //gets printed when only count=5
            }
           

             if(count == 0){
                document.getElementById("blast").innerHTML= ("Counting:"+ " " + count +":" + "Blast Off" );//gets printed when only count=0
            }
            count= count -1; //decrements by 1 everytime it loops
           
    
         },1000 * i) //calculating seconds for each index of loops to print out one second apart from each other
        
        }
    }


// declared a function called subited that promts information to input from keyboard
function Submited()
{
    var firstName= document.getElementById("fname").value; //first name alocated here
    var lastName= document.getElementById("lname").value;//last name alocated here
    var badge= document.getElementById("badgeN").value;//badge  number alocated here
    var fullName= firstName+ " " + lastName; //full  name alocated here
    
    if(fullName.length > 21) //A condition that checks to accept no more than 20 character in total for full name
    {
        alert("Please enter less than 20 characters:"); //Warning alert to re enter 
       
    } else{ 
        document.getElementById("wholeName").innerHTML = "Your Full Name Is:"+ fullName; // If all requered fullfilled will print out
    }
    
   if(badge.length > 3) //Only accepting three digits or less as badge number
   {
    alert("Too many digits re enter your badge:"); // Asks for re enter if it is more than three digits
   }else{
     document.getElementById("bnum").innerHTML="Your Badge Number:"+badge; // This will print out if all entered as requested.

   }

}

// Below function enables to fetch a given audio and makes it to play
function sound(src) {
    this.sound = document.createElement("audio"); // creates a sound by taking a music file from html source
    this.sound.src = src;
  
    this.play = function() { //this is our function to play a music
        this.sound.play();
    }
    
}

// An object function that playes my music file
function playStation()
{
    mySound = new sound ("./Over_the_Horizon.mp3");
    mySound.play();
}

//Toggle button enables on each click event
 function start()
 {
     document.getElementById("startbutton").disabled =true;
    document.getElementById("stopbutton").disabled=false;

}

// disables the toggle stop
function stop()
{
    
    document.getElementById("startbutton").disabled =false;
    document.getElementById("stopbutton").disabled=true;
}

