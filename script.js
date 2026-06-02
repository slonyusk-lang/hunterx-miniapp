const userId = "testuser";
async function loadData() {
  const ref = doc(db, "users", userId);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    points = snap.data().points || 0;
    level = snap.data().level || 1;
    updatePoints();
  }
}
async function saveData() {
  await updateDoc(doc(db, "users", userId), {
    points: points,
    level: level
  });
}
let points = Number(localStorage.getItem("points")) || 0;
let level = 1;

function updatePoints() {
  const pointsEl = document.getElementById("points");
  if (pointsEl) {
    pointsEl.innerText = points + " Points";
  }

  checkLevel();

  const bar = document.getElementById("bar");
  if (bar) {
    const percent = (points % 1000) / 10;
    bar.style.width = percent + "%";
  }
}

function mine() {
  points += 2;
  localStorage.setItem("points", points);
  updatePoints();
  saveData();
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
  level = 1;

  if (points >= 1000) level = 2;
  if (points >= 5000) level = 3;
  if (points >= 10000) level = 4;
  if (points >= 20000) level = 5;
  if (points >= 50000) level = 6;
  if (points >= 100000) level = 7;
  if (points >= 250000) level = 8;
  if (points >= 500000) level = 9;
  if (points >= 1000000) level = 10;

  const levelEl = document.getElementById("level");
  if (levelEl) {
    levelEl.innerText = "Level " + level;
  }
}

function referral() {
  alert(
    "Your Referral Link:\n\nhttps://slonyusk-lang.github.io/hunterx-miniapp/"
  );
}

function dailyReward() {
  let lastClaim = localStorage.getItem("lastClaim");
  let now = Date.now();

  if (lastClaim && now - lastClaim < 86400000) {
    let hoursLeft = Math.ceil(
      (86400000 - (now - lastClaim)) / 3600000
    );

    alert("Come back in " + hoursLeft + " hours!");
    return;
  }

  points += 100;

  localStorage.setItem("points", points);
  localStorage.setItem("lastClaim", now);

  updatePoints();

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

updatePoints();
