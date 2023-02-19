chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "ON",
    });
    chrome.action.setBadgeBackgroundColor({
      color: "#50C878",
  })
  });

  chrome.action.onClicked.addListener(async (tab) => {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    await chrome.action.setBadgeText({  
        text: nextState,
      });
    await chrome.action.setBadgeBackgroundColor({
        color: nextState === 'ON' ? "#50C878" : "#C70039"
    })
      
   });

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