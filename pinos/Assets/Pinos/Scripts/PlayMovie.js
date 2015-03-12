/*la textura que va aponer a reproducir*/
//public var movTexture : MovieTexture;
/*repite el video hasta terminar el juego*/
//public var Loopiando :  boolean = false;


function Start() 
{	
	/*si se repite*/
	//if(Loopiando){
		//movTexture.loop = Loopiando;
	//}
	/*setea la textura al objeto*/
	//renderer.material.mainTexture = movTexture;
	/*le da play a la textura*/
	//movTexture.Play();
	//Handheld.PlayFullScreenMovie (Application.streamingAssetsPath+"/cargando.mp4", Color.black , FullScreenMovieControlMode.Full, FullScreenMovieScalingMode.AspectFit);
	Handheld.PlayFullScreenMovie ("Pinos.mp4", Color.black , FullScreenMovieControlMode.CancelOnInput);
	
	//Debug.Log(Application.streamingAssetsPath+"/cargando.mp4");
}
