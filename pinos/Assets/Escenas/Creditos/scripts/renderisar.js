#pragma strict
public var camara:Camera;
public var porcentajeAncho:int=0;
public var porcentajeAlto:int=0;

public var texture:Texture;
private var contador : float=0.0;

function Start () {

}

function Update () {
var wcamara=camara.pixelWidth;
var hcamara=camara.pixelHeight;
var wgui=(wcamara*porcentajeAncho)/100;
var hgui=(hcamara*porcentajeAlto)/100;
this.guiTexture.pixelInset.width=wgui;
this.guiTexture.pixelInset.height=hgui;
//Condicion  q mira si se esta tocando la pantalla.
	if(Input.touches.Length<=0){
	//Si no hay ningun dedo tocando la pantalla no hace nada.
  	}else{
  	
  		for (var i =0 ; i< Input.touchCount; i++) {
		 	/*Condicion que pregunta, si existe la textura y si la textura se encuentra en la posicion
		 	del primer dedo q esta tocando la pantalla*/
		 	if(this.guiTexture!=null&&(this.guiTexture.HitTest(Input.GetTouch(i).position))){
		 		
		 		if(this.name=="Salir"){
		 		    this.guiTexture.texture=texture;
	 				audio.Play();
	 				for(var j=0; j<100; j++){
	 					contador += Time.deltaTime;
	 					//Debug.Log("contador: "+contador+" intera "+j);
	 					if(contador>=0.18){
	 						Application.LoadLevel("menu_principal");
	 						return;
	 					}
	 				}
		 		}
		 		
		 		
	 		}
	 	}
  	}	
}
