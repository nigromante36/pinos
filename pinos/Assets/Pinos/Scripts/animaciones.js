#pragma strict
//bala
public var bala : GameObject;
//punto de salida de la bala
public var salida_bala_scarlet : GameObject;
//punto de salida de la bala
public var salida_bala_rager : GameObject;
//punto de salida de la bala
public var salida_bala_toreto : GameObject;
//aceleracion de la bala
private var Aceleracion : float = 100;
//intervalo de disparo
private var interval : float = 0.8;
//Variable que guarda la animacion de saltar a la izquierda.
public var salto_iz : AnimationClip;
//Variable que guarda la animacion de saltar a la derecha.
public var salto_de : AnimationClip;
//Variable que guarda la animacion de saltar a la derecha.
public var idle : AnimationClip;
//animacion disparar
public var disparar : AnimationClip;
//Componente que obtiene las animaciones.
private var _animation : Animation;

/*********** manejo de muzzles*******************/
//randon de muzzles
private var Muzzle : int;
//muzzles de disparo
public var Muzzle1 : GameObject;
public var Muzzle2 : GameObject;
//intervalo de disparo
public var intervalo : float = 0.5;
//proximo intervalo
private var nextinterval : float = 0.0;
//tiempo de la idle
private var tiempoIdle : float = 0.0;

function Start(){
}

function Awake(){
	_animation = GetComponent(Animation);
}
function Update () {
	
	transform.rotation = Quaternion.identity;
	
	//si tocan el touch
	if(Input.touchCount <=0)
	{
		tiempoIdle = tiempoIdle + (Time.deltaTime);
		//si el tiempo es mayor a 10
		if(tiempoIdle > 3 ){
			//si el tiempo es menor a 11
			if(tiempoIdle < 4 ){
				_animation.CrossFade(idle.name);
			}else{
				//se reinicia el tiempo por que ya paso 
				tiempoIdle = 0;
			}
		}else{
			//esperando que se cumpla el tiempo para ejecutar el idle
		}
	}else{
		tiempoIdle = 0;
	}
}

/*Funcion q al ser llamada por la clase EventoBoton mueve el pino a la derecha una sola ves
por cada toque en pantalla solo si la variable (unaves = true)*/
function moverPinoDer(){
	//Debug.Log("entro al metodo derecha");
	_animation.CrossFade(salto_de.name);
	yield WaitForSeconds (0.1);//espera por la animacion.
		transform.Translate(0.13,0.0,0.0);
}
/*Funcion q al ser llamada por la clase EventoBoton mueve el pino a la izquierda una sola ves
por cada toque en pantalla solo si la variable (unaves = true)*/
function moverPinoIzq(){
	_animation.CrossFade(salto_iz.name);
	yield WaitForSeconds (0.1);//espera por la animacion.
		transform.Translate(-0.13,0.0,0.0);
}

function fire(){
	
	if(Time.time > nextinterval){
	
	nextinterval = Time.time + intervalo;
	
	_animation.CrossFade(disparar.name);
	
		switch(player.personaje)
		{
			case 0:
				var Clonebala1 : GameObject = Instantiate ( bala, salida_bala_scarlet.transform.position, salida_bala_scarlet.transform.rotation);
				Clonebala1.rigidbody.AddRelativeForce(new Vector3(0, 0, -Aceleracion), ForceMode.VelocityChange); 
			break;
			case 1:
				var Clonebala2 : GameObject = Instantiate ( bala, salida_bala_toreto.transform.position, salida_bala_toreto.transform.rotation);
				Clonebala2.rigidbody.AddRelativeForce(new Vector3(0, 0, -Aceleracion), ForceMode.VelocityChange); 
			break;
			case 2:
				var Clonebala3 : GameObject = Instantiate ( bala, salida_bala_rager.transform.position, salida_bala_rager.transform.rotation);
				Clonebala3.rigidbody.AddRelativeForce(new Vector3(0, 0, -Aceleracion), ForceMode.VelocityChange); 
			break;
		}
		
		Muzzle = Random.Range(1, 3);
		
		switch (Muzzle)
		{
			case 1:
				switch(player.personaje)
				{
					case 0:
						var CloneFire1 : GameObject = Instantiate (Muzzle1,salida_bala_scarlet.transform.position,Quaternion.identity);
						Destroy(CloneFire1,0.02);
					break;
					case 1:
						var CloneFire2 : GameObject = Instantiate (Muzzle1,salida_bala_toreto.transform.position,Quaternion.identity);
						Destroy(CloneFire2,0.02);
					break;
					case 2:
						var CloneFire3 : GameObject = Instantiate (Muzzle1,salida_bala_rager.transform.position,Quaternion.identity);
						Destroy(CloneFire3,0.02);
					break;
				}
			break;
			
			case 2:
				switch(player.personaje)
				{
					case 0:
						var CloneFire4 : GameObject = Instantiate (Muzzle2,salida_bala_scarlet.transform.position,Quaternion.identity);
						Destroy(CloneFire4,0.02);
					break;
					case 1:
						var CloneFire5 : GameObject = Instantiate (Muzzle2,salida_bala_toreto.transform.position,Quaternion.identity);
						Destroy(CloneFire5,0.02);
					break;
					case 2:
						var CloneFire6 : GameObject = Instantiate (Muzzle2,salida_bala_rager.transform.position,Quaternion.identity);
						Destroy(CloneFire6,0.02);
					break;
				}
			break;
		}
	}
}