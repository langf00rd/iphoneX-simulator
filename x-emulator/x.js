var notifBar = document.getElementById('notifBar');
var bottom = document.getElementById('notifBbottomar');

iPhoneX();
window.onresize = window.onorientationchange = function() {
    setTimeout(iPhoneX,100);
}

function iPhoneX() {
    if (window.innerWidth <= 390) {
        if (!document.getElementById('iphone_layout')) {

            var img = document.createElement('img');
            img.id = 'iphone_layout';
            img.style.position = 'fixed';
            img.style.top = '0';
            img.style.left = '0';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.zIndex = 9999;
            img.style.pointerEvents = 'none';
            img.src = 'iphonex.png';

            var notifBar = document.getElementById('notifBar');
            notifBar.style.display = "block";
            notifBar.style.background = '#929292';
            notifBar.style.width = '100%';
            notifBar.style.height = '29px';
            notifBar.style.top = '0';
            notifBar.style.left = '0';
            notifBar.style.position = 'fixed';
            notifBar.style.zIndex = 1999999999999999999999999;

            var bottom = document.getElementById('bottom');
            bottom.style.display = "block";
            bottom.style.background = '#fff';
            bottom.style.width = '100%';
            bottom.style.height = '18px';
            bottom.style.bottom = '0';
            bottom.style.left = '0';
            bottom.style.position = 'fixed';
            bottom.style.zIndex = 1999999999999999999999999;

            document.body.style.padding = '29px 0';
            document.body.insertBefore(img,document.body.children[0]);
            console.log("Iphone X simulator running..");
        }
    } else if (document.getElementById('iphone_layout')) {
        document.body.removeChild(document.getElementById('iphone_layout'));
    } else {
        clearInterval(iPhoneX);
        var notifBar = document.getElementById('notifBar');
        notifBar.style.display = "none";
        var bottom = document.getElementById('bottom');
        bottom.style.display = "none";
        document.body.style.padding = 'inherit';
    }
}