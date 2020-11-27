var imgs=document.getElementsByTagName('img'); 

var x =2;

console.log(imgs[0].src);



function resimEkle(){

       var hedef = document.getElementById('resimDegistir');
var firstImage = imgs[0].src + "";

if(x < 6){
hedef.src = imgs[x].src;
x = x+1;

}
/* else kısmı kaldırılarak resim döngüsünün durması sağlanabilir.*/		
 else{
x = 2 ;
hedef.src = imgs[x].src;
} 
}
var y=6;

sil.onclick=function(){

var hedefSil=document.getElementById('resimDegistir');

if(hedefSil != null){

y = y-1;

hedefSil.src=imgs[y].src;
}

else{

y=6;

}
}
