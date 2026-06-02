let points = 0;

function mine() {
  points += 5;
  document.getElementById("points").innerText =
    points + " Points";

  checkLevel();
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

let level = 1;

function checkLevel() {
  if (points >= 1000) {
    level = 2;
  }

  if (points >= 5000) {
    level = 3;
  }

  document.getElementById("level").innerText =
    "Level " + level;
}

function referral() {
  alert("Your Referral Link:\n\nhttps://slonyusk-lang.github.io/hunterx-miniapp/");
}
