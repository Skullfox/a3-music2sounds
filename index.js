/*
tested with 1.88
DO NOT CHANGE BELOW !!!
*/
const fs = require('fs');

var musicArray = require('./sqf-export.js');

var cfgSounds = '.\\fox_music2sounds\\cfgSounds.hpp';
var soundlist = '.\\fox_music2sounds\\soundlist.hpp';

fs.writeFileSync(cfgSounds, "");
fs.writeFileSync(soundlist, "");

var soundlistArray = [];
for (var i in musicArray) {
  console.log(musicArray[i][0]);
  fs.appendFileSync(cfgSounds,`class ${musicArray[i][0]}{
    name = "${musicArray[i][1]}";
    sound[] = {"${musicArray[i][2]}", 1, 1};
    duration = ${musicArray[i][3]};
    titles[] = { 0, "" };
    m2s = true;
  };
  `);
  soundlistArray.push(musicArray[i][0]);
};
fs.appendFileSync(soundlist,`class fox_m2s{
    tracks[]={"${soundlistArray.join('","')}"};
};
`);
