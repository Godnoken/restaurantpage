import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

function createMenu() {
    const container = document.createElement("div");
    const img = document.createElement("img");

    img.src = "https://scontent.fgrx2-1.fna.fbcdn.net/v/t1.6435-9/126255566_4134339623259672_5104808647984899242_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=8NgKRkmnNUMAX-PF2mC&tn=O9MCa9UrJ_jvL7Rb&_nc_ht=scontent.fgrx2-1.fna&oh=00_AT-kwfy3ZPelZvm8n509nkl3fgDxZwcMeVFEL1JkjbS6tw&oe=625B86D5"

    container.classList.add("menuContainer");
    img.classList.add("menuImg");

    container.appendChild(img);

    return container;
}


export default createMenu;