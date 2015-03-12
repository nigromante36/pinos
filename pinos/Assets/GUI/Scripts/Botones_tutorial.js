#pragma strict
public var siguiente_ori : Texture;
public var siguiente_pre : Texture;
public var tuto_1 : Texture;
public var tuto_2 : Texture;
public var fondo_gui : GUITexture;
public var btn_salir : GameObject;
//public var btn_siguiente : GUITexture;

private var contador : float = 0.0;



function Start () {
	contador=0.0;
}

function Update () {
	//Condicion  q mira si se esta tocando la pantalla.
	if(Input.touches.Length<=0){
	//Si no hay ningun dedo tocando la pantalla no hace nada.
  	}else{
  		for (var i =0 ; i< Input.touchCount; i++) {
		 	/*Condicion que pregunta, si existe la textura y si la textura se encuentra en la posicion
		 	del primer dedo q esta tocando la pantalla*/
		 	if(this.guiTexture!=null&&(this.guiTexture.HitTest(Input.GetTouch(i).position))){
		 		
		 		if(this.name=="Siguiente"){
	 				this.guiTexture.texture=siguiente_pre;//se cambia la imagen del boton
					this.audio.Play();
	 				for(var j=0; j<100; j++){
	 					contador += Time.deltaTime;
	 					//Debug.Log(contador);
	 					//Debug.Log("contador: "+contador+" intera "+j);
	 					if(contador>=1){
	 						
	 						btn_salir.SetActive(true);
	 						this.gameObject.SetActive(false);
	 						fondo_gui.texture = tuto_2;
	 						return;
	 					}
	 				}
		 		}
		 		
	 		}
	 	}
  	}
}