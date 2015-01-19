//var btn = new Object();
//	btn.text = "_cenasNinja";
//alert(fieldNameElement);
//fieldNameElement.innerHTML = btn.text;
//	$("btnSubmit").css("color","red");
//fieldNameElement.setAttribute('style', 'color: white !important');
//fieldNameElement.style.;
//document.getElementById(id).style.property=new style
//setStyle();


	/*MENU LABELS*/
	var menuItems_arr = document.getElementsByClassName('menu-items');
	var menuLabel = document.getElementById('menuLabel');
	var numberMenuElements_nbr = menuItems_arr.length;

	//DARK OR LIGHT THEMES


	var setMenuAndLabelsColor = function(_colorTheme){
		if(_colorTheme == "dark"){
			for (var i = 0; i < numberMenuElements_nbr; i++) {
			 	
			 	var field = menuItems_arr[i];
			 	field.setAttribute('style', 'color: #282828  !important');
			 };
			 var menu = document.getElementById('navmenu');
			 menu.setAttribute('style','background-color: #F4F4F4 !important');

			 menuLabel.setAttribute('style', 'color: #282828  !important');
		}else{
			for (var i = 0; i < numberMenuElements_nbr; i++) {
			 	
			 	var field = menuItems_arr[i];
			 	field.setAttribute('style', 'color: white !important');
			 };
			 var menu = document.getElementById('navmenu');
			 menu.setAttribute('style','background-color: #282828 !important');

			 menuLabel.setAttribute('style', 'color: white !important');
		}
	};

	var setThemeColor = function (_colorTheme){
		//body ...
		var btnS = document.getElementById('imageButtonSubmit');
		var btnB = document.getElementById('imageButtonBack');
		btnS.setAttribute('style', 'display: none');
		btnB.setAttribute('style', 'display: none');

		if(_colorTheme == "dark"){
			var backColor = document.getElementById('background');
			backColor.setAttribute('style', 'background: #282828 !important');
			setMenuAndLabelsColor(_colorTheme);
		}else{
			var backColor = document.getElementById('background');
			backColor.setAttribute('style', 'background: white !important');
			setMenuAndLabelsColor(_colorTheme);
		}	
	}

//SET INVISIBLE COMPONENTES

	/*var setBtnSubmitInvisible = function(){
		
		var btnS = document.getElementById('imageButtonSubmit');
		btnS.setAttribute('style', 'display: none !important');
		btnS.setAttribute('style', 'visibility: hidden !important');


		var btnS = document.getElementById('btnSubmit');
		btnS.setAttribute('style', 'display: none !important');
		btnS.setAttribute('style', 'visibility: hidden !important');
	};
	var setBtnMiddleInvisible = function(){

		var btnM = document.getElementById('btnCenter');
		btnM.setAttribute('style', 'display: none !important');
		btnM.setAttribute('style', 'visibility: hidden !important');
	};
	var setBtnBackInvisible = function(){
		var btnB = document.getElementById('imageButtonBack');
		btnB.setAttribute('style', 'display: none !important');
		btnB.setAttribute('style', 'visibility: hidden !important');


		var btnB = document.getElementById('btnLeft');
		btnB.setAttribute('style', 'display: none !important');
		btnB.setAttribute('style', 'visibility: hidden !important');

	};
	var setTopLabelInvisible = function(){

		var topLabel = document.getElementById('labelTop');
		topLabel.setAttribute('style', 'display: none !important');
		topLabel.setAttribute('style', 'visibility: hidden !important');
	};

	var setAllComponentesInvisible = function(){
		setBtnSubmitInvisible();
		setBtnMiddleInvisible();
		setBtnBackInvisible();
		setTopLabelInvisible();
	}*/

//SET VISIBLE COMPONENTS

	var setBtnSubmitVisible = function(_colorTheme, _text){

		var btnS = document.getElementById('imageButtonSubmit');
		var btnText = document.getElementById('btnSubmit');
		btnText.innerHTML = _text;

		switch (_colorTheme){
		case "dark":	
			btnS.setAttribute('style', 'content : url("./img/btn_submit_light.png") !important');
			btnText.setAttribute('style', 'color: white !important');
			break;
		case "light":
			btnS.setAttribute('style', 'content : url("./img/btn_submit_dark.png") !important');
			btnText.setAttribute('style', 'color: #282828 !important');
			break;
		}
	};

	var setBtnMiddleVisible = function(_colorTheme, _text){

		var btnM = document.getElementById('btnCenter');
		btnM.innerHTML = _text;

		switch (_colorTheme){
		case "dark":	
			btnM.setAttribute('style', 'color: white !important');
			break;
		case "light":
			btnM.setAttribute('style', 'color: #282828 !important');
			break;
		}
	};

	var setBtnBackVisible = function(_colorTheme, _text){
		
		var btnS = document.getElementById('imageButtonBack');
		var btnText = document.getElementById('btnLeft');
		btnText.innerHTML = _text;

		switch (_colorTheme){
		case "dark":	
			btnS.setAttribute('style', 'content : url("./img/btn_back_light.png") !important');
			btnText.setAttribute('style', 'color: white !important');
			break;
		case "light":
			btnS.setAttribute('style', 'content : url("./img/btn_back_dark.png") !important');
			btnText.setAttribute('style', 'color: #282828 !important');
			break;
		}
	};
	var setTopLabelVisible = function(_colorTheme, _text){

		var labelTop = document.getElementById('labelTop');
		labelTop.innerHTML = _text;

		switch (_colorTheme){
		case "dark":	
			labelTop.setAttribute('style', 'color: white !important');
			break;
		case "light":
			labelTop.setAttribute('style', 'color: #282828 !important');
			break;
		}

	};

	var setAllComponentesVisible = function(_colorTheme, _textBtnS, _textBtnM, _textBtnB, _textTopLabel){
		setBtnSubmitVisible(_colorTheme, _textBtnS);
		setBtnMiddleVisible(_colorTheme, _textBtnM);
		setBtnBackVisible(_colorTheme, _textBtnB);
		setTopLabelVisible(_colorTheme, _textTopLabel);
	};


//default theme = dark

setThemeColor("dark");