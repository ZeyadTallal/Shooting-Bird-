window.addEventListener("load",function(){        

//local storage
    //last player name
        document.querySelector(".n").innerHTML=localStorage.getItem("KEY1"); 
    //last score     
        document.querySelector(".s").innerHTML=localStorage.getItem("KEY2");
    //High score  
    document.querySelector(".HS").innerHTML=localStorage.getItem("HEIGHSCORE");      
    //last sign in 
        document.querySelector(".t").innerHTML=localStorage.getItem("KEY3");

//selectors
    //NameTextBox
        let nameTextBox = document.querySelector(".textboxstyle");
        let nameTextBoxError1 = document.querySelectorAll(".spanstyle")[0];     //NameTextBox validation 1 
        let nameTextBoxError2 = document.querySelectorAll(".spanstyle")[1];     //NameTextBox validation 2
    //DropDownList
        let dropDownlist = document.querySelector(".dropdownliststyle");
        let dropDownlistError1 = document.querySelectorAll(".spanstyle")[2];    //DropDownList validaton 1
        let dropDownlistError2 = document.querySelectorAll(".spanstyle")[3];    //DropDownList validaton 2
    //Gobutton
        let gobuttom = document.querySelector(".Gobuttom");
        let gobuttomError = document.querySelectorAll(".spanstyle")[4];         //GoBotton Validation

//events
    //Validation of textbox
        //1- if Textbox is empety
            nameTextBox.onblur = function()
            {
                if(this.value == "")
                {
                    nameTextBoxError1.classList.remove("spanstyle");
                }
                else
                {
                    nameTextBoxError1.classList.add("spanstyle");
                }
            }
        //2- if Number is entered insted of Letters
            nameTextBox.onkeypress=function(event)
            {
                if(!isNaN(event.key))
                {
                    event.preventDefault();
                    nameTextBoxError2.classList.remove("spanstyle");
                }
                else
                {
                    nameTextBoxError2.classList.add("spanstyle");
                }
            }

    //validation of dropdownlist
        //1-if Game level is not selected
            dropDownlist.onblur = function()
            {
                if(this.value == "")
                {
                    dropDownlistError1.classList.remove("spanstyle");
                }
                else
                {
                    dropDownlistError1.classList.add("spanstyle");   
                }
            }
        //2-if Number is entered insted of letters 
            dropDownlist.onkeypress = function(event)
            {
                if(!isNaN(event.key))
                {
                    event.preventDefault();
                    dropDownlistError2.classList.remove("spanstyle");
                }
                else
                {
                    dropDownlistError2.classList.add("spanstyle");
                }
            }

    //go button
            gobuttom.onclick = function()
            {
                let currentDate = new Date().toJSON().slice(0, 10);
                localStorage.setItem("KEY3",currentDate);
                if(nameTextBox.value != "" && dropDownlist.value != "")
                {
                localStorage.setItem("KEY1",pascalcase(nameTextBox.value));
                window.location.href="game.html";
                }
                else
                {
                    gobuttomError.classList.remove("spanstyle");
                }
            } 

}) // end of add eventkistner       