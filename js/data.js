const ndviData = {
  region: "Maharashtra farmland — Kopargaon area (Sentinel-2 L2A)",
  dates: [
    {
      date: "2026-03-29", label: "Mar 29, 2026",
      ndviMean: 0.345, moistureMean: 0.738,
      healthyPct: null, stressedPct: null,
      advisory: "WATCH: Monitor closely. Rabi crops nearing harvest. Consider irrigation if conditions worsen.",
      advLevel: "watch",
      mapImage: "images/analysis_2026-03-29.png"
    },
    {
      date: "2026-04-28", label: "Apr 28, 2026",
      ndviMean: 0.290, moistureMean: 0.716,
      healthyPct: 9.8, stressedPct: 36.1,
      advisory: "WATCH: Post-harvest dip. Many fields bare/harvested. Monitor newly sown areas for moisture.",
      advLevel: "watch",
      mapImage: "images/analysis_2026-04-28.png"
    },
    {
      date: "2026-05-28", label: "May 28, 2026",
      ndviMean: 0.310, moistureMean: 0.720,
      healthyPct: null, stressedPct: null,
      advisory: "WATCH: Pre-monsoon period. Partial vegetation recovery. Monitor moisture before Kharif sowing.",
      advLevel: "watch",
      mapImage: "images/analysis_2026-05-28.png"
    },
    {
      date: "2026-06-02", label: "Jun 02, 2026",
      ndviMean: 0.311, moistureMean: 0.722,
      healthyPct: null, stressedPct: null,
      advisory: "WATCH: Early Kharif season. Vegetation recovering. Adequate moisture detected. Monitor weekly.",
      advLevel: "watch",
      mapImage: "images/analysis_2026-06-02.png"
    }
  ],
  changeMap: {
    image: "images/ndvi_difference.png",
    increasedPct: 19.8, decreasedPct: 45.8, stablePct: 34.4,
    fromDate: "2026-03-29", toDate: "2026-06-02"
  }
};

const advIcons = { critical: "🔴", moderate: "🟠", watch: "🟡", healthy: "🟢" };
const advColors = { critical: "#C62828", moderate: "#E65100", watch: "#1565C0", healthy: "#2E7D32" };
