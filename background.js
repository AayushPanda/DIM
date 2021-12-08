function getRandomToken() {
    // E.g. 8 * 32 = 256 bits token
    var randomPool = new Uint8Array(32);
    crypto.getRandomValues(randomPool);
    var hex = '';
    for (var i = 0; i < randomPool.length; ++i) {
        hex += randomPool[i].toString(16);
    }
    // E.g. db18458e2782b2b77e36769c569e263a53885a9944dd0a861e5064eac16f1a
    return hex;
}

chrome.runtime.onInstalled.addListener(function() {
    userid = getRandomToken();
    chrome.storage.sync.set({userid: userid}, function() {
        useToken(userid);
    });
});

chrome.tabs.onUpdated.addListener(((tabId, change, tab) => {
    if (change.url.includes('youtube')) {
        chrome.tabs.executeScript({
            file: 'contentScript.js'
        });
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, change.url, function(response) {});
        });
    }
}));