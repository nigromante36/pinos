#pragma strict

public var nomLvl : controls_pusa;

//Funcion Update que es llamado una vez por frame. 
function Update () {
  //Condicion  q mira si se esta tocando la pantalla.
  
	if(Input.touches.Length<=0){
	//Si no hay ningun dedo tocando la pantalla no hace nada.
  	}else{
  		for(var i =0; i< Input.touchCount; i++){
		 	/*Condicion que pregunta, si existe la textura y si la textura se encuentra en la posicion
		 	del primer dedo q esta tocando la pantalla*/
		 	if(this.guiTexture!=null&&(this.guiTexture.HitTest(Input.GetTouch(0).position))){
		 		if(this.name=="Jugar"){
		 			audio.Play();
	 				Application.LoadLevel("Selec_nivel") ;
		 		}	
		 		if(this.name=="Salir"){
		 			audio.Play();
	 				Application.LoadLevel("menu_principal") ;
		 		}
		 		if(this.name=="lvl_1"){
		 			nomLvl.nombreNivel="level_1";
		 			//Debug.Log(nomLvl.nombreNivel);
		 			audio.Play();
		 			Application.LoadLevel("level_1") ;
		 		}
		 		if(this.name=="atras"){
		 			audio.Play();
		 			Application.LoadLevel("Seleccion presonaje escena") ;
		 		}
		 		
	 		}
	 	}
  	}	
 }