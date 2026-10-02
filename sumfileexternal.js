num1 = txtfirst;
num2 = txtscnd;
result = txtresult;
compute = compute;
reset = resetbutton;

function getSum(){
    const fstnumber = document.getElementById("txtfirst").value;
    const scndnumber = document.getElementById("txtscnd").value;
    var compute = 0;

    const fNum = parseInt(fstnumber , 10);
    const sNum = parseInt(scndnumber ,10);
    compute = fNum + sNum;
    document.getElementById("txtresult").value = compute;
}
