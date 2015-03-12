#pragma strict

function Start () {

}

function Update () {
	if(Time.timeScale==0)
	 {
	 	audio.Stop();
	 }else{
	 	if(!audio.isPlaying)
	 		{
	 			audio.Play();
	 		}
	 	}
}