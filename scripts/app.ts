/**
 * 
 * Store boolean value if the page is loaded or not.
 * 
 * Default value is false because he is changed when page load on window.onload event.
 * 
 */
var isLoaded = false;
const lang = "PT-BR";

/**
 * 
 * Text constants to store all text values from the page and respective targets ids.
 * 
 * Positive side: easy maintenance and clean.
 * Negative side: bad SEO, no text in HTML.
 * 
 */
const VALUES = {
    name: {
        text: "Jander Gois",
        target: () => get("name")
    },
    office: {
        text: {
            ptBR: "Desenvolvedor Frontend",
            enUS: "Frontend Developer"
        },
        target: () => get("office")
    },
    about: {
        text: {
            ptBR: "Sobre mim",
            enUS: "About me"
        },
        target: () => get("about")
    },
    aboutText: {
        text: {
            ptBR: "Aperfeiçoando meus conhecimentos em NextJs e React Native, contribuindo em projetos de terceiros e buscando bom aproveitamento na universidade.",
            enUS: "Improving my knowledge in NextJs and React Native, contributing to third-party projects and seeking good results at university."
        },
        target: () => get("aboutText")
    },
    currentContributing: {
        text: {
            ptBR: "Contribuição atual: Desenvolvimento de aplicativo mobile para disponibilizar serviços e informações ao usuário, usando React Native.",
            enUS: "Current contribution: Development of a mobile application to provide services and information to the user, using React Native."
        },
        target: () => get("currentContributing")
    },
    otherProjects: {
        text: {
            ptBR: "Outros Projetos",
            enUS: "Other Projects"
        },
        target: () => get("otherProjects")
    },
    otherProject1: {
        text: {
            ptBR: "Aperfeiçoamento e implementação de funcionalidades em interface web com NextJs.",
            enUS: ""
        },
        target: () => get("otherProject1")
    },
    otherProject2: {
        text: {
            ptBR: "Desenvolvimento de framework que facilita a criação de interfaces desktop híbridas usando ElectronJs.",
            enUS: ""
        },
        target: () => get("otherProject2")
    },
    otherProject3: {
        text: {
            ptBR: "Desenvolvimento de aplicação desktop para gerenciamento de atividades comerciais ERP usando PyQt5.",
            enUS: ""
        },
        target: () => get("otherProject3")
    },
    showMore: {
        text: {
            ptBR: "Mostrar mais",
            enUS: "Show more"
        },
        target: () => get("showMore")
    },
    mySkills: {
        text: {
            ptBR: "Minhas habilidades",
            enUS: "My Skills"
        },
        target: () => "mySkills"
    }
}
const LINKS = {
    gitHub: {
        href: "https://github.com/EuJanderGois",
        target: () => get("github")
    },
    linkedin: {
        href: "https://www.linkedin.com/in/eujandergois/",
        target: () => get("linkedin")
    },
    whatsapp: {
        href: "https://api.whatsapp.com/send?phone=5543999789347&text=Ol%C3%A1,%20visitei%20seu%20portif%C3%B3lio!",
        target: () => get("whatsapp")
    }
}

const ERRORS = {
    langError: "Language not found.",
    conditionalError: "Conditional Error"
}

type Level = "25%" | "50%" | "75%" | "100%";
type Language = "PT-BR" | "EN-US";
type TextProp = {
    ptBR : string;
    enUS : string;
}

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

function setText(target: HTMLElement, text : TextProp, lang : Language){
    let value;

    if (lang === "PT-BR") {
        value = text.ptBR;
    } else if (lang === "EN-US") {
        value = text.enUS;
    } else {
        value = ERRORS.langError;
    }

    if (target) {
        target.innerHTML = value;
    }
}

function injectContent() {

    /**
     * NAME
     */
    (function() {
        let target = VALUES.name.target();
        let text = VALUES.name.text;
        if (target) {
            setText(target, {enUS: text, ptBR: text}, lang)
        }
    })();

    /**
     * OFFICE
     */
    (function() {
        let target = VALUES.office.target();
        let text = VALUES.office.text;
        if (target) {
            setText(target, {enUS: text.enUS, ptBR: text.ptBR}, lang)
        }
    })();

    /**
     * ABOUT
     */
    (function() {
        let target = VALUES.about.target();
        let text = VALUES.about.text;
        if (target) {
            setText(target, {enUS: text.enUS, ptBR: text.ptBR}, lang)
        }
    })();

    /**
     * ABOUT TEXT
     */
    (function() {
        let target = VALUES.aboutText.target();
        let text = VALUES.aboutText.text;
        if (target) {
            setText(target, {enUS: text.enUS, ptBR: text.ptBR}, lang)
        }
    })();
}

window.onload = ()=>{

    console.log('loaded');
    isLoaded = true;

    injectContent();

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