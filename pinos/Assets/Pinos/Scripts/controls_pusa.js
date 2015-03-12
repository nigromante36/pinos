/*Clase EventosBoton; Esta clase nos permite identificar los eventos Touch q el usuario ejecuta
 en la pantalla*/


public var guinormal:GameObject;
public var guipausa:GameObject;
public static var nombreNivel : String;

//cambio de imagen de guitex
public var pausa:Texture;
public var pausaOri:Texture;
public var reanudar:Texture;
public var reiniciar:Texture;
public var finalizarjuego:Texture;

//Funcion Update que es llamado una vez por frame. 
function Update () {
  //Condicion  q mira si se esta tocando la pantalla.
	if(Input.touches.Length<=0){
	//Si no hay ningun dedo tocando la pantalla no hace nada.
  	}else{
  	
  		for (var i =0 ; i< Input.touchCount; i++) {
		 	/*Condicion que pregunta, si existe la textura y si la textura se encuentra en la posicion
		 	del primer dedo q esta tocando la pantalla*/
		 	if(this.guiTexture!=null&&(this.guiTexture.HitTest(Input.GetTouch(i).position))){
		 		
		 		if(this.name=="GUI boton Pausa"){
		 		//se cambia la imagen del boton
	 					this.guiTexture.texture=pausa;
		 		if(Time.timeScale==1)
	 				{
	 					Time.timeScale = 0;
	 					guinormal.SetActive(false);
	 					guipausa.SetActive(true);
	 					//audio.Stop();
	 				}
	 				this.guiTexture.texture=pausaOri;
		 		}
		 		
		 		if(this.name=="Reanudar"){
	 				
	 				if(Time.timeScale == 0)
	 				{
	 					Time.timeScale = 1;
	 					guinormal.SetActive(true);
	 					guipausa.SetActive(false);
	 					//audio.Play();
	 				}
	 				this.guiTexture.texture=reanudar;
		 		}
		 		
		 		if(this.name=="Reiniciar"){
		 			this.guiTexture.texture=reiniciar;
		 			Time.timeScale = 1;
	 				Application.LoadLevel(nombreNivel);
	 				score.puntos = 0;
	 				score.puntodifi = 0;
		 		}
		 		
		 		if(this.name=="Finalizar juego"){
		 			this.guiTexture.texture=finalizarjuego;
		 			Time.timeScale = 1;
	 				Application.LoadLevel("menu_principal");
	 				score.puntos = 0;
	 				score.puntodifi = 0;
		 		}
	 		}
	 	}
  	}	
 }