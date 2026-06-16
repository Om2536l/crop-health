function getEntry(date) {
  return ndviData.dates.find(d => d.date === date);
}

function updateStats(date) {
  const e = getEntry(date);
  if (!e) return;

  document.getElementById("statNdvi").textContent = e.ndviMean.toFixed(3);
  document.getElementById("statMoisture").textContent = e.moistureMean.toFixed(3);
  document.getElementById("statHealthy").textContent = e.healthyPct !== null ? e.healthyPct.toFixed(1) + "%" : "--";
  document.getElementById("statStressed").textContent = e.stressedPct !== null ? e.stressedPct.toFixed(1) + "%" : "--";

  const banner = document.getElementById("advisoryBanner");
  document.getElementById("advisoryText").textContent = e.advisory;
  document.getElementById("advisoryIcon").textContent = advIcons[e.advLevel] || "⚠️";
  banner.style.borderLeft = `4px solid ${advColors[e.advLevel] || "#888"}`;
  document.getElementById("advisoryText").style.color = advColors[e.advLevel] || "inherit";

  document.getElementById("ndviMap").src = e.mapImage;
  document.getElementById("ndviMap").alt = "Analysis map for " + e.label;
}

document.addEventListener("DOMContentLoaded", () => {
  const sel = document.getElementById("dateSelect");
  updateStats(sel.value);
  sel.addEventListener("change", e => updateStats(e.target.value));

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    });
  }
});
