var isLoaded = false;

type Level = "25%" | "50%" | "75%" | "100%";

/**
 * Get any html element by id
 * 
 * @param id the target id to get
 * @returns the HTML element
 */
function get(id : string){
    if (isLoaded){
        let element = document.getElementById(id);
        
        if (element){
            return element;
        } else {
            console.error(`Element not found: ${id}.`)
        }
    }
}

function addSkill(skillName : string, skillLevel : Level, targetId : string){

    let target = get(targetId);
    let skill : string = `<div class="skill">
                            <h4 class="name">${skillName}</h4>
                            <div class="lvls">
                                <div class="lvl">
                                    <span class="${
                                        skillLevel === "25%" ? "percent-75" : "percent-100"
                                    }"></span>
                                </div>
                                <div class="lvl">
                                    <span class="${
                                        skillLevel === "50%" ? "percent-75" :
                                        skillLevel === "75%" ? "percent-100" :
                                        skillLevel === "100%" ? "percent-100" : ""
                                    }"></span>
                                </div>
                                <div class="lvl">
                                    <span class="${
                                        skillLevel === "100%" ? "percent-100" :
                                        skillLevel === "75%" ? "percent-75" : ""
                                    }"></span>
                                </div>
                            </div>
                        </div>`;
    if (target){
        target.innerHTML += skill;
    } else {
        console.error(`Error: ${targetId} target not found.`);
    }
    
}

function redirect(url: string){
    window.open(url, "_blank");
}

window.onload = ()=>{

    console.log('loaded');
    isLoaded = true;

    const showMore = get("showMore");
    const showMoreText = get("showMoreText");
    const project01 = get("project01");
    const project02 = get("project02");
    const project03 = get("project03");
    const project04 = get("project04");

    addSkill("JavaScript", "75%", "skillTarget");
    addSkill("NextJS", "75%", "skillTarget");
    addSkill("TypeScript", "50%", "skillTarget");
    addSkill("CSS 3", "75%", "skillTarget");
    addSkill("HTML 5", "75%", "skillTarget");

    if (project01){
        project01.addEventListener('click', () => redirect(""));
    }
    if (project02){
        project02.addEventListener('click', () => redirect(""));
    }
    if (project03){
        project03.addEventListener('click', () => redirect(""));
    }
    if (project04){
        project04.addEventListener('click', () => redirect(""));
    }
    
    if (showMore){
        showMore.addEventListener('click', ()=>{
            if (showMoreText){
                let isHidden = showMoreText.classList.contains("hidden");
                if (isHidden) {
                    showMoreText.classList.remove("hidden");
                    showMore.innerText = "Mostrar menos";
                } else {
                    showMoreText.classList.add("hidden");
                    showMore.innerText = "Mostrar mais"
                }
            }
        })
    }
}