// Tres personas necesita comprar helados, y con el dinero que 
//tienen quieren saber para cual helado le alcanza
// Roberto tiene $ 400
// Pedro tiene $600
// Juan tiene $1000
//Los precios de los helados son los sgtes:
//helado de agua $300
//helado de crema $350
//helado de crema mora $500
//helado de agua mora crema $580
//helado de crema con chispas de choc $600
//helado en pote pequeño $670
//helado de pote mediano $800

//crear soluciones:
// -Pedirles que ingresen el monto de dinero que tienen
// -Si hay dos o mas con el miso precio, mostrar ambos
// -Necesitan saber cuanto les queda de vuelto

dineroJuan = prompt("cuanto dinero tienes Juan?");
dineroJuan = parseInt(dineroJuan);

if (dineroJuan >= 300 && dineroJuan < 320) {
    alert("comprate el helado de agua");
    alert("y te sobran" + (dineroJuan - 300));
}
else if (dineroJuan >= 320 && dineroJuan < 350){
    alert("comprate el helado de crema");
    alert("y te sobran" + (dineroJuan - 320));
}
else if (dineroJuan >= 350 && dineroJuan < 500){
    alert("comprate el helado de agua mora crema");
    alert("y te sobran" + (dineroJuan - 350));
}
else if (dineroJuan >= 500 && dineroJuan < 600){
    alert("comprate el helado de crema con chispas de choc");
    alert("y te sobran" + (dineroJuan - 500));
}
else if (dineroJuan >= 600 && dineroJuan < 800){
    alert("comprate el helado pote pequeño");
    alert("y te sobran" + (dineroJuan - 600));    
}
else if (dineroJuan >= 800 && dineroJuan < 900){
    alert("comprate el helado pote mediano");
    alert("y te sobran" + (dineroJuan - 800));
}
else if (dineroJuan >= 900){
    alert("comprate el helado pote mediano y otro mas");
} else {
    alert("lo siento, no te alcanza para comprar");
}

dineroPedro = prompt("cuanto dinero tienes Pedro?");
dineroPedro = parseInt(dineroPedro);

if (dineroPedro >= 300 && dineroPedro < 320) {
    alert("comprate el helado de agua");
    alert("y te sobran" + (dineroPedro - 300));

}
else if (dineroPedro >= 320 && dineroPedro < 350){
    alert("comprate el helado de crema");
    alert("y te sobran" + (dineroPedro - 320));

}
else if (dineroPedro >= 350 && dineroPedro < 500){
    alert("comprate el helado de agua mora crema");
    alert("y te sobran" + (dineroPedro - 350));
}
else if (dineroPedro >= 500 && dineroPedro < 600){
    alert("comprate el helado de crema con chispas de choc");
    alert("y te sobran" + (dineroPedro - 500));
}
else if (dineroPedro >= 600 && dineroPedro < 800){
    alert("comprate el helado pote pequeño");
    alert("y te sobran" + (dineroPedro - 600));
}
else if (dineroPedro >= 800 && dineroPedro < 900){
    alert("comprate el helado pote mediano");
    alert("y te sobran" + (dineroPedro - 800));    
}
else if (dineroPedro >= 600){
    alert("comprate el helado pote mediano y otro mas");
} else {
    alert("lo siento, no te alcanza para comprar");
}

dineroRoberto = prompt("cuanto dinero tienes Roberto?");
dineroRoberto = parseInt(dineroRoberto);

if (dineroRoberto >= 300 && dineroRoberto < 320) {
    alert("comprate el helado de agua");
    alert("y te sobran" + (dineroRoberto - 300));
}
else if (dineroRoberto >= 320 && dineroRoberto < 350){
    alert("comprate el helado de crema");
    alert("y te sobran" + (dineroPedro - 320));
}
else if (dineroRoberto >= 350 && dineroRoberto < 500){
    alert("comprate el helado de agua mora crema");
    alert("y te sobran" + (dineroPedro - 350));
}
else if (dineroRoberto >= 500 && dineroRoberto < 600){
    alert("comprate el helado de crema con chispas de choc");
    alert("y te sobran" + (dineroPedro - 500));
}
else if (dineroRoberto >= 600 && dineroRoberto < 800){
    alert("comprate el helado pote pequeño");
    alert("y te sobran" + (dineroPedro - 600));   
}
else if (dineroRoberto >= 800 && dineroRoberto < 900){
    alert("comprate el helado pote mediano");
    alert("y te sobran" + (dineroPedro - 800));    
}
else if (dineroRoberto >= 400){
    alert("comprate el helado pote mediano y otro mas");
} else {
    alert("lo siento, no te alcanza para comprar");
}