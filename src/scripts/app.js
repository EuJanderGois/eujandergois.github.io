import { setIcons } from "../modules/svg_controler.mjs";
import { checkCookies, checkDefLang, getId, log } from "../modules/functions.mjs";
import { en_us } from "../languages/en_us/controler.mjs";
import { pt_br } from "../languages/pt_br/controler.mjs";

console.log('the js as init with sucess ...');

setIcons();
checkDefLang();
checkCookies();

const understand = getId("understand");
const closeIcon = getId("close_icon");
const closeApp = getId("close_app");
const cookiesModal = getId("modal");

    if(understand){
        understand.addEventListener('click', ()=>{
            cookiesModal.close();
        }, false);
    }
    if(closeIcon){
        closeIcon.addEventListener('click', ()=>{
            cookiesModal.close();
        }, false);
    }
    if(closeApp){
        closeApp.addEventListener('click', ()=>{
            window.open('', '_self', '');
        }, false);
    }

const pt_btn = getId("pt_option");
const en_btn = getId("en_option");
const l_modal = getId("l_modal");
const lang_options = getId("lang_box")

    if(lang_options){
        lang_options.addEventListener('click', (e)=>{
            e.preventDefault();
            log("clicked");
            l_modal.classList.toggle("hidden");
        }, false);
    }
    if(en_btn){
        en_btn.addEventListener('click', ()=>{
            en_us();
            l_modal.classList.add("hidden");
        }, false);
    }
    if(pt_btn){
        pt_btn.addEventListener('click', ()=>{
            pt_br();
            l_modal.classList.add("hidden");
        }, false);
    }