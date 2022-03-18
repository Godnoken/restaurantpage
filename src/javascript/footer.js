function createFooter() {
    const container = document.createElement("footer");
    const copyright = document.createElement("p");
    const nav = document.createElement("nav");
    const tabs = document.createElement("div");
    const links = document.createElement("div");
    const menuTab = document.createElement("a");
    const todayTab = document.createElement("a");
    const aboutTab = document.createElement("a");
    const facebookLink = document.createElement("a");
    const instagramLink = document.createElement("a");
    const separator1 = document.createElement("div");
    const separator2 = document.createElement("div");
    
    menuTab.textContent = "Meny";
    todayTab.textContent = "Dagens";
    aboutTab.textContent = "Om oss";
    facebookLink.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-1.6 20v-7H8v-3h2.5V9.9C10.4 7.3 12 6 14.2 6l2.3.2v2.4h-1.3c-1.3 0-1.6.8-1.6 1.6V12h2.7l-.3 3h-2.3v7A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z"/></svg>'
    instagramLink.innerHTML = '<svg viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8c0 2 1.6 3.6 3.6 3.6h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6c0-2-1.6-3.6-3.6-3.6H7.6m9.7 1.5a1.3 1.3 0 0 1 1.2 1.3A1.3 1.3 0 0 1 17.2 8 1.3 1.3 0 0 1 16 6.7a1.3 1.3 0 0 1 1.3-1.2M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"/></svg>';

    facebookLink.href = "https://www.facebook.com/Fenicia-2645662042127445/";
    facebookLink.target = "_blank";

    container.classList.add("footerContainer");
    copyright.classList.add("footerCopyright");
    nav.classList.add("footerNav");
    tabs.classList.add("footerTabsContainer");
    links.classList.add("footerLinksContainer");
    menuTab.classList.add("footerTab");
    todayTab.classList.add("footerTab");
    aboutTab.classList.add("footerTab");
    separator1.classList.add("footerSeparator");
    separator2.classList.add("footerSeparator");
    instagramLink.classList.add("footerLink");
    facebookLink.classList.add("footerLink");

    container.appendChild(copyright);
    container.appendChild(nav);
    nav.appendChild(links);
    nav.appendChild(tabs);
    tabs.appendChild(menuTab);
    tabs.appendChild(separator1);
    tabs.appendChild(todayTab);
    tabs.appendChild(separator2);
    tabs.appendChild(aboutTab);
    links.appendChild(facebookLink);
    links.appendChild(instagramLink);

    return container;
}

export default createFooter;