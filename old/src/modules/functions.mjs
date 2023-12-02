import { en_us } from "../languages/en_us/controler.mjs";
import { pt_br } from "../languages/pt_br/controler.mjs";
import config from '../settings.json' assert {type: 'json'};

/**
 * @param id_ String that specifies the ID from HTML.
 * @returns {Element} Return HTMLelement.
*/
export function getId(id= ""){
    let result = document.getElementById(id);
    return result;
}

/**
 * 
 * @param {string} tag Especify the tag envolve content
 * @param {string} content Especify the content to insert
 * @param {Element} target Especify the element target
 *  
 */
export function newHTML(tag, content, target) {

    let l_arrow = "<";
    let r_arrow = ">";
    let slash = "/";

    let l_tag = l_arrow + tag + r_arrow;
    let r_tag = l_arrow + slash + tag + r_arrow;
    let final_html = l_tag + content + r_tag;

    return target.innerHTML = final_html;
};

/**
 * 
 * @param {string} content Especify the content as be injected 
 * @param {string} target Especify the target to inject content
 *  
 */
export function newContent(content, target) {
    return target.innerText = content;
}

/**
 * @param target HTML element target.
 * @param icon String with SVG code.
 */
export function setIcon (target, icon){
    return target.innerHTML = icon;
}

export function checkDefLang() {
    if (config.default_language === "en_us") {
        log("English (US) detected ...")
        en_us();
        log("English (US) sucessfuly loaded.");
    }
    else if (config.default_language === "pt_br") {
        log("Portugues (BR) detected ...")
        pt_br();
        log("Portugues (BR) sucessfuly loaded.");
    }
    else {
        alert("critical language error, language in settings as not found (404)");
    }
}

export function checkCookies() {
    let popup = getId("modal");
    setTimeout(()=>{
        if (config.cookies === true){
          popup.showModal();
          config.cookies = false;
        }
      },5000);
}

export function log(arg){
    console.log(arg);
}