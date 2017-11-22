function addText()
{
    document.getElementById('right').innerHTML = document.getElementById('myText').value;
	
}
// var txt = document.getElementById('myText');

// txt.onkeyup = txt.onkeypress = function(){
    // document.getElementById('bod').innerHTML = this.value;
// }

/*var css1 = document.getElementById('myCSS');
css1.onkeyup = css1.onkeypress = function addcss(css1){
    
	
	var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css1));
    
    head.appendChild(s);
	document.getElementsByTagName('style')[0].innerHTML = this.value;;
 }*/
 function addNewStyleSheetByFullCSS(innerCSS,w){ 
var win=w||window; 
  var h=win.document.getElementsByTagName("head");if(!h.length)return; 
  var newStyleSheet=document.createElement("style"); 
  newStyleSheet.type="text/css"; 
  h[0].appendChild(newStyleSheet); 
  try{ 
    newStyleSheet.styleSheet.cssText=innerCSS; 
  }catch(e){try{ 
    newStyleSheet.appendChild(document.createTextNode(innerCSS)); 
    newStyleSheet.innerHTML=innerCSS; 
  }catch(e){}} 
} 
function update_frameCSS(){ 
var css = document.getElementById("myCSS").value; 
var frameRef=top.frames[0]; 
addNewStyleSheetByFullCSS(css,frameRef); 

} 

 function addNewJS(innerJS,w){ 
var win=w||window; 
  var h=win.document.getElementsByTagName("head");if(!h.length)return; 
  var newScript=document.createElement("script"); 
  newScript.type="text/javascript"; 
  h[0].appendChild(newScript); 
  try{ 
    newScript.script.jsText=innerJS;
  }catch(e){try{ 
    newScript.appendChild(document.createTextNode(innerJS)); 
    newScript.innerHTML=innerJS; 
  }catch(e){}} 
} 
function update_frameJS(){ 
var js = document.getElementById("myJS").value; 
var frameRef=top.frames[0]; 
addNewJS(js,frameRef); 

} 
var toggle = document.getElementById("toggle");
var clicked = false;
var right = document.getElementById("right");
var container = document.getElementById("container");
toggle.addEventListener("click",function(){
	if(!clicked){
		toggle.className= "toggle_active";
		container.style.display="none";
		right.className = "fullwidth";
		clicked=true;
	}else{
		toggle.className= "";
		right.className = "";
		container.style.display="block";
		clicked=false;
	}
	
});





