var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'firefox-icon.png') {
      myImage.setAttribute ('src','firefox2.png');
    } else {
      myImage.setAttribute ('src','firefox-icon.png');
    }
}
