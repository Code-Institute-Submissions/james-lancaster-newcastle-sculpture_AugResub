document.getElementById("quiz-form").onsubmit=function(){
       articulated = parseInt(document.querySelector('input[name = "articulated"]:checked').value),
	   hume = parseInt(document.querySelector('input[name = "hume"]:checked').value),
	   river = parseInt(document.querySelector('input[name = "river"]:checked').value),
	   god = parseInt(document.querySelector('input[name = "god"]:checked').value),
	   	   
	   result = (articulated + hume + river + god),
	   
	document.getElementById("grade").innerHTML = result

return false;
};
