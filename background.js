function getUrl(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url);
    });
}

chrome.tabs.onUpdated.addListener(((tabId, change, tab) => {
    if (tab.active && change.url && !"channel" in change.url) {
        console.log(change.url);
    }
    chrome.tabs.executeScript({
        file: 'contentScript.js'
    });
}));
