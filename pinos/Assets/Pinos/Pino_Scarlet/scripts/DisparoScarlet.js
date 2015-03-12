#pragma strict
static var disparo : boolean;

function Start () {
	disparo = false;
}

function Update () {

	if (disparo){
		audio.Play();
		disparo=false;
	}
}

 