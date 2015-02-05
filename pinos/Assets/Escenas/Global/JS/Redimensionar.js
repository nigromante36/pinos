#pragma strict
public var camara:Camera;
public var porcentajeAncho:float=0.0;
public var porcentajeAlto:float=0.0;

private var tamanoWCamara : int = 0;
private var tamanoHCamara : int = 0;

function Start () {
	tamanoWCamara = 0;
	tamanoHCamara = 0;
	redimensionar();
}

function redimensionar(){
	tamanoWCamara = camara.pixelWidth;
	tamanoHCamara = camara.pixelHeight;
	var wgui=(tamanoWCamara*porcentajeAncho)/100;
	var hgui=(tamanoHCamara*porcentajeAlto)/100;
	this.guiTexture.pixelInset.width=wgui;
	this.guiTexture.pixelInset.height=hgui;
	this.guiTexture.pixelInset.x = (wgui/2)*(-1);
	this.guiTexture.pixelInset.y = (hgui/2)*(-1);
}