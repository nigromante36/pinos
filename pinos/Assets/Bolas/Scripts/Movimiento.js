#pragma strict

public var velocidad : float = 0.5;

function Start () {

}

function Update () {

	if(Time.timeScale == 1){
		this.transform.Translate(0.0,0.0,-velocidad);
	}
}