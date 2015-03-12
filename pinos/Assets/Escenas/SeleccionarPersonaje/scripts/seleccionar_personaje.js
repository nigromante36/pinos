#pragma strict

public var pinos : GameObject;

public var textoInformacion : GUITexture;
public var textoScarlet : Texture;
public var textoToreto : Texture;
public var textoRanger : Texture;

private var toco : boolean = false;

function Strat () {
}

function Update () {
	//Condicion  q mira si se esta tocando la pantalla.
	if(Input.touches.Length<=0){
	//Si no hay ningun dedo tocando la pantalla no hace nada.
		toco = false;
  	}else{
  	
  		for (var i =0 ; i< Input.touchCount; i++) {
		 	/*Condicion que pregunta, si existe la textura y si la textura se encuentra en la posicion
		 	del primer dedo q esta tocando la pantalla*/
		 	if(this.guiTexture!=null&&(this.guiTexture.HitTest(Input.GetTouch(i).position))){

		 		if(this.name=="derecha"){
		 			if(!toco){
		 				switch(player.personaje)
		 				{
		 					case 0:
		 						//rotarlo
								pinos.transform.Rotate(0.0,120,0.0);
		 						//cambiar texto informacion
		 						textoInformacion.guiTexture.texture = textoToreto;
		 						//textoInformacion.renderer.material.SetTexture("_MainTex",textoToreto);
		 						//setiar el nuevo player en la variable global
		 						player.personaje = 1;
		 						audio.Play();
		 					break;
		 					case 1:
		 						//rotarlo
								pinos.transform.Rotate(0.0,120,0.0);
		 						//cambiar texto informacion
		 						textoInformacion.guiTexture.texture = textoRanger;
		 						//textoInformacion.renderer.material.SetTexture("_MainTex",textoRanger);
		 						//setiar el nuevo player en la variable global
		 						player.personaje = 2;
		 						audio.Play();
		 					break;
		 					case 2:
		 						//rotarlo
								pinos.transform.Rotate(0.0,120,0.0);
		 						//cambiar texto informacion
		 						textoInformacion.guiTexture.texture = textoScarlet;
		 						//textoInformacion.renderer.material.SetTexture("_MainTex",textoScarlet);
		 						//setiar el nuevo player en la variable global
		 						player.personaje = 0;
		 						audio.Play();
		 					break;
		 				}
		 				toco = true;
		 			}
		 		}
		 		
		 		if(this.name=="izquierda"){
		 			if(!toco){
		 				switch(player.personaje)
		 				{
		 					case 0:
		 						//rotarlo
								pinos.transform.Rotate(0.0,-120,0.0);
		 						//cambiar texto informacion
		 						textoInformacion.guiTexture.texture = textoRanger;
		 						//textoInformacion.renderer.material.SetTexture("_MainTex",textoRanger);
		 						//setiar el nuevo player en la variable global
		 						player.personaje = 2;
		 						audio.Play();
		 					break;
		 					case 1:
		 						//rotarlo
								pinos.transform.Rotate(0.0,-120,0.0);
		 						//cambiar texto informacion
		 						textoInformacion.guiTexture.texture = textoScarlet;
		 						//textoInformacion.renderer.material.SetTexture("_MainTex",textoScarlet);
		 						//setiar el nuevo player en la variable global
		 						player.personaje = 0;
		 						audio.Play();
		 					break;
		 					case 2:
		 						//rotarlo
								pinos.transform.Rotate(0.0,-120,0.0);
		 						//cambiar texto informacion
		 						textoInformacion.guiTexture.texture = textoToreto;
		 						//textoInformacion.renderer.material.SetTexture("_MainTex",textoToreto);
		 						//setiar el nuevo player en la variable global
		 						player.personaje = 1;
		 						audio.Play();
		 					break;
		 				}
	 					toco = true;
		 			}
		 		}
	 		}
	 	}
  	}	
  	
  	
}