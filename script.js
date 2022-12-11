// DVD screensaver by Kristóf Fekete
document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");
  class Image{
	  constructor(url, width, height){
		this.url = url;
		this.width = width;
		this.height = height;
		const img = document.createElement("img");
		img.src = url;
		img.width = this.width;
		img.height = this.height;
		img.style.position = 'absolute';
		img.left = 0;
		img.top = 0;
		img.id = 'dvd-svg';
		document.body.appendChild(img);
		this.imgMovement();
	  }
	  
	  imgMovement(){
		let posX = 0, posY = 0, width = this.width, height = this.height;
		let dir = 'br';
		let started = false;
		let cornercounter = 0;
		let kep = document.getElementById('dvd-svg');

		setInterval(function(){
			let screenX = window.innerWidth, screenY = window.innerHeight;
			let display = document.createElement("pre");//"<div><b>X: "+posX+' Y: '+posY+'<br />innerWidth: '+screenX+' innerHeight: '+screenY+' direction: '+dir+'</b></div>';
			display.style.fontSize = '16px';
			display.style.fontFamily = 'Lucida Console';
			display.id = 'display';
			display.textContent = "X: "+posX+' Y: '+posY+'\nInnerWidth: '+screenX+'\nInnerHeight: '+screenY+'\nDirection: '+dir+'\nCorner touches: '+ cornercounter;
			if((posX == 0 && posY == 0) || (posX+width == screenX && posY == 0)
			|| (posX == 0 && posY+height == screenY) || (posX+width == screenX &&posY+height == screenY)){
				cornercounter++;
			}

			if(started == false){
				document.getElementById('body').appendChild(display);
				document.getElementById('display').style.display = 'none';
				started = true;
			}else{
				document.getElementById('display').textContent = "X: "+posX+' Y: '+posY+'\nInnerWidth: '+screenX+'\nInnerHeight: '+screenY+'\nDirection: '+dir+'\nCorner touches: '+ cornercounter;
			}
			//console.log(display);
			switch(dir){
				case 'br':
					posX += 5, posY += 5;
					break;
				case 'tr':
					posX += 5, posY += -5;
					break;
				case 'tl':
					posX += -5, posY -= 5;
					break;
				case 'bl':
					posX += -5, posY += 5;
			}

			if(posY <= 0){
				if(dir == 'tl'){
					dir = 'bl';
				}else if(dir == 'tr'){
					dir = 'br';
				}
				changeColorIMG();
			}else if(posY+height >= screenY){
				if(dir == 'bl'){
					dir = 'tl';
				}else if(dir == 'br'){
					dir = 'tr';
					
				}
				changeColorIMG();
			}
			else if(posX <= 0){
				if(dir == 'bl'){
					dir = 'br';
				}else if(dir == 'tl'){
					dir = 'tr';
				}
				changeColorIMG();
			}else if(posX+width >= screenX){
				if(dir == 'tr'){
					dir = 'tl';
				}else if(dir == 'br'){
					dir = 'bl';
				}
				changeColorIMG();
			}

			// 16 predefined colors
			function changeColorIMG(){
				let colors = [['invert(35%) sepia(93%) saturate(6926%) hue-rotate(339deg) brightness(101%) contrast(101%)'],
				['invert(11%) sepia(94%) saturate(7127%) hue-rotate(334deg) brightness(96%) contrast(101%)'],
				['invert(21%) sepia(77%) saturate(6993%) hue-rotate(288deg) brightness(98%) contrast(129%)'],
				['invert(16%) sepia(97%) saturate(7220%) hue-rotate(262deg) brightness(100%) contrast(103%)'],
				['invert(35%) sepia(52%) saturate(6937%) hue-rotate(227deg) brightness(101%) contrast(99%)'],
				['invert(50%) sepia(92%) saturate(4798%) hue-rotate(208deg) brightness(103%) contrast(102%)'],
				['invert(52%) sepia(67%) saturate(2697%) hue-rotate(167deg) brightness(102%) contrast(102%)'],
				['invert(71%) sepia(73%) saturate(2462%) hue-rotate(140deg) brightness(102%) contrast(107%)'],
				['invert(69%) sepia(97%) saturate(399%) hue-rotate(105deg) brightness(97%) contrast(88%)'],
				['invert(64%) sepia(52%) saturate(2163%) hue-rotate(103deg) brightness(98%) contrast(106%)'],
				['invert(72%) sepia(90%) saturate(806%) hue-rotate(40deg) brightness(105%) contrast(107%)'],
				['invert(99%) sepia(84%) saturate(7148%) hue-rotate(15deg) brightness(101%) contrast(106%)'],
				['invert(94%) sepia(13%) saturate(5054%) hue-rotate(356deg) brightness(103%) contrast(107%)'],
				['invert(84%) sepia(49%) saturate(6315%) hue-rotate(11deg) brightness(111%) contrast(118%)'],
				['invert(59%) sepia(11%) saturate(6197%) hue-rotate(359deg) brightness(103%) contrast(107%)'],
				['invert(32%) sepia(67%) saturate(3108%) hue-rotate(358deg) brightness(99%) contrast(114%)']]
				let svg = document.getElementById("dvd-svg");
				let randomColor = Math.floor(Math.random() * 16) + 1;
				//console.log(randomColor);
				svg.style.filter = `${colors[randomColor]}`;
			}

			kep.style.left = posX+'px';
			kep.style.top = posY+'px';
		}, 1);
	}
  }
  document.getElementById('togglebutton').addEventListener("click",function(){
	let display = document.getElementById('display');
	if(display.style.display != 'none') display.style.display = 'none';
	else display.style.display = 'block';
  })

  var img = new Image("08dvdlogo-.svg", 350, 200);
  
});