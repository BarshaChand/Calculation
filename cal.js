function sum(){
    let a=Number(document.getElementById("first").value);
    let b=Number(document.getElementById("second").value);
    
    let sum=a+b;
    document.getElementById("result").innerHTML=sum;

}
function sub(){
    let a=Number(document.getElementById("first").value);
    let b=Number(document.getElementById("second").value);
    
    let sub=a-b;
    document.getElementById("result").innerHTML=sub;

}

function mul(){
    let a=Number(document.getElementById("first").value);
    let b=Number(document.getElementById("second").value);
    
    let mul=a*b;
    document.getElementById("result").innerHTML=mul;

}

function div(){
    let a=Number(document.getElementById("first").value);
    let b=Number(document.getElementById("second").value);
    
    let div=a/b;
    document.getElementById("result").innerHTML=div;

}

