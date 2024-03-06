var all={
tabriz:{naem:'whather in tabriz',dgree:'9*C',wether:'svg/ice.png',humidity: "5*",windspeed:'15*'},
tahran:{naem:'whather in tahran',dgree:'19*C',wether:'svg/rainy.png',humidity: "12*",windspeed:'40*'},
shiraz:{naem:'whather in shiraz',dgree:'29*C',wether:'svg/suny.png',humidity: "24*",windspeed:'10*'},
}

let $=document
let input=$.getElementById('text');
let img=$.getElementById('img');
let naem=$.querySelector('.naem');
let dgree=$.querySelector('.dgree');
let wether=$.getElementById('wether');
let humidity=$.querySelector('.humidity');
let speedwind=$.querySelector('.speedwind');
let info=$.getElementById('info');
let iconimg=$.querySelector('.hedimg');
let inputvalue;
let allsity;
img.addEventListener('click',my);
input.addEventListener('keyup',chang)

function my(){
    inputvalue=input.value
    allsity=all[inputvalue]

    if(allsity==undefined)
        alert('sory chnin shahri nadarem')
    else{
        info.style.opacity='100';
        naem.innerHTML=allsity.naem;
        dgree.innerHTML='dgree :'+allsity.dgree;
        wether.src=(allsity.wether);
        humidity.innerHTML= 'humidity :'+allsity.humidity;
        speedwind.innerHTML='speedwind :'+allsity.windspeed;
    }
}

document.getElementById('text').onkeydown=function(event){
        if (event.key=='Enter'){
            my();
        }
}

function chang(){
    if(input.value==0)
        iconimg.style.background= 'rgb(134, 170, 165)';
    
    else if(all[input.value])
        iconimg.style.background='green';
    else {
      iconimg.style.background='red';
      info.style.opacity='0';
    }
}

