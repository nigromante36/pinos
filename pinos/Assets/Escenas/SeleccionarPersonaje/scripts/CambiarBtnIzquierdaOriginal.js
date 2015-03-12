#pragma strict
public var izquierdaOri:Texture;

function Start () {

}

function Update () {
if(Input.touches.Length<=0){
	//Si no hay ningun dedo tocando la pantalla no hace nada.
	 				this.guiTexture.texture=izquierdaOri;
  
  		}
}