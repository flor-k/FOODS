var Ingredientes=["Fideos", "Salsa", "Huevo"];
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
        }
};

var tiempoVal

function getInputValue(){
    tiempoVal = document.getElementById("time").value;
};


document.getElementById("fideos").onclick = function(){
    IngTengo.push(Ingredientes[0]);
};

document.getElementById("salsa").onclick = function(){
    IngTengo.push(Ingredientes[1]);
};

document.getElementById("huevo").onclick = function(){
    IngTengo.push(Ingredientes[2]);
};

document.getElementById("choose").onclick = function(){
    for (var i in Comidas){
        for (var j in Comidas[i].Ingre){ 
            var cont = 0;
            if(IngTengo.includes(Comidas[i]["Ingre"][j])){
                cont += 1;
            } else {
                cont = 0;
                break;
            };
        };
        if ( cont != 0 && Comidas[i].Tiempo <= tiempoVal){
            PosibComi.push(i);
        };
    };

    var rand = Math.floor(Math.random() * PosibComi.length);
    document.getElementById("minutes").innerHTML = (tiempoVal);
    document.getElementById("food").innerHTML = (PosibComi[rand]);

};

