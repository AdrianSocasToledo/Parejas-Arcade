let coches = [];
let frutas = [];
let pokemon = [];
let container= document.getElementById("container");
let marcador;
let tiempo;
var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
let dificultad;
let numerosAleatorios= [];
let imagenesJuego= [];
let imagenesEnUso;
let ultimaImagenConsultada;
let parejasEncontradas;
let juegoTerminado=false;
let registro=[];
let voltear= true;



cargarImagenes();
//localStorage.removeItem("puntuacionFacil");

function cargarImagenes() {

	coches [0] = "coches/alfaromeogiulia.jpg";
	coches [1] = "coches/alfaromeogiulieta.jpg";
	coches [2] = "coches/audia4.jpg";
	coches [3] = "coches/audia6.jpg";
	coches [4] = "coches/bmwserie5.jpg";
	coches [5] = "coches/bmwx3.jpg";
	coches [6] = "coches/citroencactus.jpg";
	coches [7] = "coches/citroenpicasso.jpg";
	coches [8] = "coches/ds3.jpg";
	coches [9] = "coches/ds5.jpeg";
	coches [10] = "coches/fiat500.jpg";
	coches [11] = "coches/fiatpanda.jpg";
	coches [12] = "coches/fordfiesta.jpg";
	coches [13] = "coches/fordfocus.jpg";
	coches [14] = "coches/hyundaii30.jpg";
	coches [15] = "coches/hyundaitucson.jpg";
	coches [16] = "coches/kiario.jpg";
	coches [17] = "coches/kiasportage.jpg";
	coches [18] = "coches/mazda2.jpg";
	coches [19] = "coches/mazda3.jpg";
	coches [20] = "coches/mercedesclasee.jpg";
	coches [21] = "coches/mercedesclases.jpg";
	coches [22] = "coches/nissanleaf.png";
	coches [23] = "coches/nissanqashqai.jpg";
	coches [24] = "coches/opelcorsa.jpg";
	coches [25] = "coches/opelinsignia.jpg";
	coches [26] = "coches/peugeot5008.jpg";
	coches [27] = "coches/peugeot508.jpg";
	coches [28] = "coches/porsche911.jpg";
	coches [29] = "coches/porschecayenne.jpg";
	coches [30] = "coches/renault captur.jpg";
	coches [31] = "coches/renault kadjar.jpeg";
	coches [32] = "coches/seatleon.jpg";
	coches [33] = "coches/seattarraco.jpg";
	coches [34] = "coches/skodakaroq.jpg";
	coches [35] = "coches/skodaoctavia.jpg";
	coches [36] = "coches/toyotaauris.jpg";
	coches [37] = "coches/toyotaprius.jpg";
	coches [38] = "coches/volkswagenpolo.jpeg";
	coches [39] = "coches/volkswagentroc.jpg";
	coches [40] = "coches/volvov40.jpg";
	coches [41] = "coches/volvoxc40.jpg";

	frutas [0] = "frutas/aguacate.jpg";
	frutas [1] = "frutas/ajo.jpg";
	frutas [2] = "frutas/alcachofa.jpg";
	frutas [3] = "frutas/apio.jpg";
	frutas [4] = "frutas/apio.png";
	frutas [5] = "frutas/calabaza.png";
	frutas [6] = "frutas/cebolla.jpg";
	frutas [7] = "frutas/cereza.jpg";
	frutas [8] = "frutas/coco.jpg";
	frutas [9] = "frutas/frambuesa.png";
	frutas [10] = "frutas/fresa.png";
	frutas [11] = "frutas/granada.jpeg";
	frutas [12] = "frutas/jengibre.jpg";
	frutas [13] = "frutas/kiwi.jpg";
	frutas [14] = "frutas/lechuga.jpeg";
	frutas [15] = "frutas/lechugaiceberg.png";
	frutas [16] = "frutas/lima.jpg";
	frutas [17] = "frutas/limon.jpeg";
	frutas [18] = "frutas/mandarina.jpeg";
	frutas [19] = "frutas/manzanaroja.jpg";
	frutas [20] = "frutas/manzanaverde.jpg";
	frutas [21] = "frutas/melocoton.png";
	frutas [22] = "frutas/melon.jpeg";
	frutas [23] = "frutas/millo.png";
	frutas [24] = "frutas/mora.jpeg";
	frutas [25] = "frutas/naranja.png";
	frutas [26] = "frutas/papa.jpg";
	frutas [27] = "frutas/pepino.jpeg";
	frutas [28] = "frutas/pepino.png";
	frutas [29] = "frutas/pera.jpg";
	frutas [30] = "frutas/pimientoamarillo.jpeg";
	frutas [31] = "frutas/pimientorojo.png";
	frutas [32] = "frutas/piña.jpeg";
	frutas [33] = "frutas/platano.jpeg";
	frutas [34] = "frutas/puerro.png";
	frutas [35] = "frutas/remolacha.jpg";
	frutas [36] = "frutas/sandia.png";
	frutas [37] = "frutas/tomate.png";
	frutas [38] = "frutas/uvablanca.jpg";
	frutas [39] = "frutas/uvaroja.jpg";
	frutas [40] = "frutas/zanahoria.png";
	frutas [41] = "frutas/uvaazul.jpeg";

	pokemon [0] = "pokemon/aerodactyl.png";
	pokemon [1] = "pokemon/arcanine.png";
	pokemon [2] = "pokemon/banette.png";
	pokemon [3] = "pokemon/blastoise.jpg";
	pokemon [4] = "pokemon/buterfree.jpg";
	pokemon [5] = "pokemon/charizard.png";
	pokemon [6] = "pokemon/cyndaquil.jpg";
	pokemon [7] = "pokemon/ditto.png";
	pokemon [8] = "pokemon/doduo.png";
	pokemon [9] = "pokemon/eevee.png";
	pokemon [10] = "pokemon/electabuzz.png";
	pokemon [11] = "pokemon/exeggcute.png";
	pokemon [12] = "pokemon/gastly.png";
	pokemon [13] = "pokemon/graveler.jpg";
	pokemon [14] = "pokemon/gyarados.png";
	pokemon [15] = "pokemon/hitmonchan.png";
	pokemon [16] = "pokemon/horsea.png";
	pokemon [17] = "pokemon/jigglypuff.png";
	pokemon [18] = "pokemon/jynx.png";
	pokemon [19] = "pokemon/kangaskhan.png";
	pokemon [20] = "pokemon/machoke.png";
	pokemon [21] = "pokemon/magikarp.png";
	pokemon [22] = "pokemon/magmar.png";
	pokemon [23] = "pokemon/marowak.png";
	pokemon [24] = "pokemon/meowth.png";
	pokemon [25] = "pokemon/mew.jpg";
	pokemon [26] = "pokemon/mewtwo.png";
	pokemon [27] = "pokemon/mrmime.jpg";
	pokemon [28] = "pokemon/nidoran.png";
	pokemon [29] = "pokemon/ninetales.png";
	pokemon [30] = "pokemon/oddish.jpg";
	pokemon [31] = "pokemon/omanyte.gif";
	pokemon [32] = "pokemon/onix.png";
	pokemon [33] = "pokemon/persian.png";
	pokemon [34] = "pokemon/pichu.png";
	pokemon [35] = "pokemon/pikachu.png";
	pokemon [36] = "pokemon/pinsir.png";
	pokemon [37] = "pokemon/porygon.png";
	pokemon [38] = "pokemon/psyduck.png";
	pokemon [39] = "pokemon/rhydon.png";
	pokemon [40] = "pokemon/seadra.png";
	pokemon [41] = "pokemon/seel.png";
	pokemon [42] = "pokemon/shinx.jpg";
	pokemon [43] = "pokemon/slowbro.png";
	pokemon [44] = "pokemon/snorlax.png";
	pokemon [45] = "pokemon/squirtle.png";
	pokemon [46] = "pokemon/tauros.png";
	pokemon [47] = "pokemon/vaporeon.png";
	pokemon [48] = "pokemon/venomoth.jpg";
	pokemon [49] = "pokemon/voltorb.png";
	pokemon [50] = "pokemon/wailmer.png";
	pokemon [51] = "pokemon/weedle.png";
	pokemon [52] = "pokemon/weezing.jpg";
	pokemon [53] = "pokemon/zapdos.png";

}

function obtenerDificultad(){
	radioButton = document.getElementsByName("dificultad");
    for(i=0;i<radioButton.length;i++)
        if(radioButton[i].checked) return radioButton[i].value;
}

function crearGrid(){

	grid= document.createElement("div");
	grid.setAttribute("id","grid");
	grid.setAttribute("class","wrapper");

	puntuacion= document.createElement("div");
	puntuacion.setAttribute("id","puntuacion");
	
	partidasHistorial= document.createElement("div");
	partidasHistorial.setAttribute("id","partidasHistorial");
	
	crono= document.createElement("div");
	crono.setAttribute("id","crono");
	
	crono.setAttribute("class","desplazado"+dificultad);
	partidasHistorial.setAttribute("class","desplazado"+dificultad);
	puntuacion.setAttribute("class","desplazado"+dificultad);

	
	//puntosActuales
	marcadorLabel= document.createElement("label");
	marcadorLabel.setAttribute("id","marcador");
	marcadorLabel.innerHTML= "Score: "+marcador;
	
	//MaxPuntuación
	maxPuntuacion= document.createElement("label");
	maxPuntuacion.setAttribute("id","maxPuntuacion");
	maxPuntuacion.innerHTML= "High Score: " +obtenerMaximaPuntuacion();
	
	puntuacion.appendChild(marcadorLabel);
	puntuacion.appendChild(maxPuntuacion);
	//NumeroDePartidas
	numeroPartidas= document.createElement("label");
	numeroPartidas.setAttribute("id","numeroPartidas");
	numeroPartidas.innerHTML = "  Partidas: "+obtenerNumeroPartidas()+"  ";
	//Historial
	verHistorial= document.createElement("input");
	verHistorial.setAttribute("type","submit");
	verHistorial.setAttribute("value","Ver Historial");
	verHistorial.setAttribute("class","boton");
	verHistorial.onclick=function(){
		document.getElementById("ventanaHistorial").style.visibility= "visible";
	}

	partidasHistorial.appendChild(numeroPartidas);
	partidasHistorial.appendChild(verHistorial);
	//Tiempo
	Horas = document.createElement("label");
	Horas.setAttribute("id","Horas");
	Horas.innerHTML="00";
	Minutos = document.createElement("label");
	Minutos.innerHTML= ":00";
	Minutos.setAttribute("id","Minutos");
	Segundos = document.createElement("label");
	Segundos.innerHTML= "0:";
	Segundos.setAttribute("id","Segundos");
	Centesimas = document.createElement("label");
	Centesimas.setAttribute("id","Centesimas");
	
	crono.appendChild(Horas);
	crono.appendChild(Minutos);
	crono.appendChild(Segundos);
	crono.appendChild(Centesimas);

	
	container.appendChild(puntuacion);
	container.appendChild(partidasHistorial);
	container.appendChild(crono);
	container.appendChild(grid);

	//añadimos las cartas
	let numDiv= dificultad*dificultad;
    for(let i=0;i<numDiv;i++){
		div = document.createElement("div");
		div.setAttribute("class","grid-item");
		imagen= document.createElement("img");
		imagen.setAttribute("id",i);
		imagen.setAttribute("src",imagenesJuego[i]);
		
		div.appendChild(imagen);
		imagen.onclick = function (){
				if(voltear)//comprobamos que sea posible voltear las cartas(No haya más de dos cartas a consultar).
					voltearImagen(this);
		}
		
        grid.appendChild(div);
    }
	
}
//comprobamos que las imágenes sean iguales.
function voltearImagen(element){
	imagenesEnUso++;
	element.setAttribute("src",imagenesJuego[element.id]);
	marcadorLabel= document.getElementById("marcador");
	if(imagenesEnUso==2){
		if(imagenesJuego[element.id]==imagenesJuego[ultimaImagenConsultada]){
			marcador=marcador+10;
			marcadorLabel.innerHTML= "Score: "+marcador;
			imagenesEnUso=0;
			document.getElementById(element.id).onclick= function(){}
			document.getElementById(ultimaImagenConsultada).onclick= function(){}
			parejasEncontradas++;
			terminarJuego();
		}else{
			voltear=false;
			imagenesNoCoincidentes(element.id,ultimaImagenConsultada);
		}
	}else{

	}
	
	ultimaImagenConsultada= element.id;

}


function imagenesNoCoincidentes(id,ult){

	setTimeout(function(){
		

		marcador = marcador-1;
		
		if(marcador<=0)
			marcador=0;

		marcadorLabel.innerHTML = "Score: "+marcador;
		document.getElementById(ult).setAttribute("src","reverso.png");
		document.getElementById(id).setAttribute("src","reverso.png");
		voltear=true;
		imagenesEnUso=0;
	},1000);

}

function generarListaImagenes(){

	if(dificultad==4){
		generarNumerosAleatorios(pokemon);
		rellenarListaImagenes(pokemon);
	} else if(dificultad==6){
		generarNumerosAleatorios(frutas);
		rellenarListaImagenes(frutas);
	} else{
		generarNumerosAleatorios(coches);
		rellenarListaImagenes(coches);
	}
}
//creamos un array con las imágenes a usar en la partida.
function rellenarListaImagenes(grupoImagenes){
	imagenesJuego= [];
	tamLista= dificultad*dificultad;
	
	for(i=0;i<tamLista;i++){
		index= getRandom(0,numerosAleatorios.length);//generamos un aleatorio
		num= numerosAleatorios[index];//cogemos el aleatorio que corresponda al indice aleatorio que generamos.
		
		
		while(!comprobarImagen(grupoImagenes[num])){//comprobamos que la imagen no esté añadida más de dos veces
			
			index= getRandom(0,numerosAleatorios.length);
			num= numerosAleatorios[index];
		}
		
		imagenesJuego[i]= grupoImagenes[num];
	
		
	}
}
//comprobamos que la imagen no se haya puesto más de dos veces.
function comprobarImagen(imagen){
	
	contador=0;
	usable= true;
	for(let i=0;i<imagenesJuego.length;i++){
		if(imagenesJuego[i]==imagen)
			contador++;
	}

	if(contador==2)
		usable=false;
	

	return usable;

}

function generarNumerosAleatorios(grupoImagenes){
	numerosAleatorios=[];
	
	for(let i=0;i<dificultad*dificultad/2;i++){
		
		random = getRandom(0,grupoImagenes.length-1);
		while(!comprobarRandom(random)){
			random= getRandom(0,grupoImagenes.length-1);
		}
		numerosAleatorios[i]= random;
	}
}
//Comprueba que el número que le pasamos no está en la lista de numeros aleatorios que tenemos.
function comprobarRandom(random){
	libre=true;
	
	for(let i=0;i<numerosAleatorios.length;i++){
		if(numerosAleatorios[i]==random)
			libre=false;
	}

	return libre;
}

function jugar(){

	imagenesEnUso=0;
	marcador=0;
	parejasEncontradas=0;

	localStorage.setItem("numPartidas", parseInt(obtenerNumeroPartidas())+1);//añadimos una partida al numero de partidas
	container.removeChild(document.getElementById("titulo"));
	container.removeChild(document.getElementById("marcador"));
	container.removeChild(document.getElementById("grid"));
	container.removeChild(document.getElementById("tiempo"));
	
	dificultad = obtenerDificultad();
	generarListaImagenes();
	crearGrid();
	//creamos el historial a consultar
	if(dificultad==4){
		crearHistorial("Facil");
		
	}else if(dificultad==6){
		crearHistorial("Medio");
		wrapper= document.getElementsByClassName("wrapper")[0];
		wrapper.setAttribute("style","grid-template-rows: repeat(6, 128px);");
		wrapper.setAttribute("style","grid-template-columns: repeat(6, 128px);");

	}else{
		crearHistorial("Dificil");
		wrapper= document.getElementsByClassName("wrapper")[0];
		wrapper.setAttribute("style","grid-template-rows: repeat(8, 128px);");
		wrapper.setAttribute("style","grid-template-columns: repeat(8, 128px);");

	}

	obetenerEsperaParaCambiarARerverso();//colocamos las cartas bocabajo después de un tiempo segun la dificultad.
	container.removeChild(document.getElementById("form"));//eliminamos la selección de dificultad.
	control = setInterval(cronometro,10);//iniciamos el cronómetro
}

function obetenerEsperaParaCambiarARerverso(){
	
	if(dificultad==4){
		setTimeout(cambiarAReverso,1500);

	}else if(dificultad==6){
		setTimeout(cambiarAReverso,1000);
	}else{
		setTimeout(cambiarAReverso,750);
	}

}
//pasamos todas las imagenes a reverso.
function cambiarAReverso(){

		for(let i=0; i<dificultad*dificultad;i++){
			document.getElementById(i).setAttribute("src","reverso.png");
		}	

}

function terminarJuego(){
	
	
	if(parejasEncontradas==dificultad*dificultad/2){
		juegoTerminado=true;
		clearInterval(control);
		crearVentanaModal();
	}else{

	}
	
	
}
//creamos la ventana con la que guardaremos los datos de la partida.
function crearVentanaModal(){
	
	modal= document.createElement("div");
	modal.setAttribute("class","modal");
	
	modalContenido= document.createElement("div");
	modalContenido.setAttribute("class","modal-contenido");

	labelPuntuacion = document.createElement("label");
	labelPuntuacion.innerHTML= "Score: "+marcador;
	labelPuntuacion.setAttribute("id","labelPuntuacion");

	labelTiempo= document.createElement("label");
	labelTiempo.setAttribute("id","labelTiempo");
	labelTiempo.innerHTML= "  Tiempo: "+horas+":"+minutos+":"+segundos+":"+centesimas;

	labelFecha= document.createElement("label");
	labelFecha.innerHTML= "  Fecha: "+obtenerFecha();

	inputNombreJugador= document.createElement("input");
	inputNombreJugador.setAttribute("id","nombreJugador");
	inputNombreJugador.setAttribute("type","text");
	inputNombreJugador.setAttribute("placeholder","Nombre Jugador");

	botonGuardar= document.createElement("input");
	botonGuardar.setAttribute("type","submit");
	botonGuardar.onclick= function(){ guardarDatosModal()}
	botonGuardar.setAttribute("value","Guardar");
	botonGuardar.setAttribute("class","boton");

	botonNuevaPartida= document.createElement("input");
	botonNuevaPartida.setAttribute("type","submit");
	botonNuevaPartida.onclick= function(){ location.reload() }
	botonNuevaPartida.setAttribute("value","Nueva Partida");
	botonNuevaPartida.setAttribute("class","boton");
	
	
	modalContenido.appendChild(labelPuntuacion);
	modalContenido.appendChild(labelTiempo);
	modalContenido.appendChild(labelFecha);
	modalContenido.appendChild(inputNombreJugador);
	modalContenido.appendChild(botonGuardar);
	modalContenido.appendChild(botonNuevaPartida);
	
	modal.appendChild(modalContenido);
	container.appendChild(modal);

}
//ordenamos el historial de partidas que queremos guardar.
//historial es el historial que ya tenemos guardado más el registro que queremos añadir
//en la posición 0 está la puntuación y en la 2 el tiempo.
//por fecha no hace falta ordenarlo, porque por defecto se ordenan por orden de añadido al array.
function ordenarStorage(historial){

	
	listaOrdenada = historial.sort(function comparar ( a, b ){ 
		if(a[0]>b[0]){
			return -1;
		}
		if(a[0]<b[0]){
			return 1;
		}
		if(a[0]==b[0]){
			if(a[2]>[2]){
				return -1;
			}else{
				return 1;
			}
		}
		return 0;
	 });
	
	return listaOrdenada;
	


}
//se guardan los datos dependiendo de la dificultad.
function guardarDatosModal(){

			nombre= document.getElementById("nombreJugador").value
			
			if(nombre=="" || nombre.length>12){
				alert("Nombre no válido, se registrará como Sin Nombre");
				nombre="Sin Nombre";
			}
			registro[0]=marcador;
			registro[1]=nombre;
			guardarTiempo=minutos+":"+segundos;
			if(minutos<10)
				guardarTiempo="0"+guardarTiempo;
			registro[2]=guardarTiempo;
			registro[3]=obtenerFecha();
	
		if(dificultad==4){
			
			historial= JSON.parse(localStorage.getItem("puntuacionFacil"));
			if(historial==null)
				historial=[];
			historial[historial.length]=registro;
			localStorage.setItem("puntuacionFacil",JSON.stringify(ordenarStorage(historial)));

		}else if(dificultad==6){

			historial= JSON.parse(localStorage.getItem("puntuacionMedio"));
			if(historial==null)
				historial=[];
			historial[historial.length]=registro;
			localStorage.setItem("puntuacionMedio",JSON.stringify(ordenarStorage(historial)));
			
		}else{
			historial= JSON.parse(localStorage.getItem("puntuacionDificil"));
			if(historial==null)
				historial=[];
			historial[historial.length]=registro;
			localStorage.setItem("puntuacionDificil",JSON.stringify(ordenarStorage(historial)));
		}
	
		location.reload();

}

function obtenerFecha(){
	var hoy = new Date();
	var dd = hoy.getDate();
	var mm = hoy.getMonth()+1; //hoy es 0!
	var yyyy = hoy.getFullYear();

	if(dd<10) {
    	dd='0'+dd
	} 

	if(mm<10) {
    	mm='0'+mm
	} 

	hoy = dd+'/'+mm+'/'+yyyy;
	return hoy;	
}



function obtenerMaximaPuntuacion(){

	if(dificultad==4){
		if(localStorage.getItem("puntuacionFacil")==null){
			max=null;
		}else{
			max= JSON.parse(localStorage.getItem("puntuacionFacil"))[0][0];
		}
	}else if(dificultad==6){
		if(localStorage.getItem("puntuacionMedio")==null){
			max=null;
		}else{
			max= JSON.parse(localStorage.getItem("puntuacionMedio"))[0][0];
		}
	}else{
		if(localStorage.getItem("puntuacionDificil")==null){
			max=null;
		}else{
			max= JSON.parse(localStorage.getItem("puntuacionDificil"))[0][0];
		}
	}
	
	if(max==null)
		max=0;

	return max;
}

function obtenerNumeroPartidas(){

	numPartidas = localStorage.getItem("numPartidas");

	if(numPartidas=="NaN" || numPartidas=="" || numPartidas==null)
		numPartidas=0;
	
	return numPartidas;
}

//creamos el historial de partidas segun la dificultad que hayamos seleccionado.
function crearHistorial(modo){
	
	datos= JSON.parse(localStorage.getItem("puntuacion"+modo));
	if(datos==null)
		datos=[];
	numeroRegistros= datos.length-1;
	if(numeroRegistros>9)
		numeroRegistros=9;

	
	ventanaHistorial = document.createElement("div");
	ventanaHistorial.setAttribute("class","modal-historial");
	ventanaHistorial.setAttribute("id","ventanaHistorial");

	historial= document.createElement("div");
	historial.setAttribute("class","historial");

	cerrar= document.createElement("input");
	cerrar.setAttribute("type","submit");
	cerrar.setAttribute("value","cerrar");
	cerrar.setAttribute("class","boton");
	cerrar.onclick=function(){
		document.getElementById("ventanaHistorial").style.visibility="hidden";
	}

	tablaHistorial= document.createElement("table");
	tablaHistorial.setAttribute("id","tablaHistorial");

	historial.appendChild(cerrar);
	historial.appendChild(tablaHistorial);
	ventanaHistorial.appendChild(historial);
	container.appendChild(ventanaHistorial);

	tablaHistorial.innerHTML+= "<tr><th>Puesto</th><th>Score</th><th>Nombre</th><th>Tiempo</th><th>Fecha</th></tr>";

	for(i=0;i<=numeroRegistros;i++){
		tr=document.createElement('tr');
		tr.innerHTML+="<td>"+(i+1)+"</td>";
		tr.innerHTML+= "<td>"+datos[i][0]+"</td>";
		tr.innerHTML+= "<td>"+datos[i][1]+"</td>";
		tr.innerHTML+= "<td>"+datos[i][2]+"</td>";
		tr.innerHTML+= "<td>"+datos[i][3]+"</td>";
		tablaHistorial.appendChild(tr);
	}

	

}
//Funcion que nos permite obtener un aleatorio entre un rango determinado.
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
  }


function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}

function startIntro(){
	var intro = introJs();
	  intro.setOptions({
		steps: [
		  { 
			intro: "¡Vamos a jugar!"
		  },
		  {
			element: document.getElementById('seleccionDificultad'),
			intro: "Elige una dificultad. ¡Supera tus límites!"
		  },
		  {
			element: document.getElementById('easy'),
			intro: "Los Pokemons son para los niños",
			position: 'right'
		  },
		  {
			element: document.getElementById('half'),
			intro: "Las frutas son para los sanos",
			position: 'right'
		  },
		  {
			element: document.getElementById('hard'),
			intro: "Solo apto para locos",
			position: 'right'
		  },
		  {
			element: document.getElementById('jugarBoton'),
			intro: "¡Empieza a jugar!",
			position: 'right'
		  },
		]
	  });
	  intro.start();
  }