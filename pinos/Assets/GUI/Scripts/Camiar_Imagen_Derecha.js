#pragma strict
///variables para cambiar la imagen de los botones derecha izquierda
public var dispararOri:Texture;

function Start () {

}

function Update () {
	if(Input.touches.Length<=0){
		//Si no hay ningun dedo tocando la pantalla no hace nada.
		this.guiTexture.texture=dispararOri;
	}
}