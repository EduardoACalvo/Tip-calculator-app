var buttonReset = document.getElementById("button-reset");
var peopleZero = document.getElementById("people-zero");
var billZero = document.getElementById("bill-zero");
var tipZero = document.getElementById("tip-zero");
var billFormat = document.getElementById("bill-format");
var peopleFormat = document.getElementById("people-format");
var inputPeople = document.getElementById("input-people");
var inputBill = document.getElementById("inputbill");
var lineTipHidden = document.getElementById("line-tip-hidden");
var TipPercent = '';
var inputTip0 = document.getElementById("tip-0");
var inputTip1 = document.getElementById("tip-1");
var inputTip2 = document.getElementById("tip-2");
var inputTip3 = document.getElementById("tip-3");
var inputTip4 = document.getElementById("tip-4");
var inputTip5 = document.getElementById("tip-5");


const loadPage = () => {
    functionTipState();
    document.getElementById("amount-number").innerHTML = "$0.00";
    document.getElementById("totalnumber").innerHTML = "$0.00";
    document.getElementById('inputbill').value = "";
    document.getElementById('inputpeople').value = "";
    document.getElementById('tip-5').value = "";
    lineTipHidden.className = "";
    tipZero.className = "tip-zero tip-zero-hidden";
    buttonReset.className = "button-reset button-reset-locked";
    peopleZero.className = "people-zero people-zero-hidden";
    inputPeople.className = "input-people";
    billZero.className = "bill-zero bill-zero-hidden";
    inputBill.className = "input-bill";
    var TipPercent = '';
}

const functionTipZero = () => {
    if (TipPercent === "" || TipPercent == "0" || TipPercent.length === 0) {
        tipZero.className = "tip-zero";
        lineTipHidden.className = "line-tip-hidden";
    } else {
        tipZero.className = "tip-zero tip-zero-hidden";
        lineTipHidden.className = "";
        buttonReset.className = "button-reset";
    }
}

const functionPeopleZero = () => {
    let obtainPcant = document.getElementById("inputpeople").value;
    if (obtainPcant === "" || obtainPcant === "0" || obtainPcant.length === 0) {
        peopleZero.className = "people-zero";
        inputPeople.className = "input-people input-people-outline";
        peopleFormat.className = "people-format people-format-hidden";
    } else {
        peopleZero.className = "people-zero people-zero-hidden";
        inputPeople.className = "input-people";
        peopleFormat.className = "people-format people-format-hidden";
    }
}

const functionBillZero = () => {
    let obtainBill = document.getElementById("inputbill").value;
    if (obtainBill === "" || obtainBill === "0" || obtainBill.length === 0) {
        billZero.className = "bill-zero";
        inputBill.className = "input-bill input-bill-outline";
        billFormat.className = "bill-format bill-format-hidden";
    } else {
        billZero.className = "people-zero bill-zero-hidden";
        inputBill.className = "input-bill";
        billFormat.className = "bill-format bill-format-hidden";
    }
}

const functionTipState = () => {
    inputTip0.className = "";
    inputTip1.className = "";
    inputTip2.className = "";
    inputTip3.className = "";
    inputTip4.className = "";
}

const obtainBill = () => {
    functionTipZero();
    functionPeopleZero();
    functionBillZero();
    let obtainValue = document.getElementById('inputbill').value;
    if (isNaN(obtainValue)) {
        billFormat.className = "bill-format";
        inputBill.className = "input-bill input-bill-outline";
        billZero.className = "bill-zero bill-zero-hidden";
    } else {
        buttonReset.className = "button-reset";
    }
    makeMath();
}

const obtainPeople = () => {
    functionTipZero();
    functionPeopleZero();
    functionBillZero();
    let obtainPcant = document.getElementById("inputpeople").value;
    if (isNaN(obtainPcant) && !(obtainPcant === "")) {
        peopleFormat.className = "people-format";
        inputPeople.className = "input-people input-people-outline";
    } else {
        buttonReset.className = "button-reset";
    }
    makeMath();
}

const buttonP = (opt) => {
    functionTipState();
    switch (opt) {
        case 0:
            TipPercent = "5";
            inputTip0.className = "tip-0-select";
            inputTip5.value = "";
            break;
        case 1:
            TipPercent = "10";
            inputTip1.className = "tip-1-select";
            inputTip5.value = "";

            break;
        case 2:
            TipPercent = "15";
            inputTip2.className = "tip-2-select";
            inputTip5.value = "";
            break;
        case 3:
            TipPercent = "25";
            inputTip3.className = "tip-3-select";
            inputTip5.value = "";
            break;
        case 4:
            TipPercent = "50";
            inputTip4.className = "tip-4-select";
            inputTip5.value = "";
            break;
        case 5:
            TipPercent = inputTip5.value;
            break;
    }
    functionTipZero();
    makeMath();
}

const makeMath = () => {
    let obtainValue = document.getElementById('inputbill').value;
    let obtainPcant = document.getElementById("inputpeople").value;
    if ((TipPercent > 0) && (obtainValue > 0) && (obtainPcant > 0)) {
        totalTipAmount = obtainValue * TipPercent / 100 / obtainPcant;
        totalNumber = totalTipAmount + (obtainValue / obtainPcant);
        document.getElementById("amount-number").innerHTML = `$${ totalTipAmount.toFixed(2) }`;
        document.getElementById("totalnumber").innerHTML = `$${ totalNumber.toFixed(2) }`;
    } else {
        document.getElementById("amount-number").innerHTML = "$0.00";
        document.getElementById("totalnumber").innerHTML = "$0.00";
    }
}