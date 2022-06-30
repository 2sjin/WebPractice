// 반복문 대신 JQuery를 사용하여 코드 최적화

var Body = {
    setColor: function(color) { $('body').css('color', color) }, 
    setBackgroundColor: function(color) { $('body').css('backgroundColor', color) }
}

var Links = {
    setColor: function(color) { $('a').css('color', color) }, 
}

var ActiveLinks = {
    setColor: function(color) { $('.active').css('color', color) }, 
}

function nightDayHandler(link_btn) {
    if (link_btn.value === 'Day → Night') {   // this = document.querySelector(버튼ID)
        link_btn.value = 'Night → Day';
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('skyblue');
        ActiveLinks.setColor('red');
    }
    else {
        link_btn.value = 'Day → Night';
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('blue');
        ActiveLinks.setColor('red');
    }
}