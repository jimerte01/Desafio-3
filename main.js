var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

//Algoritmo para saber a que dia corresponde numero digitado por usuario
var dia = prompt("escriba un numero correspondiente al dia de la semana");
aux=dia-1;
for(var i=0; i<7; i++) {
    if (i==aux){
        document.write( "usted escogio el  " + dia + " que corresponde al dia : " +  dias[i] + "<br>" )
    }
}  

 //Algoritmo para saber que dias de la semana son impares
document.write(" <br> Los dias impares de la semana son:  <br> " )
for(var i=0; i<7; i++) {
   if (i!=0 && i!=2 && i!=4 && i!=6){
       continue;
   }
   var aux=i+1;
   document.write( aux + "   " +  dias[i]+ "<br>")
}

//Algoritmo para saber que dias de la semana son pares
document.write(" <br> Los dias pares de la semana son: <br> ")
for(var i=0; i<7; i++) {
   if (i!=1 && i!=3 && i!=5){
       continue;
   }
   var aux=i+1;
   document.write( aux + "   " +  dias[i]+ " <br> ")
}