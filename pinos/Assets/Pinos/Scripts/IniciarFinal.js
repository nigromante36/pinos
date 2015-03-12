#pragma strict

private var numero :int =0;

function Start () {
	numero = score.puntos;
}

function Update () {
	this.guiText.text = numero +"";
}