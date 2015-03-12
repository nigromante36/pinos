#pragma strict

function Start () {
	WriteToXmlFile();
}

function Update () {

}

function WriteToXmlFile ()
{	
	// Comprobar si asignamos xml del Inspector
	var filepath : String= Application.persistentDataPath + "/xmlpuntos.xml" ;
	
	// Crear un nuevo XmlDocument
	var  xmlDoc:XmlDocument  = new XmlDocument ();  
       
    //valida si el archivo existe     
    if (!File.Exists (filepath))
    {  
		var elmRoot:XmlElement  = xmlDoc.CreateElement ( "puntos" );
		xmlDoc.AppendChild(elmRoot);

		var  elmNew:XmlElement  = xmlDoc.CreateElement ( "puntaje" );
		var ItemName :XmlElement  = xmlDoc.CreateElement ("p");
		ItemName.InnerText="0";
		
		elmRoot.AppendChild(elmNew);
		elmNew.AppendChild(ItemName);
		
		xmlDoc.Save (filepath);
   }
}