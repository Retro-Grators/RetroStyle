var tab;
const darkMode={
	fontColor:"white",
	headingColor:"#dddddd",
	backgroundColor:"black",
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

var themes = new Map();
themes.set("dark",darkMode);
themes.set("america",americaMode);
themes.set("hacker",hackerMode);
themes.set("textoff",textOffMode);
themes.set("marquee",marqueeMode);
themes.set("starwars",starWarsMode);

var th = darkMode;

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
			}
		});
	}

	setStyles();

	
	setTimeout(() => {
		setStyles();
	}, 500)
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

document.addEventListener('DOMContentLoaded', function () {
	createBtn("Dark Mode", "dark");
	createBtn("America", "america");
	createBtn("Hacker Mode", "hacker");
	createBtn("Text Off", "textoff");
	createBtn("Marquee", "marquee");
	createBtn("Star Wars", "starwars");

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
});

