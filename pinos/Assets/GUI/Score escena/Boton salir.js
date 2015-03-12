#pragma strict
public var salir:Texture;
private var contador : float = 0.0;
private var tiempo_espera : float = 0.0;

function Start () {
	tiempo_espera = 0;
}

function Update () {
 //Condicion  q mira si se esta tocando la pantalla.
 	tiempo_espera += Time.deltaTime;
 	if(tiempo_espera >= 0.5){
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
	 				for(var j=0; j<100; j++){
	 					contador += Time.deltaTime;
	 					//Debug.Log("contador: "+contador+" intera "+j);
	 					if(contador>=0.2){
	 						Application.LoadLevel("menu_principal");
	 						return;
	 					}
	 				}
		 		}
		 		
	 		}
	 	}
  	}
  }	
}