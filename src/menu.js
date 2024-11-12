import picture1 from './picture1.jpg'
import picture2 from './picture2.jpg'

export function createMenuTab(){
    const contentDiv = document.createElement("div");
    contentDiv.id="menu-content";

const image1 = document.createElement("img");
image1.src = picture1;
contentDiv.appendChild(image1);

const paragraph1 = document.createElement("p");
paragraph1.textContent=("Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem natus atque neque quisquam aspernatur ad cumque dignissimos, asperiores quae perspiciatis sapiente, impedit corporis delectus rerum ipsam, odio qui! Itaque!")
contentDiv.appendChild(paragraph1);

const image2 = document.createElement("img");
image2.src = picture2;
contentDiv.appendChild(image2);

const paragraph2=document.createElement("p");
paragraph2.textContent=("Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem natus atque neque quisquam aspernatur ad cumque dignissimos, asperiores quae perspiciatis sapiente, impedit corporis delectus rerum ipsam, odio qui! Itaque!")
contentDiv.appendChild(paragraph2);

return contentDiv;
}