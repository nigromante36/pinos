#pragma strict
import System.Collections.Generic;
import System.Text;
import System.Xml;
import System.IO;

private var scorePartida:int =0;

public var highscore : String="highscore";

//variable que castea el puntaje recuperado 
private var casteoPuntaje : String;

private var auxiliarCasteoPuntaje : String;

//variable que recupera el puntaje recuperado 
private var recuperarPuntaje : int;

private var unavez : boolean = true;

function Start () {
	scorePartida=score.puntos;
	//PlayerPrefs.DeleteKey("recuperarPuntaje");
}

function Update () {
	if(unavez){
		ReadXml();
		unavez = false;
	}
}

function WriteToXmlFile ()
{
	var filepath : String= Application.persistentDataPath + "/xmlpuntos.xml" ;
	// Crear un nuevo XmlDocument
	var  xmlDoc:XmlDocument  = new XmlDocument ();  
       xmlDoc.Load(filepath);
    //valida si el archivo existe     
   // if (File.Exists (filepath))
   // {  
    	// carga de  Activos / XmlDocs / Stock.xml 
    	
    	//var textXML : TextAsset = Resources.Load("xmlpuntos", typeof(TextAsset));
    	//xmlDoc.LoadXml ( textXML.text );
		// Cargar el archivo XML
		// nodo común / conseguir (nodo raíz o primer nodo en el archivo xml)
		var elmRoot:XmlElement  = xmlDoc.DocumentElement;
		elmRoot.RemoveAll();

		var  elmNew:XmlElement  = xmlDoc.CreateElement ( "puntaje" ); // crear el nodo de rotación.
		// Creación de un elemento (punto) con los valores que hemos introducido en la interfaz gráfica de usuario
		var ItemName :XmlElement  = xmlDoc.CreateElement ("p");
		ItemName.InnerText=scorePartida+"";

		elmRoot.AppendChild(elmNew);
		elmNew.AppendChild(ItemName);
		xmlDoc.AppendChild(elmRoot);
		
		//var destino : String = Path.Combine(Application.dataPath, "Resources/xmlpuntos.xml");
		xmlDoc.Save(filepath);
		//xmlDoc.Save(AssetDatabase.GetAssetPath(textXML));
		//xmlDoc = null;
  // }+-

}

function ReadXml ()
{
	var filepath : String= Application.persistentDataPath + "/xmlpuntos.xml" ;
	// tengo mi archivo xml almacenado en el interior de Activos / XmlDocs / Stock.xml 
    //var filepath : String= "/storage/sdcard0/Android/data/xmlpuntos.xml" ;
    
    // Comprobación de si existe archivo o no
    var xmlDoc: XmlDocument = new XmlDocument (); 
    xmlDoc.Load(filepath);
   //var textXML : TextAsset = Resources.Load("xmlpuntos", typeof(TextAsset));
    	//xmlDoc.LoadXml ( textXML.text );
    //if (File.Exists (filepath))
    //{  
		// carga de  Activos / XmlDocs / Stock.xml 
		//xmlDoc.Load (filepath); // obtener el primer nodo xml en una lista

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
		//toma el valor
		auxiliarCasteoPuntaje=casteoPuntaje;
		
		//realiza el split al valor
		var puntos : String[] =auxiliarCasteoPuntaje.Split("p"[0]); 
		 
		//combierte el valor en int                
		recuperarPuntaje=int.Parse(puntos[1]);
		//si el puntaje jugado es mayor que el puntaje mas alto lo reemplaza
		if(scorePartida>recuperarPuntaje){
			this.guiText.text=scorePartida+"";
			WriteToXmlFile();
		}else{
			this.guiText.text=recuperarPuntaje+"";
		}
	//}
}

