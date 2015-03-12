#pragma strict
public class joystick extends logicaJoystick{
	enum JoystickType {Movement, LookRotation, SkyColor};
	public var joystickType : JoystickType;
	public var playerJoy : Transform = null;
	public var playerSpeed: float = 2f;
	public var maxjoyDelta: float = 0.08f;
	public var rotateSpeed: float = 100.0f;

	private var pitch :float = 0.0f;
	private var yaw :float = 0.0f;

	private var oJoyPos : Vector3;
	private var joyDelta : Vector3;

	private var oRotation: Vector3;

	private var joyTrans : Transform = null;

	public var troller : CharacterController;
	
	public var guiTextu: GameObject;
	
	public var centerX : float = 0.0;
	
	public var pino_Scarlet:GameObject;
	public var pino_Toreto:GameObject;
	public var pino_Ranger:GameObject;
	
	public var scarlet :animaciones;
	public var toreto :animaciones;
	public var ranger :animaciones;
	 
	function Start () {
		joyTrans = this.transform;
		oJoyPos = joyTrans.position;
		
		centerX = this.transform.position.x;
		
		//oRotation = playerJoy.eulerAngles;
		pitch = oRotation.x;
		yaw = oRotation.y;
	}

	function Update () {
		if(guiTextu.transform.position.x > centerX){
			
			//Debug.Log("a la derecha");
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
		
		if(guiTextu.transform.position.x < centerX){
			//Debug.Log("a la izquierda");
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
	}

	function OnTouchBegan(){
		touch2Watch = logicaJoystick.currTouch;
	}
	
	function OnTouchStayed(){
		//permanece
	}
	
	function OnTouchBeganAnyWhere(){
		//toco
	}
	
	function OnTouchMoved(){
		//movimiento
	}
	
	function OnTouchEnded(){
		//finalizo
	}

	function OnTouchMovedAnyWhere(){
		if(logicaJoystick.currTouch==touch2Watch){
			//mover joystick
			joyTrans.position = MoveJoystick();
			ApplyDeltaJoy();
		}
	}

	function OnTouchStayedAnyWhere(){
		if(logicaJoystick.currTouch==touch2Watch){
			ApplyDeltaJoy();
		}
	}

	function OnTouchEndedAnyWhere(){
		if(logicaJoystick.currTouch==touch2Watch || Input.touches.Length <= 0){
			//mover joystick al origen de la posicion
			joyTrans.position = oJoyPos;
			touch2Watch = 10;
		}
	}

	function ApplyDeltaJoy(){
		switch(joystickType){
			case JoystickType.Movement:
				//troller.Move((player.forward*joyDelta.z + player.right * joyDelta.x)* playerSpeed*Time.deltaTime);
			break;
			case JoystickType.LookRotation:
				pitch -= Input.GetTouch(touch2Watch).deltaPosition.y * rotateSpeed * Time.deltaTime;
				yaw += Input.GetTouch(touch2Watch).deltaPosition.x * rotateSpeed * Time.deltaTime;
				pitch = Mathf.Clamp(pitch, -80, 80);
				playerJoy.eulerAngles += new Vector3 ( pitch, yaw, 0.0f);
			break;
			case JoystickType.SkyColor:
	   			Camera.main.backgroundColor = new Color(joyDelta.x, joyDelta.z, joyDelta.x*joyDelta.z);
	   		break;
		}
	}

	function MoveJoystick() : Vector3{
		var x : float = Input.GetTouch(touch2Watch).position.x / Screen.width;
		var y : float = Input.GetTouch(touch2Watch).position.y / Screen.height;
		//circular 
		//var position:Vector3 = Vector3.ClampMagnitude(new Vector3 (x-oJoyPos.x, y-oJoyPos.y, 0), maxjoyDelta) + oJoyPos;
		var position:Vector3 = Vector3.ClampMagnitude(new Vector3 (x-oJoyPos.x, 0, 0), maxjoyDelta) + oJoyPos;
		//cuadrado
		//var position : Vector3 = new Vector3(Mathf.Clamp(x, oJoyPos.x - maxjoyDelta, oJoyPos.x + maxjoyDelta),Mathf.Clamp(y, oJoyPos.y - maxjoyDelta, oJoyPos.y + maxjoyDelta),0);
		
		joyDelta = new Vector3(position.x - oJoyPos.x, 0, position.y - oJoyPos.y).normalized;
		
		return position;
	}

	function LateUpdate(){
	  //if(!troller.isGrounded){
	   //troller.Move(Vector3.down * 2);
	 //}
	}
}