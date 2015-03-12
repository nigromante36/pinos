#pragma strict
public var camara:Camera;
//public var porcentajeAncho:float=0;
//public var porcentajeAlto:float=0;

private var tamanoWCamara : double = 0;
private var tamanoHCamara : double = 0;

function Start () {

}

function Update () {
	var wcamara : double = camara.pixelWidth; //por defecto es 1024
	var hcamara : double = camara.pixelHeight; //por defecto es 600
	
	if(wcamara != tamanoWCamara || hcamara != tamanoHCamara){
		//allar el porcentage que cambio
		var porcentajeWCamara : double = ((100*wcamara)/1024)/100;
		var porcentajeHCamara : double = ((100*hcamara)/600)/100;
		//Debug.Log(porcentajeWCamara);
		//Debug.Log(camara.pixelWidth);
		//Debug.Log(camara.pixelHeight);
		//Debug.Log(porcentajeHCamara);
		//multiplica el porcentage por el valor del 100% y lo setea a la escala del plano
		var valorX : float = (12.9177*porcentajeWCamara);
		var valorZ : float = (7.561443*porcentajeHCamara);
		this.transform.localScale.x = Mathf.Abs(12.9177-valorX)+12.9177;
		this.transform.localScale.z = Mathf.Abs(7.561443-valorZ)+7.561443;
		
		//iguala las variables de la camara anterior con los valores que cambio
		tamanoWCamara = wcamara;
		tamanoHCamara = hcamara;
	}
}