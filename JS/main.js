var countdate = new Date('may 2, 2020 00:00:00').getTime();

function newYear() {

  var now = new Date().getTime();
  var gap = countdate - now ;

  var second = 1000 ;
  var minute = second * 60;
  var hour   = minute * 60 ;
  var day    = hour * 24 ;

  var h = Math.floor((gap % (day)) / (hour)) ;
  if (h < 10) {
    h = "0" + h
  }
  var m = Math.floor((gap % (hour)) / (minute)) ;
  if (m < 10) {
    m = "0" + m
  }
  var s = Math.floor((gap % (minute)) / (second)) ;
  if (s < 10) {
    s = "0" + s
  }

  document.getElementById('hour').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;
}

setInterval(function()  {
  
  newYear()
}, 1000);