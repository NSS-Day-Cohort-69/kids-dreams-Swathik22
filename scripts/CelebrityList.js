import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li 
                    data-id="${star.id}" 
                    data-type="celebrity"
                    data-name="${star.name}"
                    data-sport="${star.sport}"
                    id="star--${star.id}">
                    ${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click",(celebrityClickEvent)=>{
    const celebrityElement=celebrityClickEvent.target;
    if(celebrityElement.dataset.type==="celebrity"){
        window.alert(`${celebrityElement.dataset.name} is a ${celebrityElement.dataset.sport}`)
    }

})