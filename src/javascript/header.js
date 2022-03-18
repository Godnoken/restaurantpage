function createHeader() {
    const container = document.createElement("header");
    const nav = document.createElement("nav");
    const menuTab = document.createElement("a");
    const todayTab = document.createElement("a");
    const aboutTab = document.createElement("a");
    const separator1 = document.createElement("div");
    const separator2 = document.createElement("div");

    menuTab.textContent = "Meny";
    todayTab.textContent = "Dagens";
    aboutTab.textContent = "Om oss";

    container.classList.add("headerContainer");
    nav.classList.add("headerNav");
    menuTab.classList.add("headerTab");
    todayTab.classList.add("headerTab");
    aboutTab.classList.add("headerTab");
    separator1.classList.add("headerSeparator");
    separator2.classList.add("headerSeparator");

    container.appendChild(nav);
    nav.appendChild(menuTab);
    nav.appendChild(separator1);
    nav.appendChild(todayTab);
    nav.appendChild(separator2);
    nav.appendChild(aboutTab);

    return container;
}

export default createHeader;