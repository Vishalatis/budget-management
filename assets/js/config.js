! function() {
    var t = sessionStorage.getItem("__TAPLOX_CONFIG__"),
        e = document.getElementsByTagName("html")[0],
        i = {
            theme: "light",
            topbar: {
                color: "light"
            },
            menu: {
                size: "default",
                color: "light"
            }
        };
    this.html = document.getElementsByTagName("html")[0], config = Object.assign(JSON.parse(JSON.stringify(i)), {}), config.theme = e.getAttribute("data-bs-theme") || i.theme, config.topbar.color = e.getAttribute("data-topbar-color") || i.topbar.color, config.menu.color = e.getAttribute("data-sidebar-color") || i.menu.color, config.menu.size = e.getAttribute("data-sidebar-size") || i.menu.size, window.defaultConfig = JSON.parse(JSON.stringify(config)), null !== t && (config = JSON.parse(t)), window.config = config, config && (e.setAttribute("data-bs-theme", config.theme), e.setAttribute("data-topbar-color", config.topbar.color), e.setAttribute("data-sidebar-color", config.menu.color), window.innerWidth <= 1140 ? e.setAttribute("data-sidebar-size", "hidden") : e.setAttribute("data-sidebar-size", config.menu.size))
}();