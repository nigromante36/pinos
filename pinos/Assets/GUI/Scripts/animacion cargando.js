#pragma strict

var columns=11;
var rows=5;
var fps=15.0;

private var contador = 0;
private var cont = 0;

private var tiempo : float = 0;

function Start () {
	contador = 250;
}

function Update () {
	tiempo += Time.deltaTime;
	
	if(tiempo >4){
		Application.LoadLevel("menu_principal");
	}

	if(cont < contador){	
		var index :int=Time.time * fps;
		index = index % (columns * rows);
		var size = Vector2 (1.0 / columns, 1.0 / rows);
		var columnIndex = index % columns;
		var rowIndex = index / columns;
		var offset = Vector2 (columnIndex * size.x, 1.0 - size.y - rowIndex * size.y);
		renderer.material.SetTextureOffset("_MainTex", offset);
		renderer.material.SetTextureScale("_MainTex", size);
		cont++;
	}
}