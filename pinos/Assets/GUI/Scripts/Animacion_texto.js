#pragma strict

public static var puntoScore : score;
private var tiempo : float=0.0;

function Start () {

}

function Update () {

	if(puntoScore.puntos>=200){
		this.enabled=true;
		animation.Play();
		tiempo+=Time.deltaTime;
		if(tiempo>=3){
			animation.Stop();
			//this.enabled=false;
		}
	}
}