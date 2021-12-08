matchHTML = '<yt-formatted-string id="text" class="style-scope ytd-toggle-button-renderer style-text">Dislike</yt-formatted-string>';

var textboxes = document.getElementsByClassName('style-scope ytd-toggle-button-renderer style-text');

var dislikes = 0;

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

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        for (var i = 0, l = textboxes.length; i < l; i++) {
            if(textboxes[i].outerHTML === matchHTML || textboxes[i].id === 'dislikes'){
                //get dislike count from firebase
                textboxes[i].innerHTML = dislikes;
                textboxes[i].id = 'dislikes'
            }
        }
        sendResponse({});
    }
);

//On dislike click
chrome.storage.local.get("userid", (result) => {
    // Push/pull from db with dislikes
});