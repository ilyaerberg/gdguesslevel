 //ЧЁ СМОТРИШЬ?
 let lineValue = document.getElementById("levelInput").value;
 img = document.getElementById("level");
 let count = 0;
 let rnd = 0;
 let levelNames = [
    "stereo madness",
    "back on track",
    "polargeist",
    "dry out",
    "base after base",
    "can't let go",
    "jumper",
    "time machine",
    "cycles",
    "xstep",
    "clutterfunk",
    "theory of everything",
    "electroman adventures",
    "clubstep",
    "electrodynamix",
    "hexagon force",
    "blast processing",
    "theory of everything 2",
    "geometrical dominator",
    "deadlocked",
    "fingerdash",
    "the challenge",
    "outerspace",
    "acid factory",
    "first race",
    "shock",
    "magmatic sanctuary",
    "amplification",
    "ground zero",
    "generation retro",
    "geobound",
    "spooky light",
    "fire aura",
    "chambers",
    "battletown",
    "crazy ball",
    "mind control",
    "timeless",
    "half past twelve",
    "lustre",
    "prismarine",
    "aquarius",
    "extinction",
    "retray",
    "the nightmare",
    "bloodbath",
    "nine circles",
    "jawbreaker",
    "fairydust",
    "decode",
    "speed racer",
    "platinum adventure",
    "unity",
    "the lightning road",
    "death moon",
    "supersonic",
    "cataclysm",
    "dear nostalgists",
    "problematic",
    "sidestep",
    "theory of skrillex",
    "bloodlust",
    "sonic wave"
]
 let max = levelNames.length;
 function randomize()
 {
     rnd = Math.floor(Math.random() * max);
 }
 randomize();
 img.src = "levels/"+rnd+".jpg";
 function check()
 {
     lineValue = document.getElementById("levelInput").value;
     if(lineValue.toLowerCase() == levelNames[rnd])
     {
         document.getElementById("levelInput").value = "";
         count=count+1;
         console.log("+1, "+count)
         document.getElementById("levelInput").placeholder = "Правильных ответов: "+count;
         randomize();
         img.src = "levels/"+rnd+".jpg";
     }
     else 
     {
         alert("Неправильно");
         document.getElementById("levelInput").value = "";
     }
     
 }
 function skip()
 {
     if(count == 0)
     {
         //lol
     }
     else
     {
         document.getElementById("levelInput").value = "";
         count = count-1;
         alert("Это "+levelNames[rnd])
         console.log("-1, "+count)
         randomize();
         img.src = "levels/"+rnd+".jpg";
     }
 }
 document.getElementById("levelInput").addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
      check()
    }
  });