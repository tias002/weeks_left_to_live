let ageinput=document.querySelector("#ageinput");
let calcbtn=document.querySelector("#calcbtn");
let result=document.querySelector("#result");
let displayresult=document.querySelector("#displayresult");
let resetbtn=document.querySelector("#resetbtn");
let refresh=document.querySelector(".refresh");

let mytimer;
let age;
calcbtn.addEventListener("click",function(){
      
    age=ageinput.value.trim();
    if(age=="")
    { 
        clearInterval(mytimer);
        let alert=document.querySelector(".alert");
        alert.classList.add('active');
        mytimer= setInterval(function(){
            alert.classList.remove('active');

        },4000)
    }
    else if(isNaN(age)==true)
    {
        clearInterval(mytimer);
        let alert2=document.querySelector(".alert2");
        alert2.classList.add('active');
        mytimer= setInterval(function(){
            alert2.classList.remove('active');

        },4000)

    }
    else{
        let answer=document.querySelector(".answer");
        answer.classList.add('active');

        let rem_years=90-age;
        let rem_week=rem_years*52;
        result.innerHTML=rem_week;
        ageinput.value="";
    }

});
resetbtn.addEventListener("click",function(){
    refresh.click();

});