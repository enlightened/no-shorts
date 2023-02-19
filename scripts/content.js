document.addEventListener("DOMSubtreeModified", function(event){

    const mini = document.querySelector("#items > ytd-mini-guide-entry-renderer:nth-child(2)")
    if (mini) {
        mini.style.display = "none"
    }
    const btn = document.querySelector("#items > ytd-guide-entry-renderer:nth-child(2)")
    if (btn) {
        btn.style.display = "none"
    }
    const videos = document.querySelector("#contents > ytd-rich-section-renderer")
    if (videos) {
        videos.style.display = "none"
    }

    if (document.location.href.includes("shorts")) {
        (async () => {
            await chrome.runtime.sendMessage({greeting: "shorts"});
          })();
    }
    if (!(mini || btn || videos)) {
        document.removeEventListener("DOMSubtreeModified", function(event) {})
    }
});
