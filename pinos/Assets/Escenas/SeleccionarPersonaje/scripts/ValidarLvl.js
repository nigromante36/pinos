#pragma strict
private var unaVez : boolean=false;
@HideInInspector
public static var validaLvl2 : boolean=false;

private var puntajeMaximo:int=0;

private var casteoPuntaje : String;

private var auxiliarCasteoPuntaje : String;

private var recuperarPuntaje : int;

static var puntajeTotal : int;

//static var puntoScore : score;


function Start () {
	unaVez=false;
	validaLvl2=false;
}

function Update () {
	if(!unaVez){ 
	// tengo mi archivo xml almacenado en el interior de Activos / XmlDocs / Stock.xml 
    var filepath : String= Application.persistentDataPath + "/xmlpuntos.xml" ;
    
    // Comprobación de si existe archivo o no
    var xmlDoc: XmlDocument = new XmlDocument (); 
    	xmlDoc.Load(filepath);
           
		// ejecución de un bucle a través de todos los nodos de stock presente en nuestro xml, solo tenemos 1
        var Stock_list: XmlNodeList = xmlDoc.GetElementsByTagName("puntos");
           
		for ( var i: int = 0 ; i <Stock_list.Count; i ++)
		{
		  // Obtener nodos secundarios de valores, como ABC y XYZ en una lista
		  var StockItems_list:XmlNodeList = Stock_list.Item (i).ChildNodes;
		  // Ejecución de un bucle a través de todos los elementos presentes en las acciones
		  for ( var j: int = 0 ; j <StockItems_list.Count; j ++)  
		  {
	        // Tomar las propiedades de un elemento en una lista como de precios y cantidades
	        var StockItemsProperties_list: XmlNodeList = StockItems_list.Item (i).ChildNodes;
	        // Sabemos que Price se almacena en el elemento Oth de StockItemsProperties_list
	        casteoPuntaje += StockItemsProperties_list [0].Name + "" ;
	        // Texto interior de StockItemsProperties_list [0] (nodo Precio) Contiene el dinero
	        casteoPuntaje += StockItemsProperties_list [0].InnerText;
	        }
		}
		
		//TOMA EL VALOR DE LOS PUNTOS
		auxiliarCasteoPuntaje=casteoPuntaje;
		//HACE UN SLPIT PAARA SEPARA LOS PUNTOS DEL TEXTO
		var puntos : String[] =auxiliarCasteoPuntaje.Split("p"[0]);
		//COMBIERTE EL TEXTO EN UN INT
		recuperarPuntaje=int.Parse(puntos[1]);	
		//MUESTRA EN EL GUITEXT EL PUNTAJE OBTENIDO	
		puntajeTotal=recuperarPuntaje;

		if(recuperarPuntaje>=200 || score.puntodifi >= 200){
			validaLvl2=true;
		}
		unaVez=true;
	}
}

