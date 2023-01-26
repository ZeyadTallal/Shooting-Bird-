//pascal Function
    const pascalcase = function (inputvalue)
    {
        let fullname = new String(inputvalue);
        let namearray = fullname.toLowerCase().split(" ");
        for(let i = 0 ; i < namearray.length ; i++)
        {
            namearray[i] = namearray[i][0].toUpperCase() + namearray[i].slice(1);
        }
        namearray = namearray.join(" ");
        return namearray;
    }