#pragma strict
import MonoBehaviour;
public class logicaJoystick extends MonoBehaviour{
	public static var currTouch : int = 0;
	private var ray : Ray;
	private var rayHitInf : RaycastHit = new RaycastHit();
	@HideInInspector
	public static var touch2Watch : int  = 10;

	function Start () {

	}

	function Update () {
		if(Input.touches.Length<=0){
			this.SendMessage("OnTouchEndedAnyWhere");
		}else{
			for(var i = 0; i < Input.touchCount; i++){
				currTouch = i;
				if(this.guiTexture != null && (this.guiTexture.HitTest(Input.GetTouch(i).position))){
					
					if(this.name.Equals("Joystick")){
						if(Input.GetTouch(i).phase == TouchPhase.Began){
							this.SendMessage("OnTouchBegan");
						}
						if(Input.GetTouch(i).phase == TouchPhase.Ended){
							this.SendMessage("OnTouchEnded");
						}
						if(Input.GetTouch(i).phase == TouchPhase.Moved){
							this.SendMessage("OnTouchMoved");
						}
						if(Input.GetTouch(i).phase == TouchPhase.Stationary){
							this.SendMessage("OnTouchStayed");
						}
						
						ray = Camera.main.ScreenPointToRay(Input.GetTouch(i).position);
						switch(Input.GetTouch(i).phase){
							case TouchPhase.Began:
								this.SendMessage("OnTouchBeganAnyWhere");
								if(Physics.Raycast(ray, rayHitInf)){
									//rayHitInf.transform.gameObject.SendMessage("OnTouchBegan3D");
								}
							break;
							case TouchPhase.Ended:
								this.SendMessage("OnTouchEndedAnyWhere");
								if(Physics.Raycast(ray, rayHitInf)){
									//rayHitInf.transform.gameObject.SendMessage("OnTouchEnded3D");
								}
							break;
							case TouchPhase.Moved:
								this.SendMessage("OnTouchMovedAnyWhere");
								if(Physics.Raycast(ray, rayHitInf)){
									//rayHitInf.transform.gameObject.SendMessage("OnTouchMoved3D");
								}
							break;
							case TouchPhase.Stationary:
								this.SendMessage("OnTouchStayedAnyWhere");
								if(Physics.Raycast(ray, rayHitInf)){
									//rayHitInf.transform.gameObject.SendMessage("OnTouchStayed3D");
								}
							break;
						}
					}else{
						this.SendMessage("OnTouchEndedAnyWhere");
					}
				}
			}
		}
	}
}