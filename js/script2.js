var counter = 1,
    gallery = ["../img/1.png", "../img/2.png", "../img/3.png", "../img/4.png", "../img/gal4.jpeg", "../img/gallery.jpg"],
    rotateGallery = function () {
        document.getElementById("ImgGallery").src = gallery[counter];
        counter++;
        if (counter >= gallery.length) {
            counter = 0;
        }
    };

     function submit(){
         var a,b,c,x;
     a=document.getElementById("NAME").value;
     b=document.getElementById("SKILL").value;
     c=document.getElementById("LEVEL").value;
     x=document.getElementById("COMMENT").value;
      var d=document.getElementById("form");
      var row=d.insertRow(-1);
      var e=row.insertCell(0);
      var f=row.insertCell(1);
      var g=row.insertCell(2);
      var h=row.insertCell(3);
     
      e.innerHTML=a;
      f.innerHTML=b;
      g.innerHTML=c;
      h.innerHTML=x;
         localStorage.table1 = document.getElementById("form").innerHTML;
     } 
     window.onload = myload;

function myload() {

	if(localStorage.table1)
   document.getElementById("form").innerHTML = localStorage.table1
}
