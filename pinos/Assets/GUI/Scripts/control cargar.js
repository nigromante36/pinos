#pragma strict

private var tiempo : float = 0;

function Start () {
	//Handheld.PlayFullScreenMovie ("cargando.mp4", Color.black, FullScreenMovieControlMode.Full);
}

function Update () {
	tiempo += Time.deltaTime;
	
	if(tiempo >1){
		Application.LoadLevel("menu_principal");
	}
}