var flags = document.getElementsByClassName("flags")[0];
function addDiv (){
    
    flags.style.display = "block"
    flags.style.transition = "0.5s"
  
}

function removeDiv(){
    flags.style.display = "none"
    flags.style.transition = "0.5s"
}
function removeMobil(){
    document.getElementsByClassName("ox_mobil_menu")[0].style.display = "none"
    document.getElementById("ox_top").style.opacity = "1"
    document.getElementById("ox_content").style.opacity = "1"
    document.getElementById("ox_top").style.pointerEvents = "auto"
    document.getElementById("ox_content").style.pointerEvents = "auto"
}
function createMobil(){
    var mobilMenu = document.getElementsByClassName("ox_mobil_menu")[0]
    document.body.appendChild(mobilMenu)
    mobilMenu.style.display = "block"
    document.getElementById("ox_top").style.opacity = "0.3"
    document.getElementById("ox_content").style.opacity = "0.3"
    document.getElementById("ox_top").style.pointerEvents = "none"
    document.getElementById("ox_content").style.pointerEvents = "none"
    document.getElementById("ox_top").style.background = "rgba(1+2+3+0.5)"
   
}

function removeSub(){
    document.getElementsByClassName("demo_submenu")[0].style.display = "none"
}
function createSub(){
    document.getElementsByClassName("demo_submenu")[0].style.display = "block"
}
function removeSub1(){
    document.getElementsByClassName("demo_submenu")[1].style.display = "none"
}
function createSub1(){
    document.getElementsByClassName("demo_submenu")[1].style.display = "block"
}

var colorW = document.getElementById("color_text")
var grey = document.getElementsByClassName("change_color")[0]
var pink = document.getElementsByClassName("change_color")[1]
var black = document.getElementsByClassName("change_color")[2]
function changeGrey(){
    var colorC = document.getElementsByClassName("change_color")[0].value
    colorW.innerHTML = "COLOR:"+ colorC
    grey.style.border = "medium solid #000"
    pink.style.border = "medium solid #fff"
    black.style.border = "medium solid #fff"
}
function changePink(){
    var colorC = document.getElementsByClassName("change_color")[1].value
    colorW.innerHTML = "COLOR:"+ colorC
    pink.style.border = "medium solid #000"
    grey.style.border = "medium solid #fff"
    black.style.border = "medium solid #fff"

}
function changeBlack(){
    var colorC = document.getElementsByClassName("change_color")[2].value
    colorW.innerHTML = "COLOR:"+ colorC
    black.style.border = "medium solid #000"
    grey.style.border = "medium solid #fff"
    pink.style.border = "medium solid #fff"
}


var sizeT = document.getElementById("size_text")
var sizeS = document.getElementsByClassName("change_size")[0]
var sizeM = document.getElementsByClassName("change_size")[1]
var sizeL = document.getElementsByClassName("change_size")[2]
function changeSize(){
    var sizeC = sizeS.value
    sizeT.innerHTML = "SIZE: "+ sizeC
    sizeS.style.background = "black"
    sizeS.style.color = "white"
    sizeM.style.background = "white"
    sizeM.style.color = "black"
    sizeL.style.background = "white"
    sizeL.style.color = "black"
}
function changeSizem(){
    var sizeC = sizeM.value
    sizeT.innerHTML = "SIZE: "+ sizeC
    sizeM.style.background = "black"
    sizeM.style.color = "white"
    sizeS.style.background = "white"
    sizeS.style.color = "black"
    sizeL.style.background = "white"
    sizeL.style.color = "black"
}
function changeSizel(){
    var sizeC = sizeL.value
    sizeT.innerHTML = "SIZE: "+ sizeC
    sizeL.style.background = "black"
    sizeL.style.color = "white"
    sizeM.style.background = "white"
    sizeM.style.color = "black"
    sizeS.style.background = "white"
    sizeS.style.color = "black"
    
}
var animeBtn = document.getElementsByClassName("content_btn")[0]
function addAnime(){
    animeBtn.setAttribute("class","addAnime content_btn")
 
}
function removeAnime(){
    animeBtn.removeAttribute("class", "addAnime")
    animeBtn.setAttribute("class","content_btn")
}
var likeI = document.getElementsByClassName("content_icon")[0]
function likeDress(){
    if(likeI.style.color == "red"){
        likeI.style.color = "white"
    }else{
        likeI.style.color = "red"
    }
}
var numberP = document.getElementById("like_num").value
var numberWrite = document.getElementById("like_num")
function numberAdd(){
 
    numberP ++
}
var price1 = document.getElementsByClassName("add_card")[1]
var price2 = document.getElementsByClassName("add_card")[2]
var price3 = document.getElementsByClassName("add_card")[3]
function addPrice(){
    if(price1.style.display == "none"){
        price1.style.display = "block"
    }else{
        price1.style.display = "none"
    }
}
function addPrice1(){
    if(price2.style.display == "none"){
        price2.style.display = "block"
    }else{
        price2.style.display = "none"
    }
}
function addPrice2(){
    if(price3.style.display == "none"){
        price3.style.display = "block"
    }else{
        price3.style.display = "none"
    }
}
function closeAdd(){
    document.getElementsByClassName("sale_section")[0].style.display = "none"
}