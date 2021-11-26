let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom? alfanumerieke karakters vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype interger waarom? die heeft gehele getalen. vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? let is blokbereik, dus een blok is een stuk code dat wordt begrensd door {}. Als je let gebruikt, betekent dat de variabele gedeclareerd is. vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen in de eerste alert vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter? vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde getname de waarde noemen we een Adres? vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een alert op het scherm met de tekst dit is een variabele van het datatype string deze tekst staan op regel 1? van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? Je moet de naam ook veranderen om de code te laten werken. Als dat niet gebeurd en de function wordt alleen verandert, werkt niet vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? de functie is dat een zin verbergt terwijl iets anders verschijnt en waar wordt deze in je HTML aangeroepen? de zin 'als ik op de button hieronder klik wat is hier dan de tekst? verandert naar een 8' vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML een element in de pagina verschijnt vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? Hij selecteert een bepaalde element uit de pagina vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? Hij pakt een element en verbergt een ander. vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen in de 4e en wanneer wordt deze aangeroepen als je op de button klik vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan van function en waar komt de waarde van getal vandaan? van de button vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? neemt een string als parameter  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? plus elkaar? heeft te maken met de afbeeldingen vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? ? vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen het moet gelinkt worden naar css, en daarin de kleur en size verandert. vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan function en waar komt de waarde van kleur vandaan? van de setcolor vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? function vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? Als je der op click, verandert de size, de element en de kleur. Geef je een andere waarde? vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven ___________ en wanneer gebeurt dat __________ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? ___________________ vul je antwoord in op de lijn.