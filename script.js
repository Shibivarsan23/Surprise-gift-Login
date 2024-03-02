function pic()
{
   let Nickname= document.getElementById('two').value 
   let password= document.getElementById('three').value

    if(Nickname=="JOE"||"joe" && password=="123")
    {
        window.location.href = "./joe.html";

}
else{
    alert("wrong inputs")
}}