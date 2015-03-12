#pragma strict

public var camara : Camera;

public var porcentageGUIText : int = 0;


function Start () {

}

function Update () {
	var wcamara=camara.pixelWidth;
	var hcamara=camara.pixelHeight;
	var wgui=(wcamara*porcentageGUIText)/100;
	var hgui=(hcamara*porcentageGUIText)/100;
	this.guiText.fontSize=wgui-hgui;
}