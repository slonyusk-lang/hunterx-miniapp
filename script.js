let points = 0;

function mine() {
  points += 10;
  document.getElementById("points").innerText =
    points + " Points";
}

function deposit() {
  alert("TON Deposit Address:\n\nUQA_FHw83JfB4Hfc0DDMKXTDNAfqFc0OUj3toBSzOTia0BVi");
}

function withdraw() {
  if (points < 1000000) {
    alert("Minimum withdrawal: 1,000,000 Points");
  } else {
    alert("Withdrawal Request Sent");
  }
}

