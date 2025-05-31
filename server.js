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
    country: "US"
  },
  {
    title: "[V937] LOCKER DEUX | TDM | ALL WEAPONS | STATS | v937.org",
    map: "Operation Locker",
    mode: "Team Deathmatch",
    tickrate: "60 Hz",
    players: "60/64",
    ping: 107,
    logo: "https://example.com/logo3.jpg",
    country: "DE"
  },
  {
    title: "#1 [AJAH] Warriors – Metro Only – No Weapon Rules – 64 Slots",
    map: "Siege of Shanghai",
    mode: "Conquest Large",
    tickrate: "30 Hz",
    players: "60/64",
    ping: 47,
    logo: "https://example.com/logo4.jpg",
    country: "FR"
  },
  {
    title: "SUPER@ [SiC] S9 Conquest Propaganda",
    map: "Propaganda",
    mode: "Conquest Large",
    tickrate: "30 Hz",
    players: "61/64",
    ping: 47,
    logo: "https://example.com/logo5.jpg",
    country: "DE"
  },
  {
    title: "SUPER@ [SiC] S7 Conquest Vanilla Maps",
    map: "Golmud Railway",
    mode: "Conquest Large",
    tickrate: "30 Hz",
    players: "61/64",
    ping: 47,
    logo: "https://example.com/logo6.jpg",
    country: "DE"
  },
  {
    title: "[JGP] - Second Assault (BF4DM, VOTE, CMD, SPECTATE, RULES)",
    map: "Lancang Dam",
    mode: "Conquest Large",
    tickrate: "60 Hz",
    players: "61/64",
    ping: 47,
    logo: "https://example.com/logo7.jpg",
    country: "US"
  },
  {
    title: "!! [AE51] The Madhouse [ CQL | Fast Spawn | Map Voting ]",
    map: "Lancang Dam",
    mode: "Conquest Large",
    tickrate: "30 Hz",
    players: "61/64",
    ping: 47,
    logo: "https://example.com/logo8.jpg",
    country: "GB"
  },
  {
    title: "!!.{WHG}.!! #1 LOCKER !.{60HZ}.!",
    map: "Operation Locker",
    mode: "Conquest Large",
    tickrate: "60 Hz",
    players: "61/64",
    ping: 186,
    logo: "https://example.com/logo9.jpg",
    country: "FR"
  },
  {
    title: "#4 [E4GL] 60Hz - Locker only - Limited Explosives",
    map: "Operation Locker",
    mode: "Conquest Large",
    tickrate: "60 Hz",
    players: "61/64",
    ping: 47,
    logo: "https://example.com/logo10.jpg",
    country: "DE"
  },
  {
    title: "FEAR CLAN__ Mbl u3 70x... NO CHEATERS 150%** 25RUS**//_MX_/",
    map: "Golmud Railway",
    mode: "Conquest Large",
    tickrate: "30 Hz",
    players: "62/64",
    ping: 47,
    logo: "https://example.com/logo11.jpg",
    country: "DE"
  },
  {
    title: "SUPER@ [SiC] S2 Operation Locker – EPS – 60Hz",
    map: "Operation Locker",
    mode: "Conquest Large",
    tickrate: "60 Hz",
    players: "63/64",
    ping: 47,
    logo: "https://example.com/logo12.jpg",
    country: "DE"
  },
  {
    title: "+1 ANARCHY HARDCORE! 60Hz",
    map: "Hammerhead",
    mode: "Conquest Large",
    tickrate: "60 Hz",
    players: "63/64",
    ping: 47,
    logo: "https://example.com/logo13.jpg",
    country: "DE"
  },
  {
    title: "#11 NASA Noobs Welcome | Conquest 40Hz",
    map: "Siege of Shanghai",
    mode: "Conquest Large",
    tickrate: "40 Hz",
    players: "63/64",
    ping: 47,
    logo: "https://example.com/logo14.jpg",
    country: "DE"
  }
];


app.get("/api/servers", (req, res) => {
  res.json(servers);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
