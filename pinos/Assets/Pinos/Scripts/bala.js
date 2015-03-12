/*en la clase bala.js se colaca en siguiente codigo 
(Particula Sparks)
Rotacion X:270
Min Size: 0.1
Max size: 0.1
Min Energy: 0.5
Max Energy: 0.5
Min Emission: 10
Max Emission 50
*/
public var chispa : GameObject;
private var punto : boolean = false;

function OnCollisionEnter (hit : Collision) { 
	
    if(hit.gameObject.tag == "enemigo")
	{
		Destroy(this.gameObject);
		/*instanciamos el prefab y le damos las cordenadas que 
		tiene la bala ecepto la rotacion que la sacamos del Objeto original Chispa*/
		var chisp1 : GameObject = Instantiate (chispa, this.transform.position, chispa.transform.rotation);
		Destroy(chisp1, 0.2);//destruimos el prefab en un tiempo de 0.2 segundos
		if(!punto){
			switch(player.personaje)
			{
				case 0:
					score.puntos += 8;
					score.puntodifi += 8;
				break;
				case 1:
					score.puntos += 4;
					score.puntodifi += 4;
				break;
				case 2:
					score.puntos += 10;
					score.puntodifi += 10;
				break;
			}
			punto = true;
		}
	}else
	{
		if(hit.gameObject.tag == "objeto")
		{
			Destroy(this.gameObject);
			/*instanciamos el prefab y le damos las cordenadas que 
			tiene la bala ecepto la rotacion que la sacamos del Objeto original Chispa*/
			var chisp2 : GameObject = Instantiate (chispa, this.transform.position, chispa.transform.rotation);
			Destroy(chisp2, 0.2);//destruimos el prefab en un tiempo de 0.2 segundos
		}
	}
}