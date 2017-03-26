var yb = { 
  id : function(str)
  {
    return document.getElementById(str)
  } 
};

yb.id('searchbox').focus();

var tag = '';

yb.id('searchbox').onkeyup = function(e){
  // Excluding  special characters on keyboard before proceeding
	if(!e.keyCode.toString().match(/^(37|38|39|40|13|16|17|18|224)$/)){
		if(tag!==''){ document.body.removeChild(tag); }
		tag = document.createElement('script');
		var term = yb.id('searchbox').value;

		tag.src = 'http://en.wikipedia.org/w/api.php?action=opensearch&limit=10&format=json&callback=ybComplete&search='+term;
		document.body.appendChild(tag);
	}
};

var ybComplete = function(data){
	yb.id('output').innerHTML = '';
	for(var i=0; i<5; i++){
		if(data[1][i]){
			yb.id('output').innerHTML += '<p><b><a href="http://en.wikipedia.org/wiki/' + data[1][i] + '"target="_blank">'+data[1][i]+'</a></b><br>'+data[2][i]+'</p>';
		}
	}
};

