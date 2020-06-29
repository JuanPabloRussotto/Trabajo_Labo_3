"use strict"
var r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,cont=0,felicitacion;

function pase1(){

	document.getElementById("pagina1").style.display="none";
	document.getElementById("pagina2").style.display="block";
	
	window.scroll(0,0);
}
function pase2(){

	document.getElementById("pagina2").style.display="none";	
	document.getElementById("pagina3").style.display="block";

	window.scroll(0,0);
		
}

function calculo(){

	//pagina 1
	if(document.getElementById("primeraa").checked == true){
		 r1="1. Respuesta correcta";
		 cont=cont+1;
		}
	else
		 r1="1. La respuesta correcta era la opcion A";
			if(document.getElementById("segundab").checked == true){
		 r2="2. Respuesta correcta";
		cont=cont+1;
		}
	else
		 r2="2. La respuesta correcta era la opcion B";
			if(document.getElementById("tercerac").checked == true){
		 r3="3. Respuesta correcta";
		 cont=cont+1;
		}
	else
		 r3="3. La respuesta correcta era la opcion C";
			if(document.getElementById("segundad").checked == true){
		 r4="4. Respuesta correcta";
		 cont=cont+1;
		}
	else
		 r4="4. La respuesta correcta era la opcion B";
			if(document.getElementById("primerae").checked == true){
		 r5="5. Respuesta correcta";
		cont=cont+1;
		}
	else
		 r5="5. La respuesta correcta era la opcion A";


		//pagina 2
			if(document.getElementById("respuesta6").value.toUpperCase() == "MY NAME IS JUAN"){
		 r6="6. Respuesta correcta";
		 cont=cont+1;
		}
	else
		 r6="6. Error, la respuesta correcta era My name is Juan";
		if(document.getElementById("respuesta7").value.toUpperCase() == "THEY ARE FROM MEXICO"){
		 r7="7. Respuesta correcta";
		 cont=cont+1;
		}
	else
		 r7="7. Error, la respuesta correcta era They are from Mexico";
		if(document.getElementById("respuesta8").value.toUpperCase() == "HIS MOTHER HAS A DOG"){
		 r8="8. Respuesta correcta";
		 cont=cont+1;
		}
	else
		 r8="8. Error, la respuesta correcta era His mother has a dog";
		if(document.getElementById("respuesta9").value.toUpperCase() == "MY FAVOURITE COLOR IS GREEN"){
		 r9="9. Respuesta correcta";
		 cont=cont+1;
		}
	else
		 r9="9. Error, la respuesta correcta era My favourite color is green";
		if(document.getElementById("respuesta10").value.toUpperCase() == "WHAT TIME IS IT?"){
		 r10="10. Respuesta correcta";
		 cont=cont+1;
		}
	else
		 r10="10. Error, la respuesta correcta era What time is it?";

		//Pagina 3
	if(document.getElementById("respuesta11").value.toUpperCase()=="AIRPLANE"){
		r11="11. Respuesta correcta";
		cont=cont+1;
	}
	else
		r11="11. Error, la respuesta correcta era Airplane";

	if(document.getElementById("respuesta12").value.toUpperCase()=="TRAIN"){
		r12="12. Respuesta correcta";
		cont=cont+1;
	}
	else
		r12="12. Error, la respuesta correcta era Train";

	if(document.getElementById("respuesta13").value.toUpperCase()=="TOMATO"){
		r13="13. Respuesta correcta";
		cont=cont+1;
	}
	else
		r13="13. Error, la respuesta correcta era Tomato";

	if(document.getElementById("respuesta14").value.toUpperCase()=="CHAIR"){
		r14="14. Respuesta correcta";
		cont=cont+1;
	}
	else
		r14="14. Error, la respuesta correcta era Chair";
	if(document.getElementById("respuesta15").value.toUpperCase()=="BED"){
		r15="15. Respuesta correcta";
		cont=cont+1;
	}
	else
		r15="15. Error, la respuesta correcta era Bed";


		document.getElementById("todo").style.display="none";
		alert("USTED HA FINALIZADO EL EXAMEN");
		document.getElementById("respuestas").style.display="block";

		window.scroll(0,0);

		if(cont>5){
			 felicitacion="Felicitaciones! Usted ha aprobado el examen!";
		}
		else{
			 felicitacion="No has logrado el promedio m&iacute;nimo para aprobar el examen.";
		}
		document.getElementById("caja").style.display="block";
		document.getElementById("caja").innerHTML=r1+"<br>"+r2+"<br>"+r3+"<br>"+r4+"<br>"
		+r5+"<br>"+r6+"<br>"+r7+"<br>"+r8+"<br>"+r9+"<br>"+r10+"<br>"+r11+"<br>"+r12+"<br>"
		+r13+"<br>"+r14+"<br>"+r15;
		if((cont*100)/15 >=60){
			document.getElementById("nota").style.display="block";
			document.getElementById("nota").innerHTML=((cont*100)/15).toFixed(2)+"/100"+"<br>"+felicitacion;
			document.getElementById('boton_aprob').style.display="block";
		}
		else{
			document.getElementById("malanota").style.display="block";
			document.getElementById("malanota").innerHTML=((cont*100)/15).toFixed(2)+"/100"+"<br>"+felicitacion;
		}

}
function redireccion(){
	document.getElementById('respuestas').style.display="none";
	document.getElementById('desaparece').style.display="none";
	document.getElementById('tambien_desaparece').style.display="none";
	document.getElementById('cert').style.display="block";
	window.scroll(0,0);

}

function certificado(){

	if(document.getElementById('nom').value=="")
	{
		document.getElementById('caja_cert').style.display="block";
		document.getElementById('caja_cert').innerHTML="Por favor, ingrese su nombre.";
	}
	else
	{
		document.getElementById('colocar_nombre').style.display="none";
		document.getElementById('todo').style.display="block";
		window.scroll(0,0);
		var aux=document.getElementById('nom').value;
		document.getElementById('nom_apro').innerHTML=aux;
	}
}

if(document.getElementById('boton_sig')){
document.getElementById("boton_sig").onclick=pase1;
}

if(document.getElementById('boton_sig2')){
document.getElementById("boton_sig2").onclick=pase2;
}

if(document.getElementById('boton_final')){
document.getElementById("boton_final").onclick=calculo;
}

if(document.getElementById('comenzar')){
document.getElementById("comenzar").onclick=certificado;
}

if(document.getElementById('boton_aprob')){
document.getElementById("boton_aprob").onclick=redireccion;
}