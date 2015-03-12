#pragma strict
///variables para cambiar la imagen de los botones derecha izquierda
public var izquierda:Texture;

function Start () {

}

function Update () {
if(Input.touches.Length<=0){
	//Si no hay ningun dedo tocando la pantalla no hace nada.
  	}else{
  	
  		for (var i =0 ; i< Input.touchCount; i++) {
		 	/*Condicion que pregunta, si existe la textura y si la textura se encuentra en la posicion
		 	del primer dedo q esta tocando la pantalla*/
		 	if(this.guiTexture!=null&&(this.guiTexture.HitTest(Input.GetTouch(i).position))){
		 		
		 		if(this.name=="izquierda"){
		 		//se cambia la imagen del boton
	 				this.guiTexture.texture=izquierda;
	 				
		 		}
		 		
}}}}