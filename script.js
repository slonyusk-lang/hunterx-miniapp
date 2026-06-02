let points = Number(localStorage.getItem("points")) || 0;
let level = 1;
function mine(document.getElementById("points").innerText =
  points + " Points";)
localStorage.setItem("points", points); {
  points += level * 2;

 document.getElementById("points").innerText =
    points + " Points";

  localStorage.setItem("points", points);

  checkLevel();
}{
  points += level * 2;

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

function checkLevel() {
  if (points >= 1000) level = 2;
  if (points >= 5000) level = 3;
  if (points >= 10000) level = 4;
  if (points >= 20000) level = 5;
  if (points >= 50000) level = 6;
  if (points >= 100000) level = 7;
  if (points >= 250000) level = 8;
  if (points >= 500000) level = 9;
  if (points >= 1000000) level = 10;

  document.getElementById("level").innerText =
    "Level " + level;
}

function referral() {
  alert(
    "Your Referral Link:\n\nhttps://slonyusk-lang.github.io/hunterx-miniapp/"
  );
}

function dailyReward(localStorage.setItem("points", points);) {
  let claimed = localStorage.getItem("dailyReward");

  if (claimed === "yes") {
    alert("Daily reward already claimed!");
    return;
  }

  points += 100;

  document.getElementById("points").innerText =
    points + " Points";

  checkLevel();

  localStorage.setItem("dailyReward", "yes");

  alert("You received 100 bonus points!");
}
function home() {
  alert("Home Page");
}

function friends() {
  alert("Friends: 0");
}

function wallet() {
  alert("Wallet Balance: 0 TON");
}
