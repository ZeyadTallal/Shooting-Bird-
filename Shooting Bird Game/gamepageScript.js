window.addEventListener("load",function()
{

//local storage
    document.querySelector(".txtboxstyle").innerHTML=localStorage.getItem("KEY1");
    //welcome message on the top left
    document.querySelector("#w").innerHTML=localStorage.getItem("KEY1");
//selectors and Variables
    let startButton = document.querySelector(".startbuttom");               //selecting startbutton
    let welcomeDiv = document.querySelector(".welcomedivstyle");            //selecting welcomediv 
    let timeLimetDiv=document.querySelector("#t");                          //selecting the timelimitdiv
    let winPopUP =  document.querySelector(".windivstyle");                 //selecting the WinPopUp
    let losePopUp = document.querySelector(".losedivstyle");                //selecting the LosePopUp
    let birdsContainer = document.querySelector("#i-c");                    //selecting the div in the Html containg all birds
    let birdImagesArray = ["bird1.gif","bird2.gif","bird3.gif"];            //Arrays conatins all source images of birds
    let birdsObjectContainer = [];                                          //Arrays contains all created birds 
    let score = 0;                                                          //intial score of killed birds equal zero
    let birdsKilled = 0;                                                    //intial number of killed birds equal zero
    let sec = 59;                                                           //sec variable
    let tryAgainButton1 = document.querySelectorAll(".tryagainbuttom")[0];  //selecting try again button in Win PopUp
    let tryAgainButton2 = document.querySelectorAll(".tryagainbuttom")[1];  //selecting try again button in Lose PopUp

//Event OnClick on the start button that's starts the game     
startButton.onclick = function()
{
        welcomeDiv.classList.add("hidden");
    //Creation of birds
        let id1 = setInterval(function()
        {   
              
            let randombird= birdImagesArray[Math.floor(Math.random() * birdImagesArray.length)];     //choose random bird image from array 
            let startlocation=Math.ceil(Math.random() *  550 /*innerHeight*/);   //choose random start position from the bird
            let imageCreator = document.createElement("img");    //creat bird image
            imageCreator.src = randombird;   //getting the random source

            imageCreator.classList.add("birdimage");          //adding class to the image created
            imageCreator.style.top = startlocation + "px";   //adding the positing

            birdsObjectContainer.push(imageCreator);     //pushing to birdsObjectContainer Array
            birdsContainer.append(imageCreator);        //adding to the div in the Html

        //OnClick event on the bird image
            imageCreator.onclick=function()
            {
                document.getElementById("fire").play();      //sound for on click
                birdsKilled++;
                if (this.src == 'http://127.0.0.1:5501/bird1.gif')          //blue bird
                {
                    console.log("blue");
                    score-=10;
                }
                else
                {
                    if(this.src == 'http://127.0.0.1:5501/bird2.gif')       //black bird
                    {
                        console.log("black");
                        score+=10;
                    }
                    else
                    {
                        if(this.src == 'http://127.0.0.1:5501/bird3.gif')   // wight bird
                        {
                        console.log("wight");
                        score+=5;
                        }
                    }
                }
                document.querySelector("#s").innerHTML= score ;          //effect on Html
                document.querySelector("#k").innerHTML= birdsKilled ;   //effect on Html
                this.remove();   //remove from div
            };   
        },2000); // end of set interval 1 that creats the birds

    //moving the birds to the right
        let id2 = setInterval(function()
        {
            birdsObjectContainer.forEach(element => {
            moveright(element);}); // foreach element in the array to call the function moveright to start move right 
        },100) //end of set interval 2 for moving the bird right
    
    //first Bomb that effects on  All birds    
        let id3 = setInterval(function() 
        {
            let bombStartlocation=Math.ceil(Math.random() *  900 /*innerWidth*/);   //choose random start postion for the bomb
            let bomb=document.createElement("img");     //creat bomb element
            bomb.src = "fullbomb.jfif";     
            birdsContainer.append(bomb);    //add the element to the Html
        
            bomb.classList.add("bombimage");               //add class
            bomb.style.left = bombStartlocation + "px";   //bombs start location
            movedown(bomb);   //calling of movedown function to the bomb

        //OnClick event on the bomb image    
            bomb.onclick = function()
            {
                //this.remove();
                this.src="explosion.gif"
                setTimeout(function(){
                    bomb.remove();
                },200);

                birdsObjectContainer.forEach(element => {
                    birdsKilled++;
                    if (element.src == 'http://127.0.0.1:5501/bird1.gif')           //blue birds
                    {
                        console.log("blue");
                        score-=10;
                    }
                    else
                    {
                        if(element.src == 'http://127.0.0.1:5501/bird2.gif')        //black birds
                        {
                            console.log("black");
                            score+=10;
                        }
                        else
                        {
                            if(element.src == 'http://127.0.0.1:5501/bird3.gif')    //wight birds
                            {
                            console.log("wight");
                            score+=5;
                            }
                        }
                    }
                    document.querySelector("#s").innerHTML= score ;         //effect on Html score display  
                    document.querySelector("#k").innerHTML= birdsKilled ;   //effect on Html number of killed birds display 
                }); // End of foreach 
            
                birdsObjectContainer.forEach(element => {
                    element.remove();            
                });

                birdsObjectContainer.splice(0,birdsObjectContainer.length);  //empety the array when first bomb is clicked on 
            
            }    //End of OnClick event on the first Bomb

        },10000); //End of time interval 3 for first bomb   
    
    //timer that appear in the top of screen    
        let id5=setInterval(function(){
            
            timeLimetDiv.innerHTML= sec;
            sec--;
        },1000); //end of timer 

    //second bomb that effect on the Surrounding Birds    
    let id6 = setInterval(function() 
    { 
        let surroundbombStartlocation=Math.ceil(Math.random() * 900 /*innerWidth*/);    //choose random location for the second bomb
        let surroundbomb=document.createElement("img");     //creat image 
        surroundbomb.src = "boomb.png";
        birdsContainer.append(surroundbomb);     //put the bomb image in the div Html
    
        surroundbomb.classList.add("bombimage"); //add style class to the bomb
        surroundbomb.style.left = surroundbombStartlocation + "px";  //start location of the bomb 
        movedown(surroundbomb);     //calling the movedown function for the bomb to start moving downwards
    //OnClick event on the Bomb image    
        surroundbomb.onclick = function()
        {
            //surroundbomb.remove(); //remove from the Html
            //Change the image OnClick on the Bomb image
            surroundbomb.src="smallex.jfif"; // 
            setTimeout(function(){
                surroundbomb.remove();
            },150);
            document.getElementById("bom").play();   //play sound for bomb
            let q = document.querySelectorAll(".birdimage"); // selectall birds
            //for each bird in the q array (queryselect all returns an array) check the condition of it 
            // if the dimensions of the bird image related to the surroundings of the bomb then the onclick event will be applied on it 
            q.forEach(element =>
            {
                if
                (   
                    ( 50 + (parseInt(element.style.left)) + (element.width) ) > ( ((parseInt(surroundbomb.style.left))) ) && 
                    ( (parseInt(element.style.left)) + (element.width) ) < ( (parseInt(surroundbomb.style.left)) + (surroundbomb.width) +50 ) 
                    && 
                    ( 50 + (parseInt(element.style.top)) + (element.height) ) > ( (parseInt(surroundbomb.style.top)) ) &&
                    ( (parseInt(element.style.top)) + (element.height) ) < ( (parseInt(surroundbomb.style.top)) + (surroundbomb.height) +50 )

                )
                {
                    element.remove();   //remove from Html
                    birdsKilled++;      
                    if (element.src == 'http://127.0.0.1:5501/bird1.gif')           //blue 
                    {
                    console.log("blue");
                    score-=10;
                    }
                    else
                    {
                        if(element.src == 'http://127.0.0.1:5501/bird2.gif')        //black
                        {
                        console.log("black");
                        score+=10;
                        }
                        else
                        {
                            if(element.src == 'http://127.0.0.1:5501/bird3.gif')    //wight
                            {
                                console.log("wight");
                                score+=5;
                            }
                        }
                    }
                }
                document.querySelector("#s").innerHTML= score ;         //effect score in Html
                document.querySelector("#k").innerHTML= birdsKilled ;   //effect number of birds killed in Html
                
            }); //end of foreach
        };      //end of Onclick event 
    },5000);    //end of setinterval for second bomb

    // After 1 min the settimeout will end all the setintervals by the clear interval
    let timer = setTimeout(function(){

        localStorage.setItem("KEY2",score); //Add the score to the local storage
        //Calculating the HighScore
        if(score > (parseInt(localStorage.getItem("HEIGHSCORE"))))
        {
            localStorage.setItem("HEIGHSCORE",score);
        }
        clearInterval(id1);     //clear interval for creating the birds and the Onclick event on the birds
        clearInterval(id2);     //clear interval for moving birds right
        clearInterval(id3);     //clear interval for first bomb that remove All birds
        clearInterval(id5);     //clear interval for the timer 
        clearInterval(id6);     //clear interval for second bomb that remove Surrounding birds
        
        birdsContainer.innerHTML="";    //clear the div
        //if the score is greater than 50 YOU WIN
        if(score >= 50)
        {
            document.querySelector(".n2").innerHTML=localStorage.getItem("KEY1"); 
            document.querySelector(".s2").innerHTML=localStorage.getItem("KEY2");
            winPopUP.classList.remove("hidden");
        } 
        //if the score is less than 50 YOU LOSE
        else
        {
            document.querySelector(".n1").innerHTML=localStorage.getItem("KEY1"); 
            document.querySelector(".s1").innerHTML=localStorage.getItem("KEY2");
            losePopUp.classList.remove("hidden");
        } 
    },60000); //End of SettimeOut

}//End of start button
 
//get the last score from the local storage to appear to the user  
    document.querySelector(".s3").innerHTML=localStorage.getItem("KEY2");
//Highest score on the top right
document.querySelector("#high").innerHTML=localStorage.getItem("HEIGHSCORE");    

//try again button in winpopup
    tryAgainButton1.onclick=function()
    {
        window.location.href="game.html";
    }

//try again button in losePopup
    tryAgainButton2.onclick=function()
    {
        window.location.href="game.html";
    }
// X button in losePopUp 
    let xButton1 =  document.querySelector(".Xbuttom");
    xButton1.onclick=function()
    {
        window.location.href="index.html";
    }
// X button in WinPopUp 
    let xButton2 =  document.querySelector(".Xbuttom2");
    xButton2.onclick=function()
    {
        window.location.href="index.html";
    }    

})//end of add eventlistner