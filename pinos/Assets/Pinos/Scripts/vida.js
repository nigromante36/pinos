#pragma strict

public var imagenGUI : GUITexture;

public var vida10 : Texture;
public var vida9 : Texture;
public var vida8 : Texture;
public var vida7 : Texture;
public var vida6 : Texture;
public var vida5 : Texture;
public var vida4 : Texture;
public var vida3 : Texture;
public var vida2 : Texture;
public var vida1 : Texture;

static var golpe : boolean = false;

private var vida : int =10;

function Start () {

}

function Update () {

	if(vida == 0)
	{
		Application.LoadLevel("ScenaFinal");
	}
	
	switch(vida)
	{
		case 10:
			///cambiar textura
			imagenGUI.texture = vida10;
		break;
		case 9:
			///cambiar textura
			imagenGUI.texture = vida9;
		break;
		case 8:
			///cambiar textura
			imagenGUI.texture = vida8;
		break;
		case 7:
			///cambiar textura
			imagenGUI.texture = vida7;
		break;
		case 6:
			///cambiar textura
			imagenGUI.texture = vida6;
		break;
		case 5:
			///cambiar textura
			imagenGUI.texture = vida5;
		break;
		case 4:
			///cambiar textura
			imagenGUI.texture = vida4;
		break;
		case 3:
			///cambiar textura
			imagenGUI.texture = vida3;
		break;
		case 2:
			///cambiar textura
			imagenGUI.texture = vida2;
		break;
		case 1:
			///cambiar textura
			imagenGUI.texture = vida1;
			
		break;
	}
}

function restarVida()
{
	vida--;
	golpe = true;
}

function OnCollisionEnter (hit : Collision) { 

	if(hit.gameObject.tag == "enemigo"){
		vida--;
		golpe = true;
		audio.Play();
	}
}