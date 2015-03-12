#pragma strict
public var validador : ValidarLvl;
public var GuiLvl2 : Texture;
public var nomLvl : controls_pusa;

function Start () {


}

function Update () {
	//Condicion  q mira si se esta tocando la pantalla.
  	if(validador.validaLvl2){
		this.guiTexture.texture=GuiLvl2;
	}
	if(Input.touches.Length<=0){
	//Si no hay ningun dedo tocando la pantalla no hace nada.
  	}else{
  		for(var i =0; i< Input.touchCount; i++){
		 	/*Condicion que pregunta, si existe la textura y si la textura se encuentra en la posicion
		 	del primer dedo q esta tocando la pantalla*/
		 	if(this.guiTexture!=null&&(this.guiTexture.HitTest(Input.GetTouch(0).position))){
		 		if(this.name=="lvl_2"){
		 			if(validador.validaLvl2){
		 				nomLvl.nombreNivel="level_2";
		 				//Debug.Log(nomLvl.nombreNivel);
		 				audio.Play();
	 					Application.LoadLevel("level_2");
	 				}
		 		}	
	 		}
	 	}
  	}	
}