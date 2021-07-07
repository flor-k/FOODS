var Ingredientes=["Fideos", "Salsa", "Huevo","Pan","Queso"];
var IngTengo = [];
var PosibComi = [];
var Comidas={
    "Fideos con tuco":{
    "Tiempo": 40,
    "Ingre":[
        Ingredientes[0],
        Ingredientes[1]
        ]
    },
    "Fideos con huevo":{
        "Tiempo": 90,
        "Ingre":[
            Ingredientes[0],
            Ingredientes[2]
            ]
        },
    "Huevos revueltos con tostadas":{
        "Tiempo": 20,
        "Ingre":[
            Ingredientes[3],
            Ingredientes[2]
            ]
        },
    "Tostadas de queso":{
        "Tiempo": 15,
        "Ingre":[
            Ingredientes[3],
            Ingredientes[4]
        ]
    }

};

var tiempoVal;
var tiempoComida;

function getInputValue(){
    tiempoVal = document.getElementById("time").value;
    document.getElementById("minutos-tiempo").style.backgroundColor="rgb(194, 140, 95)";

};


document.getElementById("fideos").onclick = function(){
    IngTengo.push(Ingredientes[0]);
    document.getElementById("fideos").style.backgroundColor="rgb(194, 140, 95)";
};

document.getElementById("salsa").onclick = function(){
    IngTengo.push(Ingredientes[1]);
    document.getElementById("salsa").style.backgroundColor="rgb(194, 140, 95)";
};

document.getElementById("huevo").onclick = function(){
    IngTengo.push(Ingredientes[2]);
    document.getElementById("huevo").style.backgroundColor="rgb(194, 140, 95)";
};

document.getElementById("pan").onclick = function(){
    IngTengo.push(Ingredientes[3]);
    document.getElementById("pan").style.backgroundColor="rgb(194, 140, 95)";
};

document.getElementById("queso").onclick = function(){
    IngTengo.push(Ingredientes[4]);
    document.getElementById("queso").style.backgroundColor="rgb(194, 140, 95)";
};

document.getElementById("choose").onclick = function(){
    var rand = Math.floor(Math.random() * PosibComi.length);

    function Resultado(){
        document.getElementById("comidas").innerHTML = (IngTengo);
        document.getElementById("minutes").innerHTML = ("Te va a tomar " + tiempoVal + " minutos.");
        document.getElementById("food").innerHTML = (PosibComi[rand]);
    };

    for (var i in Comidas){
        var cont = 0;
        for (var j in Comidas[i].Ingre){ 
            if(IngTengo.includes(Comidas[i]["Ingre"][j])){
                cont += 1;
            } else {
                cont = 0;
                break;
            };
        };
        
        if ( cont != 0 && Comidas[i].Tiempo <= tiempoVal){
            tiempoComida = Comidas[i].Tiempo;
            PosibComi.push(i);
            };
        
    };

    if (PosibComi.length === 0){
        PosibComi.push("¡Rappi!");
    }
    Resultado();
};
