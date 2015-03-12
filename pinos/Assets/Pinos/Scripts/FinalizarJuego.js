#pragma strict

function Start () {

}

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
		 		
		 		if(this.name=="menu_finalizar"){
	 				Application.LoadLevel("menu_principal");
	 				score.puntos = 0;
		 		}
		 		
		 		if(this.name=="Reiniciar"){
	 				Application.LoadLevel("level_1");
	 				Time.timeScale = 1;
		 			score.puntos = 0;
	 		}
	 	}
  	}	
 }
 }