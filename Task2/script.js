const container = document.getElementById("container");
function getcolor(){
    const colorArray = [
        "#000000",
        "#FFFFFF",
        "#C0C0C0",
        "#808080",
        "#800000",
        "#FF0000",
        "#800080",
        "#FF00FF",
        "#008000",
        "#00FF00",
        "#808000",
        "#FFFF00",
        "#000080",
        "#0000FF",
        "#008080",
        "#00FFFF",
    ];
    let colornum = Math.floor((Math.random() * 16));
    // console.log(colornum);
    let color = colorArray[colornum];
    // console.log(color);
    return color;
}

function changeColor() {
    let color = getcolor();
    // console.log(color);
     container.style.backgroundColor = color;
}
let elementNode =  document.createElement("div");
function addChild() {
        elementNode.style.border = "1px solid black";
        elementNode.style.textAlign = "center";
        elementNode.style.width = "300px";
        elementNode.style.height = "300px";
        elementNode.style.margin = "auto";
        container.appendChild(elementNode);
}
function removeChild(){
    elementNode.remove();
}

