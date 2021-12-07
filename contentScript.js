matchHTML = '<yt-formatted-string id="text" class="style-scope ytd-toggle-button-renderer style-text">Dislike</yt-formatted-string>';

var textboxes = document.getElementsByClassName('style-scope ytd-toggle-button-renderer style-text');
for (var i = 0, l = textboxes.length; i < l; i++) {
    if(textboxes[i].outerHTML === matchHTML){
        textboxes[i].innerText = 'DEADBEEF';
    }
}