
import "./styles.css";
console.log("Hello")

import { createHomeTab } from './home.js';
import { createMenuTab } from './menu.js';


const homeButton=document.querySelector("button:nth-child(1)")
const menuButton=document.querySelector("button:nth-child(2)")

const contentDiv=document.getElementById("content");

function switchTab(createTabfunction){
    contentDiv.innerHTML="";
    const newTabContent=createTabfunction();
    contentDiv.appendChild(newTabContent);
}

homeButton.addEventListener("click", ()=>{switchTab(createHomeTab)});
menuButton.addEventListener("click",()=> switchTab(createMenuTab));