// Get the elements with class="column"
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





/**Create a JavaScript object with a constructor, properties and functions **/
function DataController(isLocal){
	this.isLocalApi = isLocal;
	this.baseUrl = null;
	this.setBaseUrl();
}
DataController.prototype.setBaseUrl = function(){
	if(this.isLocalApi)
		this.baseUrl = document.baseURI;
	else
		this.baseUrl = "";

}


DataController.prototype.getProducts = function(callBackFunction){
	  var url = this.baseUrl +"store/products";
	  this.getData(url, callBackFunction);

}



DataController.prototype.getCustomersById = function(id, callBackFunction){
	  var url = this.baseUrl +"store/customers/"+id;
	  this.getData(url, callBackFunction);

}

DataController.prototype.getData = function(url, callBackFunction){
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("txt",this.responseText);
			var jsonData = JSON.parse(this.responseText);
			if(callBackFunction != null){
				callBackFunction(jsonData);
			}
		}
	  };
	  console.log("url",url);
	  xhttp.open("GET", url, true);
	  xhttp.send();
}


