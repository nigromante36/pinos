#pragma strict

private var tiempo : float = 0;
public var escena : String;

function Start () {

}

function Update () {
	tiempo += Time.deltaTime;
	
	if(tiempo >1){
		Application.LoadLevel(escena);
	}
}