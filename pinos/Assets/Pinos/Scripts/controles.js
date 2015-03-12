#pragma strict
/*Clase EventosBoton; Esta clase nos permite identificar los eventos Touch q el usuario ejecuta
 en la pantalla*/

public var pino_Scarlet:GameObject;
public var pino_Toreto:GameObject;
public var pino_Ranger:GameObject;
//public var sonidoDisparo: AudioClip;

public var scarlet :animaciones;
public var toreto :animaciones;
public var ranger :animaciones;

///variables para cambiar la imagen de los botones derecha izquierda
public var derecha:Texture;
public var izquierda:Texture;
public var disparar:Texture;

public var disparoScarlet : DisparoScarlet;
public var disparoToreto : DisparoToreto;
public var disparoRanger : DisparoRanger;

private var disparotiempo:float = 0;
private var primeraScarlet : boolean = true;
private var primeraToreto : boolean = true;
private var primeraRanger : boolean = true;


//Funcion Update que es llamado una vez por frame. 
function Update () {

	disparotiempo += Time.deltaTime;
  //Condicion  q mira si se esta tocando la pantalla.
	if(Input.touches.Length<=0){
	//Si no hay ningun dedo tocando la pantalla no hace nada.
  	}else{
  	
  		for (var i =0 ; i< Input.touchCount; i++) {
		 	/*Condicion que pregunta, si existe la textura y si la textura se encuentra en la posicion
		 	del primer dedo q esta tocando la pantalla*/
		 	if(this.guiTexture!=null&&(this.guiTexture.HitTest(Input.GetTouch(i).position))){
		 		if(this.name=="mover_Der"){
		 			this.guiTexture.texture=derecha;
		 			switch(player.personaje)
					{
					case 0:
						if(pino_Scarlet.transform.position.x <3){
			 				scarlet.moverPinoDer();
		 				}
					break;
					case 1:
						if(pino_Toreto.transform.position.x <3){
			 				toreto.moverPinoDer();
		 				}
					break;
					case 2:
						if(pino_Ranger.transform.position.x <3){
			 				ranger.moverPinoDer();
		 				}
					break;
					}
		 			
		 		}
		 		if(this.name=="mover_Izq"){
		 		
		 			this.guiTexture.texture=izquierda;
		 			
		 			switch(player.personaje)
					{
					case 0:
						if(pino_Scarlet.transform.position.x >-3){
			 				scarlet.moverPinoIzq();
		 				}
					break;
					case 1:
						if(pino_Toreto.transform.position.x >-3){
			 				toreto.moverPinoIzq();
		 				}
					break;
					case 2:
						if(pino_Ranger.transform.position.x >-3){
			 				ranger.moverPinoIzq();
		 				}
					break;
					}
		 		}
		 		if(this.name=="disparar"){
		 		
		 			this.guiTexture.texture=disparar;
		 			
	 				switch(player.personaje)
					{
					case 0:
			 				scarlet.fire();
			 				if ((disparotiempo >= 0.65) || primeraScarlet){
			 					disparoScarlet.disparo=true;
			 					disparotiempo = 0;
			 					primeraScarlet = false;
			 				}
			 				
					break;
					case 1:
			 				toreto.fire();
			 				if ((disparotiempo >= 0.28) || primeraToreto){
			 					disparoToreto.disparo=true;
			 					disparotiempo = 0;
			 					primeraToreto = false;
			 				}
					break;
					case 2:
			 				ranger.fire();
			 				if ((disparotiempo >= 0.64) || primeraRanger){
			 					disparoRanger.disparo=true;
			 					disparotiempo = 0;
			 					primeraRanger = false;
			 				}
					break;
						
					}
		 		}else{
		 			primeraScarlet = true;
		 			primeraToreto = true;
		 			primeraRanger = true;
		 		}
	 		}
	 	}
  	}	
 }