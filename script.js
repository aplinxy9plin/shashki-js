function start(){
	var color = "black", x = 0;
	for (var i = 0; i < 8; i++) {
		var tr = document.createElement('tr')
		for (var j = 0; j < 8; j++) {
			var td = document.createElement('td')
			if(x == 8){
				if(color == "black"){
					color = "white"
				}else{
					color = "black"
				}
				x = 0
			}
			if(color == "black"){
				color = "white"
				td.style.backgroundColor = color
			}else{
				if(i > 4){
					var img = document.createElement('img')
					img.src = "yellow.png"
					img.style.display = "block"
					img.style.margin = "0 auto"
					td.appendChild(img)
				} else if(i < 3){
					var img = document.createElement('img')
					img.src = "green.png"
					img.style.display = "block"
					img.style.margin = "0 auto"
					td.appendChild(img)
				}
				td.onclick = function () { myTd(this) }
				color = "black"
				td.style.backgroundColor = color
			}
			x++
			tr.appendChild(td)
		}
		document.getElementById('board').appendChild(tr)
	}
}
var td1, td2, count = 0;
function myTd(elem){
	count++
	switch (count){
		case 1:
			td1 = elem			
		break;
		case 2:
			td2 = elem
		break;
		default:
			td1.style.backgroundColor = "black"
			td2.style.backgroundColor = "black"
			td1 = elem
			count = 1
		break;
	}
	elem.style.backgroundColor = "orange"
}