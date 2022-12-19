/*supprimer le contenu d'un tableau */
function removecontent(id){
    const container = document.querySelector(id)
    var child = container.lastElementChild;
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
}
/*changer la couleur */
const changecolor = document.querySelector('#changecolor');
const showcolor = document.querySelector('#showcolor')
let actualcolor = 'grey'
changecolor.addEventListener('click', () => {
    color = prompt("new color : (must be a color in english and javascript friendly)")
    showcolor.setAttribute('style', `background-color:${color}; box-shadow:0px 0px 45px 2px ${color};`)
    actualcolor = color
})
/*récupere la couleur actuelle */
function getactualcolor(){
    let randomlist = ["red","blue","green","darkblue","darkgreen","darkred","aqua"]
    if(actualcolor == 'random'){return randomlist[Math.floor(Math.random()*randomlist.length)]}
    if(actualcolor == 'eraser'){return 'white'}
    return actualcolor
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
        item.addEventListener('mouseover', () => item.style.backgroundColor=getactualcolor());
    };
}
/*différents modes de couleur*/
/*1. rainbow mode */
const rainbowcolor = document.querySelector('#rainbow')
rainbowcolor.addEventListener('click', () => {
    actualcolor = 'random'
})
/*2. eraser mode */
const erasermode = document.querySelector('#eraser')
erasermode.addEventListener('click', () => {
    actualcolor = 'eraser'
})

/*initialise le tableau*/
tableau(10)



/*changer la taille du tableau*/
const changeheight = document.querySelector('#changewidtheight');
changeheight.addEventListener('click', () => {
    height = Number(prompt("new width :"))
    tableau(height)
})