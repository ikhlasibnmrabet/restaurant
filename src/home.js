export function createHomeTab(){
    const contentDiv = document.createElement("div");
    contentDiv.id="home-content";

    const heading=document.createElement("h2");
    heading.textContent="Welcome to our restaurant!";
    contentDiv.appendChild(heading);

    const paragraph=document.createElement("p")
    paragraph.textContent="We offer the best food in town";
    contentDiv.appendChild(paragraph);

    return contentDiv
}