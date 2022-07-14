 //ЧЁ СМОТРИШЬ?
 let lineValue = document.getElementById("levelInput").value;
 img = document.getElementById("level");
 let count = 0;
 let rnd = 0;
 let levelNames = [
	"pusto"
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