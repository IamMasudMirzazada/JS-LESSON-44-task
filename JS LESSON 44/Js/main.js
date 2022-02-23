// function Change(){
// var inpvalue = document.getElementById('itp1').value;
// var body =document.getElementById('body') 
//  body.setAttribute('class',inpvalue)
// }


// function check(params) {
//     var inpvalue = document.getElementById('itp1').value;
//     var body =document.getElementById('body') 
//     body.style.backgroundColor=inpvalue;
// }

 

function BackSpace(){ 
    var input=document.getElementById('itp2').value;
    var result=input.slice(0,-1);
    document.getElementById('itp2').value=result;
}