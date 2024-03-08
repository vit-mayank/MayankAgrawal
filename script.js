function oppen(x) {
    document.getElementsByClassName("project-window")[x].style.display="block";
    document.getElementsByClassName("window")[0].style.backgroundColor="rgba(0,0,0,0.7)"
    document.getElementsByClassName("window")[0].style.zIndex="2";
    document.getElementsByClassName("window")[0].setAttribute("onclick","closse("+x+")");
}
function closse(x) {
    document.getElementsByClassName("window")[0].style.background="none"
    document.getElementsByClassName("project-window")[x].style.display="none";
    document.getElementsByClassName("window")[0].style.zIndex="-1";
}
function changeMode(x){
    images=["day-mode.png","dark-mode.png"];
    bg=["black","white"];
    fontColor=["white","black"];
    document.getElementsByClassName("light-dark-mode-div")[0].innerHTML='<img id="light-dark-mode" src="images/'+images[x]+'">';
    document.body.style.backgroundColor= bg[x];
    document.body.style.color=fontColor[x];
    document.getElementsByClassName("timeline-point")[0].style.backgroundColor=fontColor[x]
    timelinepoint=document.getElementsByClassName("timeline-point")
    for(i=0;i<4;i++){
        document.getElementsByClassName("timeline-point")[i].style.backgroundColor=fontColor[x]
        document.getElementsByClassName("project-window")[i].style.backgroundColor=bg[x]
        if(i!=3){
            document.getElementsByClassName("timeline-component timeline-mid")[i].style.backgroundColor=fontColor[x];
        }
    }
    document.getElementsByClassName("light-dark-mode-div")[0].setAttribute("onclick","changeMode("+((x+1)%2)+")")
}