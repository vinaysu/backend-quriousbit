const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const servers = [
  {
    title: "! RC3-BASEMAPS",
    map: "Lancang Dam",
    mode: "Conquest Large",
    tickrate: "60 Hz",
    players: "60/64",
    ping: 104,
    logo: "https://example.com/logo1.jpg",
    country: "US"
  },
  {
    title: "! Flubber",
    map: "Propaganda",
    mode: "Conquest Large",
    tickrate: "40 Hz",
    players: "60/64",
    ping: 107,
    logo: "https://example.com/logo2.jpg",
    country: "DE"
  },
  {
    title: "[V937] LOCKER DEXU TDM | v937.org",
    map: "Operation Locker",
    mode: "Team Deathmatch",
    tickrate: "60 Hz",
    players: "60/64",
    ping: 107,
    logo: "https://example.com/logo3.jpg",
    country: "FR"
  }
];

app.get("/api/servers", (req, res) => {
  res.json(servers);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
