function RGB(){
var RO=document.getElementById("ROJO").value;
var VE=document.getElementById("VERDE").value;
var AZ=document.getElementById("AZUL").value;
const color='rgb('+RO+','+VE+','+AZ+')';
var a=document.getElementById("Contenedor").style.backgroundColor=color;


let rojo=parseInt(RO);
let verde=parseInt(VE);
let azul=parseInt(AZ);


const redNeuronal=new brain.NeuralNetwork();
const datos=[{
"input":{"R":(255/255),"G":(100/255),"B":(100/255)},
"output":{"claro":1}
},{
"input":{"R":(20/255),"G":(30/255),"B":(20/255)},
"output":{"oscuro":1}
},{
"input":{"R":(80/255),"G":(50/255),"B":(100/255)},
"output":{"oscuro":1}
},{
"input":{"R":(80/255),"G":(80/255),"B":(80/255)},
"output":{"Opaco":1}
},{
"input":{"R":(50/255),"G":(50/255),"B":(50/255)},
"output":{"oscuro":1}
},{
"input":{"R":(255/255),"G":(50/255),"B":(100/255)},
"output":{"claro":1}
}];

redNeuronal.train(datos);

let resultado=brain.likely({"R":(rojo/255),"G":(verde/255),"B":(azul/255)},redNeuronal);
alert(resultado);



}