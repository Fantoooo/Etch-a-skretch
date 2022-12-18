/*créer le tableau */
let height = 10;

const container = document.querySelector("#container");

for (let i=0; i<height**2; i++){
    const item = document.createElement("div");
    item.classList.add("item")
    container.append(item)
    item.addEventListener('mouseover', () => item.style.backgroundColor='grey');
};


/*changer la taille du tableau*/
const changeheight = document.querySelector('#changewidtheight');
changeheight.addEventListener('click', () => {
    height = Number(prompt("new width :"))
    alert(height)
})