export const COLORS = {
  bgBase: "#1A1A1A",
  bgWarm: "#2C2418",
  cream: "#E8DCC8",
  orange: "#E84A1C",
  blueVhs: "#3B5BDB",
  greenScan: "#00FF66",
  chrome: "#C0C0C0",
  whiteHot: "#FAFAF5",
} as const;

export const ACTS = [
  { id: "act-one", label: "01", title: "THE MUNDANE CAPTURE", startVh: 0, endVh: 100 },
  { id: "act-two", label: "02", title: "THE VCR BOOT", startVh: 100, endVh: 200 },
  { id: "act-three", label: "03", title: "THE GHOST CLIP", startVh: 200, endVh: 350 },
  { id: "act-four", label: "04", title: "THE DIGITAL RUBBING", startVh: 350, endVh: 450 },
] as const;

export const TOTAL_SCROLL_VH = 450;
