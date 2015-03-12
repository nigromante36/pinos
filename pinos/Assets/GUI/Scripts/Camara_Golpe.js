#pragma strict

public var vidaRanger : vida;
public var vidaScarlet : vida;
public var vidaTorentino : vida;

var color : Color;

public var guiVida : GUITexture;

public var animacion_camara_Golpe : AnimationClip;

private var _animation : Animation;

private var tiempo : float = 3.0;

function Awake(){
	_animation = GetComponent(Animation);
}

function Start () {

}

function Update () {
	if(vidaRanger.golpe){
		_animation.CrossFade(animacion_camara_Golpe.name);
		vidaRanger.golpe = false;
		tiempo =0;
		
	}
	
	if(vidaScarlet.golpe){
		_animation.CrossFade(animacion_camara_Golpe.name);
		vidaScarlet.golpe = false;
		tiempo =0;
		
	}
	
	if(vidaTorentino.golpe){
		_animation.CrossFade(animacion_camara_Golpe.name);
		vidaTorentino.golpe = false;
		tiempo =0;
	}
	
	tiempo += Time.deltaTime;
	
	if(tiempo <= 1.0){
	
		 color = Color(0.985, 0.167, 0.167);
		guiVida.color = color;
		
	}else{
		color = Color(0.485, 0.485, 0.485);
		guiVida.color = color;
	}
}