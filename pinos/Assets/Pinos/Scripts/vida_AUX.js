#pragma strict

public var vidaScarlet : vida;
public var vidaToreto : vida;
public var vidaRager : vida;

function Start () {

}

function Update () {

}

function OnCollisionEnter (hit : Collision) { 

	if(hit.gameObject.tag == "enemigo"){
		switch(player.personaje)
		{
			case 0:
				vidaScarlet.restarVida();
			break;
			case 1:
				vidaToreto.restarVida(); 
			break;
			case 2:
				vidaRager.restarVida(); 
			break;
		}
	}
}