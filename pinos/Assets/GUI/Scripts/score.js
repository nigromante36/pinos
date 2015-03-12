#pragma strict

static var puntos : int = 0;

static var puntodifi : int = 0;


function Start () {
	PlayerPrefs.DeleteAll();
	puntos = PlayerPrefs.GetInt("puntos",0);
}

function Awake () {
	PlayerPrefs.SetInt("puntos",puntos);
}

function OnApplicationQuit () {
	PlayerPrefs.SetInt("puntos",puntos);
	
}

function Update(){
	this.guiText.text = score.puntos+ " ";
	
	
	if(score.puntos>200 && score.puntos<500){
		Enemigos.intervalo = 2.7;
	}
		
	if(score.puntos>501 && score.puntos<700){
		Enemigos.intervalo = 2.4;
	}
	
	if(score.puntos>701 && score.puntos<950){
		Enemigos.intervalo = 2.1;
	}
	
	if(score.puntos>951){
		Enemigos.intervalo = 2.0;
	}
	
	if(score.puntos>2200){
		Enemigos.intervalo = 1.8;
	}

}