var typed= new Typed(".typed",{
    strings:["We are here to represent you the future"],
    smartBackSpace: true,
    typeSpeed:50,
    backSpeed:50
})


 function countDown(){
     var now = new Date();
     var eventDate =new Date(2020, 11, 25);

     var currentTime = now.getTime();
     var eventTime = eventDate.getTime();
     var renTime = eventTime - currentTime;

     var s = Math.floor(renTime / 1000);
     var m = Math.floor(s / 60);
     var h = Math.floor(m / 60);
     var d = Math.floor(h / 24);

     h %=24;
     m %=60;
     s %=60;

     h= (h < 10 ) ? "0" + h : h;
     m= (m < 10 ) ? "0" + m : m;
     s= (s < 10 ) ? "0" + s : s;

     document.getElementById("days").textContent = d; 
     document.getElementById("days").innerText = d; 

     document.getElementById("hour").textContent = h; 
     document.getElementById("min").textContent = m; 
     document.getElementById("sec").textContent = s; 
 setTimeout(countDown, 1000);

 }
 countDown();
