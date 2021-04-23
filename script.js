function compute() {
  p = document.getElementById("principal").value;
}

function outputUpdate(interest) {
  document.querySelector("#irate").value = interest;
}

// create list for select
function createyears() {
  document.getElementById("result").style.display = "none";
  let yroptions = "";

  for (let i = 1; i < 50; i++) {
    yroptions += "<option value=" + i + ">" + i + "</option>";
  }
  document.getElementById("years").innerHTML = yroptions;
}

function compute() {
  let deposit = parseInt(document.getElementById("principal").value);
  if (deposit > 0) {
    document.getElementById("principal").value = "";
    let interestrate = parseFloat(document.getElementById("intrate").value);
    let years = parseInt(document.getElementById("years").value);
    let amountof = deposit * Math.pow(1 + interestrate / 100, years);
    let yearof = parseInt(new Date().getFullYear()) + years;

    document.getElementById("result").style.display = "block";
    document.getElementById("deposit").innerHTML = deposit;
    document.getElementById("interestrate").innerHTML = interestrate;
    document.getElementById("amountof").innerHTML = amountof.toFixed(2);
    document.getElementById("yearof").innerHTML = yearof;
  } else {
    alert("Please use a positive number");
    document.getElementById("principal").focus();
  }
}
