let currentBead = 1;
const totalBeads = 59;

function nextBead() {
  if (currentBead < totalBeads) {
    currentBead++;
    updateDisplay();
  } else {
    alert("Rosary complete!");
  }
}

function resetBeads() {
  currentBead = 1;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("prayerDisplay").innerText = `Bead ${currentBead} of ${totalBeads}`;
}