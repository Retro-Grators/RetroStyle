var tab;
var darkMode={
	font:"",
	fontColor:"white",
	headingFont:"",
	headingColor:"#dddddd",
	backgroundColor:"black",
};
var americaMode={
	font:"",
	fontColor:"darkblue",
	headingFont:"",
	headingColor:"darkred",
	backgroundColor:"white",
};

var themes = new Map();
themes.set("dark",darkMode);
themes.set("america",americaMode);

var th = darkMode;

function changeTheme () {
	function setStyles(element){
		const headerTags = ["H1","H2","H3","H4", "H5", "H6"]
		Array.prototype.forEach.call(document.getElementsByTagName('*'), element => {
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

document.addEventListener('DOMContentLoaded', function () {
	//onclick for the button
	Array.prototype.forEach.call(document.getElementsByClassName('btn'), element => {
		console.log(element)
			element.addEventListener('click', () => {
				//get the current tab
				chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
					tab = tabs[0]

					getThemeChanger(tab, themes.get(element.id))
				})
			})
	});
});

