
function populateContainer(ite) {
    let cont = document.getElementById("sketch-container");
    let style = getComputedStyle(cont);

    let borderTopWidth = parseInt(style.borderTopWidth) || 0;
    let borderLeftWidth = parseInt(style.borderLeftWidth) || 0;
    let borderBottomWidth = parseInt(style.borderBottomWidth) || 0;
    let borderRightWidth = parseInt(style.borderRightWidth) || 0;   

    let contWidth = cont.offsetWidth - borderTopWidth - borderBottomWidth;
    let contHeight = cont.offsetHeight - borderRightWidth - borderLeftWidth;

    for (i = 0; i < ite; i++) {
        for (j = 0; j < ite; j++) {
            var div = document.createElement("div");
            let divStyle = getComputedStyle(cont);
            div.style.width = (contWidth/ite).toString().concat("px");
            div.style.height = (contHeight/ite).toString().concat("px");
            div.addEventListener("mouseover", colorDiv);
            cont.appendChild(div);
        }
    }


}

function colorDiv() {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;  
}

populateContainer(16);