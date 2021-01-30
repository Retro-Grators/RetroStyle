var tab;

function changeTheme (theme) {
	//document.getElementsByTagName('body')[0].style.setProperty('background-color','black')
	Array.prototype.forEach.call(document.getElementsByTagName('*'), element => {
		element.style.setProperty('background-color','black');
	})
	Array.prototype.forEach.call(document.getElementsByTagName('*'), element => {
		element.style.setProperty('color','white');
	})
}

document.addEventListener('DOMContentLoaded', function () {
	//onclick for the button
	document.getElementById('btn').addEventListener('click', () => {
		//get the current tab
		chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
			tab = tabs[0]

			//The code after 'code:' is run with the execute script, but it needs to be in string form 
			chrome.tabs.executeScript(tab.id, {code:`${changeTheme.toString().slice(32, changeTheme.toString().length-2)}`});

		})
	})
});

