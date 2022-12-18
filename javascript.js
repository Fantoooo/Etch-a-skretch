/*supprimer le contenu d'un tableau */
function removecontent(id){
    const container = document.querySelector(id)
    var child = container.lastElementChild;
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
}
/*créer le tableau */
function tableau(height){
    const container = document.querySelector("#container");
    removecontent("#container")
    /*permet de modifier le nombre de case en largeur tout en conservent la taille de 200px*/
    let sizecase = `${(200/height)}px`
    let widthcase = `${sizecase} `.repeat(height)
    container.setAttribute('style', `grid-template-columns:${widthcase};`)
    for (let i=0; i<height**2; i++){
        const item = document.createElement("div");
        item.classList.add("item")
        item.setAttribute('style', `height:${sizecase}; width: ${sizecase};`)
        container.append(item)
        console.log(i+1)
        item.addEventListener('mouseover', () => item.style.backgroundColor='grey');
    };
}
tableau(10)
/*changer la taille du tableau*/
const changeheight = document.querySelector('#changewidtheight');
changeheight.addEventListener('click', () => {
    height = Number(prompt("new width :"))
    tableau(height)
})