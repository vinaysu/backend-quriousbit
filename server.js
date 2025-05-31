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
    logo: "https://i.pinimg.com/736x/98/4a/10/984a10ae157f96bbe6c2afcde96bf3d7.jpg",
    country: "US"
  },
  {
    title: "! Flubber",
    map: "Propaganda",
    mode: "Conquest Large",
    tickrate: "40 Hz",
    players: "60/64",
    ping: 107,
    logo: "https://t4.ftcdn.net/jpg/08/19/40/49/240_F_819404947_wdWfh5v7qA2Sbz0KgI2coUyt4KaV6OWO.jpg",
    country: "US"
  },
  {
    title: "[V937] LOCKER DEUX | TDM | ALL WEAPONS | STATS | v937.org",
    map: "Operation Locker",
    mode: "Team Deathmatch",
    tickrate: "60 Hz",
    players: "60/64",
    ping: 107,
    logo: "https://www.shutterstock.com/image-photo/indian-national-flag-hd-wallpaper-260nw-2197211151.jpg",
    country: "DE"
  },
  {
    title: "#1 [AJAH] Warriors – Metro Only – No Weapon Rules – 64 Slots",
    map: "Siege of Shanghai",
    mode: "Conquest Large",
    tickrate: "30 Hz",
    players: "60/64",
    ping: 47,
    logo: "https://t4.ftcdn.net/jpg/08/28/97/97/240_F_828979767_f8OMlrw28fxkOBaTdFDmALfsUaU68W1B.jpg",
    country: "FR"
  },
  {
    title: "SUPER@ [SiC] S9 Conquest Propaganda",
    map: "Propaganda",
    mode: "Conquest Large",
    tickrate: "30 Hz",
    players: "61/64",
    ping: 47,
    logo: "https://t3.ftcdn.net/jpg/06/34/72/08/240_F_634720826_Gqc0dvkaaAFLdxZzUtgFc9U9SPcThaz4.jpg",
    country: "DE"
  },
  {
    title: "SUPER@ [SiC] S7 Conquest Vanilla Maps",
    map: "Golmud Railway",
    mode: "Conquest Large",
    tickrate: "30 Hz",
    players: "61/64",
    ping: 47,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-1q5Fw11E9Lkg6fDp6Uf6jmbT4DhlZbhxg&s",
    country: "DE"
  },
  {
    title: "[JGP] - Second Assault (BF4DM, VOTE, CMD, SPECTATE, RULES)",
    map: "Lancang Dam",
    mode: "Conquest Large",
    tickrate: "60 Hz",
    players: "61/64",
    ping: 47,
    logo: "https://t4.ftcdn.net/jpg/09/06/45/23/240_F_906452312_VgTwqGASxyY30tcvNI2YHczUzV8TU3OY.jpg",
    country: "US"
  },
  {
    title: "!! [AE51] The Madhouse [ CQL | Fast Spawn | Map Voting ]",
    map: "Lancang Dam",
    mode: "Conquest Large",
    tickrate: "30 Hz",
    players: "61/64",
    ping: 47,
    logo: "https://t4.ftcdn.net/jpg/10/14/16/61/240_F_1014166150_6YC2RoKjI4FBP9csY3Sok1EiFTDimdnW.jpg",
    country: "GB"
  },
  {
    title: "!!.{WHG}.!! #1 LOCKER !.{60HZ}.!",
    map: "Operation Locker",
    mode: "Conquest Large",
    tickrate: "60 Hz",
    players: "61/64",
    ping: 186,
    logo: "https://t3.ftcdn.net/jpg/06/44/97/44/240_F_644974401_VxF5h0SiSL06oyyQsp9LOFEhtCuWd1h9.jpg",
    country: "FR"
  },
  {
    title: "#4 [E4GL] 60Hz - Locker only - Limited Explosives",
    map: "Operation Locker",
    mode: "Conquest Large",
    tickrate: "60 Hz",
    players: "61/64",
    ping: 47,
    logo: "https://t3.ftcdn.net/jpg/08/28/97/98/240_F_828979816_DMHNStqEi7jQasWtKx7PAMSyHxsoClK6.jpg",
    country: "DE"
  },
  {
    title: "FEAR CLAN__ Mbl u3 70x... NO CHEATERS 150%** 25RUS**//_MX_/",
    map: "Golmud Railway",
    mode: "Conquest Large",
    tickrate: "30 Hz",
    players: "62/64",
    ping: 47,
    logo: "https://t4.ftcdn.net/jpg/08/42/87/33/240_F_842873394_nhuzyFZTXohWQbXnA55fXnRcKBsuWoJG.jpg",
    country: "DE"
  },
  {
    title: "SUPER@ [SiC] S2 Operation Locker – EPS – 60Hz",
    map: "Operation Locker",
    mode: "Conquest Large",
    tickrate: "60 Hz",
    players: "63/64",
    ping: 47,
    logo: "https://t4.ftcdn.net/jpg/06/66/23/61/240_F_666236196_Mm511rmpUDjqQ0YpZItXrYB47wp19JdS.jpg",
    country: "DE"
  },
  {
    title: "+1 ANARCHY HARDCORE! 60Hz",
    map: "Hammerhead",
    mode: "Conquest Large",
    tickrate: "60 Hz",
    players: "63/64",
    ping: 47,
    logo: "https://t4.ftcdn.net/jpg/08/19/40/49/240_F_819404947_wdWfh5v7qA2Sbz0KgI2coUyt4KaV6OWO.jpg",
    country: "DE"
  },
  {
    title: "#11 NASA Noobs Welcome | Conquest 40Hz",
    map: "Siege of Shanghai",
    mode: "Conquest Large",
    tickrate: "40 Hz",
    players: "63/64",
    ping: 47,
    logo: "https://t4.ftcdn.net/jpg/06/66/23/61/240_F_666236196_Mm511rmpUDjqQ0YpZItXrYB47wp19JdS.jpg",
    country: "DE"
  }
];


app.get("/api/servers", (req, res) => {
  res.json(servers);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
