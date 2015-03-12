#pragma strict

public var salir:Texture;
public var creditos:Texture;
public var jugar:Texture;
public var record:Texture;
public var tutorial:Texture;
private var contador : float = 0.0;
private var tiempo_espera : float = 0.0;

function Start () {
	tiempo_espera = 0.0;
}

//Funcion Update que es llamado una vez por frame. 
function Update () {
	tiempo_espera += Time.deltaTime;
	if(tiempo_espera >= 0.5){
  //Condicion  q mira si se esta tocando la pantalla.
	if(Input.touches.Length<=0){
	//Si no hay ningun dedo tocando la pantalla no hace nada.
  	}else{
  	
  		for (var i =0 ; i< Input.touchCount; i++) {
		 	/*Condicion que pregunta, si existe la textura y si la textura se encuentra en la posicion
		 	del primer dedo q esta tocando la pantalla*/
		 	if(this.guiTexture!=null&&(this.guiTexture.HitTest(Input.GetTouch(i).position))){
		 		
		 		if(this.name=="salir"){
	 				//se cambia la imagen del boton
	 				this.guiTexture.texture=salir;
		 			audio.Play();
		 		 	for(var n=0; n<100; n++){
	 					contador += Time.deltaTime;
	 					//Debug.Log("contador: "+contador+" intera "+n);
	 					if(contador>=0.2){
	 						Application.Quit();
	 						return;
	 					}
	 				}			
		 		}
		 		
		 		if(this.name=="creditos"){
		 		//se cambia la imagen del boton
	 				this.guiTexture.texture=creditos;
	 				audio.Play();
	 				for(var m=0; m<100; m++){
	 					contador += Time.deltaTime;
	 					//Debug.Log("contador: "+contador+" intera "+m);
	 					if(contador>=0.2){
	 						Application.LoadLevel("creditos");
	 						return;
	 					}
	 				}
		 		}
		 		
		 		if(this.name=="jugar"){
		 		//se cambia la imagen del boton
	 				this.guiTexture.texture=jugar;
	 				audio.Play();
	 				for(var j=0; j<100; j++){
	 					contador += Time.deltaTime;
	 					//Debug.Log("contador: "+contador+" intera "+j);
	 					if(contador>=0.2){
	 						Application.LoadLevel("Seleccion presonaje escena");
	 						Time.timeScale = 1;
	 						return;
	 					}
	 				}
		 		}
		 		
		 		if(this.name=="record"){
		 		//se cambia la imagen del boton
	 				this.guiTexture.texture=record;
		 			audio.Play();
		 			for(var l=0; l<100; l++){
	 					contador += Time.deltaTime;
	 					//Debug.Log("contador: "+contador+" intera "+l);
	 					if(contador>=0.2){
	 						Application.LoadLevel("record");
	 						return;
	 					}
	 				}
		 		}
		 		
		 		if(this.name=="tutorial"){
		 		//se cambia la imagen del boton
	 				this.guiTexture.texture=tutorial;
		 			audio.Play();
		 			for(var k=0; k<100; k++){
	 					contador += Time.deltaTime;
	 					//Debug.Log("contador: "+contador+" intera "+k);
	 					if(contador>=0.2){
	 						Application.LoadLevel("tutorial");
	 						return;
	 					}
	 				}
		 		}
	 		}
	 	}
  	}
  }	
 }