import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" 
                     data-type="child" 
                     data-name="${child.name}" 
                     data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click",(kidClickEvent)=>{
    const kidElement=kidClickEvent.target;
    if(kidElement.dataset.type==="child"){
        window.alert(`${kidElement.dataset.name} wish is ${kidElement.dataset.wish}`)
    }
})

