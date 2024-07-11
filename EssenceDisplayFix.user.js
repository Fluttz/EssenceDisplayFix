// ==UserScript==
// @name         Essence Display Fix
// @version      1.0
// @description  Fix the Display of Essence
// @author       Flutterz
// @match        https://www.neopets.com/tvw/
// @grant        none
// ==/UserScript==

let eTrack = document.getElementById("VoidCollectionTrack");
let eImage = document.getElementsByClassName("vc-essence");
let eArrowLeft = document.getElementsByClassName("vc-arrow left");
let eArrowRight = document.getElementsByClassName("vc-arrow right");
let eBox = document.getElementsByClassName("vc-item");
let offset = 7;
let d = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
d = (Number(d.getDay())+2) % 7;
eTrack.outerHTML = eTrack.outerHTML.replace("class=\"vc-track\"","class=\"vc-track\" style=\"width:600\"");
eArrowLeft[1].outerHTML = "";
eArrowRight[1].outerHTML = "";
for (let i = offset; i < offset+7; i++){
    eImage[i].outerHTML=eImage[i].outerHTML.replace(">","style=\"width:30;height:30\">");
}

for (let i = 0; i < eBox.length; i++){
    if (i == d){
        if (eBox[i].innerText.includes("10/10")){
            eBox[i].outerHTML = eBox[i].outerHTML.replace(">","style=\"width:71;background-color:#88FF88\">");
        } else {
            eBox[i].outerHTML = "<a href=\"https://www.jellyneo.net/index.php?go=the_void_within&id=essence_collection\">" + eBox[i].outerHTML.replace(">","style=\"width:71;background-color:#FF4444\">")+ "</a>";
        }
    } else {
        eBox[i].outerHTML = eBox[i].outerHTML.replace(">","style=\"width:71\">");
    }

}
