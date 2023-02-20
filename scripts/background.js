chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting === "shorts")
            chrome.tabs.update({url: 'http://www.youtube.com'});
        sendResponse({farewell: "redirected"});
    }
);
