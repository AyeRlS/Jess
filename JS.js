// ==UserScript==
// @name     Wtv
// @include  https://www.google.*/
// @version  1
// @grant    none
// ==/UserScript==

var id = "prm-pt";
var url = "https://pastebin.com/raw/N6s8C4ES";
var newHTML = document.createElement ('div');
var def = '<div style="font-size:small; margin-bottom:24px"><div style="display:inline-block; line-height: 28px">Jessy est la plus mignonne &#x1F970;</div></div>';

function getHTML(url)
{
    const req = new XMLHttpRequest();
    req.open('GET', url, false); 
    req.send();
    console.log((req.status === 200))
    if (req.status === 200) 
        return req.responseText;
    else
        return def;
}

newHTML.innerHTML = getHTML(url);
document.getElementById(id).appendChild(newHTML);
