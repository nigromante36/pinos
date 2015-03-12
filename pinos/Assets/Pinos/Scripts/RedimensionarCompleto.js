#pragma strict
public var camara:Camera;
public var porcentajeAncho:float=0;
public var porcentajeAlto:float=0;

private var tamanoWCamara : int = 0;
private var tamanoHCamara : int = 0;
function Start () {

}

function Update () {
	var wcamara : int = camara.pixelWidth;
	var hcamara : int = camara.pixelHeight;
	
	if(wcamara != tamanoWCamara || hcamara != tamanoHCamara){
		tamanoWCamara = wcamara;
		tamanoHCamara = hcamara;
		var wgui=(wcamara*porcentajeAncho)/100;
		var hgui=(hcamara*porcentajeAlto)/100;
		this.guiTexture.pixelInset.width=wgui;
		this.guiTexture.pixelInset.height=hgui;
		this.guiTexture.pixelInset.x = (wgui/2)*(-1);
		this.guiTexture.pixelInset.y = (hgui/2)*(-1);
	}
}