var clicked = 0;



function Igranasrekja() {
    var zborovi = ["kinoteka","planina","skijanje","mesecina","balerina","creshnja","tabla","kosh","centar","tablet","pomfrit","sladoled","laptop","telefon","kosharka","programa","lubenca","kokoshka","durum","doner"];
    var randomzborindex = Math.floor(Math.random()*zborovi.length);
    var randomzbor = zborovi[randomzborindex];

    var bukvi = [];
    while (bukvi.length < 3) {
        var randombukviindex = Math.floor(Math.random() * randomzbor.length);
        var randombukva = randomzbor.charAt(randombukviindex);

        if (!bukvi.includes(randombukva)) { // za da nema duplikati
            bukvi.push(randombukva);
        }
    }
   
    for(var greshki = 1; greshki<=5; greshki++){
    var txt = "Pogodi go zborot:";
    var bukvialbum = []; // za da vidi dali smo ja iskoristile barem ednash bukvata za da ne se pojavi 16 puta ako imam duplikati
    for(var i = 0; i<randomzbor.length; i++){
        if(bukvi.includes(randomzbor.charAt(i)) && !bukvialbum.includes(randomzbor.charAt(i))){
            txt = txt + randomzbor.charAt(i);
            bukvialbum.push(randomzbor.charAt(i));
        }else{
            txt += '_'
        }
        
    }
    
   
    var brgr = greshki+1;
    if (brgr == 6){
        brgr--;
    }
    var Pogodi = prompt(txt);
    
    if(Pogodi.toLowerCase() == randomzbor.toLowerCase()){
        alert("Go pogodi zborot! Chestito");
        break;
    }else if(greshki == 5){
        alert("Toa e..");
            break;
    }else{
            alert("Ajde "+ brgr +" srekja");
        }
    }
        

        Igrapak = confirm("Dali ti se igra pak?");
        if(Igrapak){
            Igranasrekja();
        } else {
        return;
        }
    
}