#pragma strict
public var tiempoDemora : float = 0.0;
public var sonido : GameObject;

private var tiempoTrasn : float = 0.0;

private var nombre : String;

function Start () {
	tiempoTrasn = 0.0;
	//nombre="Viento";
}

function Update () {
	tiempoTrasn += Time.deltaTime;
	//Debug.Log(tiempoTrasn);
	if(tiempoTrasn>=tiempoDemora){
		
		switch(sonido.name){
			case "Viento":
				//Debug.Log("entro");
				audio.Play();
				tiempoTrasn=0.0;
			break;
			
			case "Cuervos":
				audio.Play();
				tiempoTrasn=0.0;
			break;
			
		}
	}
}