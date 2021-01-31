var tab;
const darkMode={
	fontColor:"white",
	headingColor:"#dddddd",
	backgroundColor:"black",
	backgroundImage: "url(https://i.pinimg.com/originals/e9/7b/ab/e97bab7d177c3a4807c9ae8a61c799bc.jpg)"
};
const americaMode={
	fontColor:"darkblue",
	headingColor:"darkred",
	backgroundColor:"white",
};
const hackerMode={
	font:"consolas",
	fontColor:"#00ff00",
	headingColor:"#00ff00",
	backgroundColor:"black",
};
const textOffMode={
	font:"",
	fontColor:"white",
	headingFont:"",
	headingColor:"white",
	backgroundColor:"white",
};
const marqueeMode={
	font:"sans-serif",
	fontColor:"white",
	headingFont:"",
	headingColor:"red",
	backgroundColor:"black",
	marquee:"true",
	allCaps:1
};
const starWarsMode={
	font:"sans-serif",
	fontColor:"yellow",
	headingFont:"",
	headingColor:"yellow",
	backgroundColor:"black",
	marquee:"true",
	allCaps:2
};
const miamiViceMode={
	font: "Jazz LET, fantasy",
	fontColor:"#f890e7",
	headingFont:"",
	headingColor:" #f890e7",
	backgroundColor:"#0bd3d3"
};
const gatorMode={
	font: "Courier New, monospace",
	fontColor:"#ff7221",
	headingFont:"",
	headingColor:"#ff7221",
	backgroundColor:"#1a1deb"
};
const ninetiesMode={
	font: "cursive",
	fontColor:"#ff3bd1",
	headingFont:"",
	headingColor:"#19b02f",
	backgroundColor:"#8c1dd1",
	backgroundImage: 'url(https://lh3.googleusercontent.com/proxy/1syJq_8IB5sTTqnZEYbxCZRAuqQSu0m969QAY2VI3PbrA_ohsxOAMZaUZUAsn4BoLquwJcRHO2YmVdOo2rCkVm9prt3596PkUTxEr3QauR9ZGEYYT_7aIyQ)'

};

var themes = new Map();
themes.set("dark",darkMode);
themes.set("america",americaMode);
themes.set("hacker",hackerMode);
themes.set("textoff",textOffMode);
themes.set("marquee",marqueeMode);
themes.set("starwars",starWarsMode);
themes.set("miamivice",miamiViceMode);
themes.set("gator",gatorMode);
themes.set("90",ninetiesMode);




var th = darkMode;

function revertTheme () {
	document.getElementsByTagName('body')[0].outerHTML = page;
}

function changeTheme () {
	function setStyles(element){
		const headerTags = ["H1","H2","H3","H4", "H5", "H6"]
		Array.prototype.forEach.call(document.getElementsByTagName('*'), element => {
			if(!(element.tagName=="MARQUEE")){
				console.log()
				if(theme.font){
					element.style.setProperty('font-family',theme.font);
				}
				if(theme.fontColor){
					element.style.setProperty('color',theme.fontColor);
				}
				if(theme.backgroundColor){
					element.style.setProperty('background-color',theme.backgroundColor);
				}
				if(theme.headingFont && headerTags.includes(element.tagName)){
					element.style.setProperty('font-family',theme.headingFont);
				}
				if(theme.headingColor && headerTags.includes(element.tagName)){
					element.style.setProperty('color',theme.headingColor);
				}
				if((theme.allCaps===2 || (theme.allCaps===1 && headerTags.includes(element.tagName))) && (element.tagName=="P" || element.children.length<1)){
					element.innerText = element.innerText.toUpperCase();
				}
				if (theme.backgroundImage)
				{
					document.querySelector('body').style.setProperty('background-image',"url(https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX26992145.jpg)")
				}
			}
		});

	}



	setStyles();

	
	setTimeout(() => {
		setStyles();
	}, 500)
}

function reverter(tab){
	let funcStr = revertTheme.toString();
	//The code after 'code:' is run with the execute script, but it needs to be in string form 
	chrome.tabs.executeScript(tab.id, {code:`${funcStr.slice(funcStr.indexOf('{')+1, funcStr.lastIndexOf('}'))}`});
}

function setOriginalPage(tab){
	//The code after 'code:' is run with the execute script, but it needs to be in string form 
	chrome.tabs.executeScript(tab.id, {code:`var page=document.getElementsByTagName('body')[0].outerHTML;`}, function() {});
}


function getThemeChanger(tab, theme){
	let funcStr = changeTheme.toString();
	//The code after 'code:' is run with the execute script, but it needs to be in string form 
	chrome.tabs.executeScript(tab.id, {code:`var theme=${JSON.stringify(theme)};`}, function() {
		chrome.tabs.executeScript(tab.id, {code:`${funcStr.slice(funcStr.indexOf('{')+1, funcStr.lastIndexOf('}'))}`});
	});
}

function createBtn(title, theme) {
	var body = document.getElementsByTagName("body")[0]; 
	var button = document.createElement('BUTTON');
	button.innerText = title;
	button.className = "btn";
	button.id = theme;
	button.style.setProperty("background-color", themes.get(theme).backgroundColor);
	button.style.setProperty("color", themes.get(theme).fontColor);
	body.appendChild(button);
}

function createReverter() {
	var body = document.getElementsByTagName("body")[0]; 
	var button = document.createElement('BUTTON');
	button.innerText = "Revert to Normal";
	button.className = "reverter";
	body.appendChild(button);
}

document.addEventListener('DOMContentLoaded', function () {
	createBtn("Dark Mode", "dark");
	createBtn("America", "america");
	createBtn("Hacker Mode", "hacker");
	createBtn("Text Off", "textoff");	
	createBtn("Marquee", "marquee");
	createBtn("Star Wars", "starwars");
	createBtn("Miami Vice", "miamivice");
	createBtn("Gator", "gator");
	createBtn("90s", "90");
	createReverter();
	chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
		tab = tabs[0]

		setOriginalPage(tab);
	})




	//onclick for the button
	Array.prototype.forEach.call(document.getElementsByClassName('btn'), element => {
			element.addEventListener('click', () => {
				//get the current tab
				chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
					tab = tabs[0]

					getThemeChanger(tab, themes.get(element.id))
				})
			})
	});

	Array.prototype.forEach.call(document.getElementsByClassName('reverter'), element => {
		element.addEventListener('click', () => {
			//get the current tab
			chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
				tab = tabs[0]

				reverter(tab);
			})
		})
});
});

