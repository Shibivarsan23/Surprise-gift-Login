function vars() {
    let Favmovie = document.getElementById('one').value;
    let Favcolor = document.getElementById('two').value;
    let JoePhoneNo = document.getElementById('three').value;
    let Prabhanickname = document.getElementById('four').value;

    if ((Favmovie == "oh my kadavule" || Favmovie == "OH MY KADAVULE") &&
        (Favcolor == "blue" || Favcolor == "BLUE") &&
        JoePhoneNo == "9384957970" &&
        (Prabhanickname == "JULI" || Prabhanickname == "juli")) {
        window.location.href = "./julii.html";
    } else {
        alert("wrong inputs");
    }
}
