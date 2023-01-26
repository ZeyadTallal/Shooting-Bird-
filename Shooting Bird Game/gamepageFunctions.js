//move functions
    //move right function for birds
        let moveright = function(imageCreator)
        {
            if(imageCreator.offsetLeft < (innerWidth - (imageCreator.width))-20)
            {
                imageCreator.style.left=imageCreator.offsetLeft+10+"px";
            }
            else
            {
                imageCreator.remove();
                birdsObjectContainer.shift(imageCreator);
            }
                
        }

    //move down function for bomb
        let movedown = function(bomb)
        {
            let id4 = setInterval(function()
            {
                if(bomb.offsetTop < (innerHeight - (2*bomb.height)))
                {
                    bomb.style.top=bomb.offsetTop + 10 + "px";
                }
                else
                {   
                    bomb.remove();
                    clearInterval(id4);
                }
            },100);   
        }    