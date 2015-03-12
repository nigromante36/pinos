#pragma strict

//variable del personaje
static var personaje : int = 0;

//metdoo de la librerias de unity 
function Start () {
	//variable global
	PlayerPrefs.DeleteKey("personaje");
	personaje = PlayerPrefs.GetInt("personaje",0);
}
//metodo de la librerias de unity
function Awake () {
	//inicializacion de la variable global
	PlayerPrefs.SetInt("personaje",personaje);
}

function OnApplicationQuit () {
	PlayerPrefs.SetInt("personaje",personaje);
}

function Update(){
}