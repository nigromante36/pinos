#pragma strict

public var vida : int = 100;

public var Explocion : GameObject;



function Start () {


}

function Update () {
	
}

function OnCollisionEnter (hit : Collision) { 
	
    if(hit.gameObject.tag == "bala")
	{
		switch(player.personaje)
		{
			case 0:
				vida -= 8;
			break;
			case 1:
				vida -= 4;
			break;
			case 2:
				vida -= 10;
			break;
		}
		
		if(vida <= 0){
			Destroy(this.gameObject);
			var explo1 : GameObject = Instantiate (Explocion, this.transform.position, this.transform.rotation);//Ubicamos la explocion en las cordenadas de la bola
			Destroy(explo1, 0.7);//cronometramos el tiempo que tarda en desaparecer la explocion
		}
	}
	
	if(hit.gameObject.tag == "objeto")
	{
		Destroy(this.gameObject);
		var explo2 : GameObject = Instantiate (Explocion, this.transform.position, this.transform.rotation);//Ubicamos la explocion en las cordenadas de la bola
		Destroy(explo2, 0.7);//cronometramos el tiempo que tarda en desaparecer la explocion
	}
 	
 	if(hit.gameObject.tag == "pino")
	{
		Destroy(this.gameObject);
		var explo3 : GameObject = Instantiate (Explocion, this.transform.position, this.transform.rotation);//Ubicamos la explocion en las cordenadas de la bola
		Destroy(explo3, 0.7);//cronometramos el tiempo que tarda en desaparecer la explocion
	}
}