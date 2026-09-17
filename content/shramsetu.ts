export const facts = [
  { value: "726", label: "districts mapped" },
  { value: "14", label: "migration corridors" },
  { value: "k = 10", label: "anonymity floor" },
  { value: "22", label: "privacy assertions" },
  { value: "179 KB", label: "map bundle, no tile server" },
];

// Three check-in channels, each a fallback for the one above it.
export const channels = [
  {
    name: "Worksite QR scan",
    job: "The employer prints a code; the worker scans it and the presence record is signed on the spot.",
  },
  {
    name: "Geofenced one-tap attestation",
    job: "No code at the site — the worker attests inside a geofence instead, in a single tap.",
  },
  {
    name: "Missed-call IVR",
    job: "No smartphone at all — a missed call from a feature phone registers the same presence.",
  },
];
