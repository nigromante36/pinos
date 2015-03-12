#pragma strict

public var salidaCentro : GameObject;
public var salidaIzq : GameObject;
public var salidaDer : GameObject;
//public var sonidoBola :

public var bola1 : GameObject;
public var bola2 : GameObject;
public var bola3 : GameObject;
//public var bola4 : GameObject;
//public var bola5 : GameObject;

private var bolaRodando:float = 0;
//private var primeraScarlet : boolean = true;

//intervalo de disparo
static var intervalo : float = 3.0;
//proximo intervalo
private var nextinterval : float = 0.0;


function Start () {
	intervalo = 3.0;
}

function Update () {
 
if(Time.time > nextinterval){
	nextinterval = Time.time + intervalo;
		
		var ran = 2;
		
		if(score.puntos>200 && score.puntos<500){
			ran = 3;
		}
		
		if(score.puntos>501){
			ran = 4;
		}
		
		/*if(score.puntos>701 && score.puntos<950){
			ran = 5;
		}
		
		if(score.puntos>951){
			ran = 6;
		}*/
		
 		var bola = Random.Range(1, ran);
 		var salida = Random.Range(1, 4);

			switch (bola)
			{
				case 1:
					audio.Play();
					switch (salida)
					{
						case 1:
							var Clone1 : GameObject;
							Clone1 = Instantiate (bola1,salidaCentro.transform.position,Quaternion.identity);
							audio.Play();	
						break;
						case 2:
							var Clone2 : GameObject;
							Clone2 = Instantiate (bola1,salidaIzq.transform.position,Quaternion.identity);
							audio.Play();	
						break;
						case 3:
							var Clone3 : GameObject;
							Clone3 = Instantiate (bola1,salidaDer.transform.position,Quaternion.identity);
							audio.Play();
						break;
					}
					
				break;
				
				case 2:				
					switch (salida)
					{
						case 1:
							var Clone4 : GameObject;
							Clone4 = Instantiate (bola2,salidaCentro.transform.position,Quaternion.identity);	
						break;
						case 2:
							var Clone5 : GameObject;
							Clone5 = Instantiate (bola2,salidaIzq.transform.position,Quaternion.identity);	
						break;
						case 3:
							var Clone6 : GameObject;
							Clone6 = Instantiate (bola2,salidaDer.transform.position,Quaternion.identity);
						break;
					}
				break;
				
				case 3:
					switch (salida)
					{
						case 1:
							var Clone7 : GameObject;
							Clone7 = Instantiate (bola3,salidaCentro.transform.position,Quaternion.identity);	
						break;
						case 2:
							var Clone8 : GameObject;
							Clone8 = Instantiate (bola3,salidaIzq.transform.position,Quaternion.identity);	
						break;
						case 3:
							var Clone9 : GameObject;
							Clone9 = Instantiate (bola3,salidaDer.transform.position,Quaternion.identity);
						break;
					}
				break;
				/*case 4:
					switch (salida)
					{
						case 1:
							var Clone10 : GameObject;
							Clone10 = Instantiate (bola4,salidaCentro.transform.position,Quaternion.identity);	
						break;
						case 2:
							var Clone11 : GameObject;
							Clone11 = Instantiate (bola4,salidaIzq.transform.position,Quaternion.identity);	
						break;
						case 3:
							var Clone12 : GameObject;
							Clone12 = Instantiate (bola4,salidaDer.transform.position,Quaternion.identity);
						break;
					}
				break;
				case 5:
					switch (salida)
					{
						case 1:
							var Clone13 : GameObject;
							Clone13 = Instantiate (bola5,salidaCentro.transform.position,Quaternion.identity);	
						break;
						case 2:
							var Clone14 : GameObject;
							Clone14 = Instantiate (bola5,salidaIzq.transform.position,Quaternion.identity);	
						break;
						case 3:
							var Clone15 : GameObject;
							Clone15 = Instantiate (bola5,salidaDer.transform.position,Quaternion.identity);
						break;
					}
				break;*/
			}
 	}
}