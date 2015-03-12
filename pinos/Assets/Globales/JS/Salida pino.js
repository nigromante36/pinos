#pragma strict

public var playerScarlet : GameObject;
public var playerToreto : GameObject;
public var playerRanger : GameObject;


public var salida : GameObject;
private var salio : boolean = false;

function Start () {

}

function Update () {

	if(!salio)
	{
		switch(player.personaje)
		{
		case 0:
			playerScarlet.transform.position = Vector3(0, 0, -47.42);
			Destroy(playerToreto);
			Destroy(playerRanger);
		break;
		case 1:
			playerToreto.transform.position = Vector3(0, 0, -47.42);
			Destroy(playerScarlet);
			Destroy(playerRanger);
		break;
		case 2:
			playerRanger.transform.position = Vector3(0, 1.25, -47.42);
			Destroy(playerToreto);
			Destroy(playerScarlet);
		break;
		}
		
		salio = true;
	}
}