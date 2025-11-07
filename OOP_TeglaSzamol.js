 function jsFvOsszead() {
      let tomb = [ [0, 0,0],  [0, 0,0], [0, 0,0] ];

      // Végigmegyünk az összes input mezőn

       id= "a" + 1 + 2;   // konkatenációval előállítjuk az id értéket
      
       // Két for ciklussal beolvassuk a JS- tömb-be az adatot
       for (i=1;i<4;i++ ) {              // sor ciklus   
          for (j=1; j<4 ; j++){          // oszlop ciklus

           id="a"+i + j ;               // Ciklus mag -> Előállítjuk az ID érétéket

           console.log(id);             // Ciklus mag -> Ellenörzés miatt kiírjuk a konzolra az id-t
         //  let ertek = Number(document.getElementById(id).value || 0);  // Ciklus mag -> Itt töltjük be az DOM-ból a JS-be
          ertek = document.getElementById(id).value;
          ertek_num = Number(ertek || 0);                                                                     
           tomb[i-1][j-1] = ertek_num;      // Ciklus mag -> A JS tomb 3x3-as tömb most fel van töltve
                                        // Ciklus mag -> Azért -1 mert itt 0-tól kezdődik a tomb index
          }
     }   
     
     id= "a"
     // Az eredmény Téglatest térfogata
      for (i=0; i<3; i++){
          a_oldal = tomb[i][0];
          b_oldal = tomb[i][1];
          c_oldal = tomb[i][2];

          teglatest = new Tegla(a_oldal,b_oldal,c_oldal);

        V = teglatest.terfogat();
        F = teglatest.felszin();
          

          id = "a" + (i+1) + "4";
          // Az id előállítása a14 ;a24; a34
          document.getElementById(id).innerText = V;

          


      }

}

      
      
      

 