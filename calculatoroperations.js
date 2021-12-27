function clr(){
    document.getElementById('textvalue').value="";
}

function display(buttonvalue)
{
    document.getElementById('textvalue').value+= buttonvalue;
}

function solve()
{
    let x= document.getElementById('textvalue').value;
    let y= eval(x);
    document.getElementById('textvalue').value = y;
}