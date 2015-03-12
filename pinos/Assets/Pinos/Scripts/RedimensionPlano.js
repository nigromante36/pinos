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
		var wplane=(wcamara*porcentajeAncho)/100;
		var hplane=(hcamara*porcentajeAlto)/100;
		this.guiTexture.pixelInset.width=wplane;
		this.guiTexture.pixelInset.height=hplane;
		this.guiTexture.pixelInset.x = (wplane/2)*(-1);
		this.guiTexture.pixelInset.y = (hplane/2)*(-1);
		//this.Plane.
	}
}