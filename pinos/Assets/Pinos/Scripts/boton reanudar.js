//cambio de imagen de guitex
public var reanudarOri:Texture;

//Funcion Update que es llamado una vez por frame. 
function Update () {
  //Condicion  q mira si se esta tocando la pantalla.
	if(Input.touches.Length<=0){
		this.guiTexture.texture=reanudarOri;
  	}else{
  	
  		for (var i =0 ; i< Input.touchCount; i++) {
		 	
		 	if(this.guiTexture!=null&&(this.guiTexture.HitTest(Input.GetTouch(i).position))){
		 	
	 		}
	 	}
  	}	
 }