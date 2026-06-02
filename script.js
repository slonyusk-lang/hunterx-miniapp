let points = 0;

function mine() {
  points += 100;
  document.getElementById("points").innerText =
    points + " Points";
}

function deposit() {
  alert("TON Deposit Address");
}

function withdraw() {
  alert("Minimum withdrawal: 10,000 Points");
}
