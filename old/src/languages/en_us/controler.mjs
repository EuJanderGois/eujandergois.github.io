import language from './en_us.json' assert {type: 'json'};
import { getId, newContent, newHTML, log } from "../../modules/functions.mjs";

const header = {
    title: {
        element: getId("header_title"),
        value: language.header.title
    },
    lang: {
        element: getId("lang"),
        value: "English (US)"
    }
}
const personal = {
    title: {
        element: getId("personal_title"),
        value: language.personal.title
    },
    text: {
        element: getId("personal_text"),
        value: language.personal.text
    }
}
const tecnologies = {
    title: {
        element: getId("tecnologies_title"),
        value: language.tecnologies.title
    },
    text: {
        element: getId("tecnologies_text"),
        value: language.tecnologies.text
    }
}
const skills = {
    title: {
        element: getId("skills_title"),
        value: language.skills.title
    },
    text: {
        element: getId("skills_text"),
        value: language.skills.text
    }
}
const projects = {
    title: {
        element: getId("projects_title"),
        value: language.projects.title
    },
    text: {
        element: getId("projects_text"),
        value: language.projects.text
    }
}
const cookies = {
    text: {
        element: getId("cookies_text"),
        value: language.cookies.text
    }
}
const footer = {
    developer: {
        element: getId("footer_developer"),
        value: language.footer.developer
    },
    copyright: {
        element: getId("footer_copyright"),
        value: language.footer.copyright
    }
}
const buttons = {
    understand: {
        element: getId("understand"),
        text: language.buttons.understand
    },
    close_app: {
        element: getId("close_app"),
        text: language.buttons.close_app
    },
    read_more: {
        element: getId("read_more"),
        text: language.buttons.read_more,
        personal_read_more: getId("personal_read_more"),
        tecnologies_read_more: getId("tecnologies_read_more"),
        skills_read_more: getId("skills_read_more"),
        projects_read_more: getId("projects_read_more")
    }
}

export function en_us() {
        
    
        // HEADER
        //
        // VALUES
        let header_title_v = header.title.value;
        let header_lang_v = header.lang.element;        

        // ELEMENTS
        let header_title_e = header.title.element;
        let header_lang_e = header.lang.value;

        newHTML("a", header_title_v, header_title_e);
        newHTML("a", header_lang_e, header_lang_v);
        log("header loaded");
    
        
        // PERSONAL
        //
        // VALUES
        let personal_title_v = personal.title.value;
        let personal_text_v = personal.text.value;

        // ELEMENTS
        let personal_title_e = personal.title.element;
        let personal_text_e = personal.text.element;

        newHTML("h1", personal_title_v, personal_title_e);
        newHTML("p", personal_text_v, personal_text_e);
        log("personal info loaded...");
    
        
        // TECNOLOGIES
        //
        // VALUES
        let tecnologies_title_v = tecnologies.title.value;
        let tecnologies_text_v = tecnologies.text.value;

        // ELEMENTS
        let tecnologies_title_e = tecnologies.title.element;
        let tecnologies_text_e = tecnologies.text.element;
        
        // INJECT CONTENT
        newHTML("h1", tecnologies_title_v, tecnologies_title_e);
        newHTML("p", tecnologies_text_v, tecnologies_text_e);
        log("tecnologies info loaded...");
        
        
        // SKILLS
        //
        // VALUES
        let skills_title_v = skills.title.value;
        let skills_text_v = skills.text.value;

        // ELEMENTS
        let skills_title_e = skills.title.element;
        let skills_text_e = skills.text.element;

        // INJECT CONTENT
        newHTML("h1", skills_title_v, skills_title_e);
        newHTML("p", skills_text_v, skills_text_e);
        log("skills info loaded...");
    
        
        // PROJECTS
        //
        //VALUES
        let projects_title_v = projects.title.value;
        let projects_text_v = projects.text.value;

        // ELEMENTS
        let projects_title_e = projects.title.element;
        let projects_text_e = projects.text.element;

        // INJECT CONTENT
        newHTML("h1", projects_title_v, projects_title_e);
        newHTML("p", projects_text_v, projects_text_e);
        log("projects info loaded...");
    
        
        // COOKIES
        //
        // VALUE
        let cookies_v = cookies.text.value;

        // ELEMENTS
        let cookies_e = cookies.text.element;

        // INJECT CONTENT
        newHTML("p", cookies_v, cookies_e);
        log("cookies info loaded...");
    
        
        // FOOTER
        //
        // VALUES
        let developer_v = footer.developer.value;
        let copyright_v = footer.copyright.value;

        // ELEMENTS
        let developer_e = footer.developer.element;
        let copyright_e = footer.copyright.element;

        // INJECT CONTENT
        newHTML("p", developer_v, developer_e);
        newHTML("p", copyright_v, copyright_e);
        log("footer info loaded...");
    

        // BUTTONS
        //
        // UNDERSTAND VALUE AND ELEMENT
        let understand_v = buttons.understand.text;
        let understand_e = buttons.understand.element;
        
        // CLOSE APP VALUE AND ELEMENT
        let close_app_v = buttons.close_app.text;
        let close_app_e = buttons.close_app.element;

        // READ MORE VALUE
        let read_more_v = buttons.read_more.text;
        
        // READ MORE ELEMENTS
        let personal_read_more = buttons.read_more.personal_read_more;
        let tecnologies_read_more = buttons.read_more.tecnologies_read_more;
        let skills_read_more = buttons.read_more.skills_read_more;
        let projects_read_more = buttons.read_more.projects_read_more;

        // INEJECT VALUES ON BUTTONS
        newContent(understand_v, understand_e);
        newContent(close_app_v, close_app_e);
        newContent(read_more_v, personal_read_more);
        newContent(read_more_v, tecnologies_read_more);
        newContent(read_more_v, skills_read_more);
        newContent(read_more_v, projects_read_more);
        log("buttons info loaded...");
}