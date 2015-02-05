#pragma strict
public var escena : String;


function Start () {
	yield WaitForSeconds (4);
	Application.LoadLevel(escena);
}

function Update () {

}
