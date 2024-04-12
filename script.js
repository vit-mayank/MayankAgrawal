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
function navbarSelect(x){
    for(i=0;i<5;i++){
        if(i!=x){
            document.getElementsByClassName("navbar-item")[i].style.backgroundColor="gainsboro";
        }
    }
    if(x!=-1){
        document.getElementsByClassName("navbar-item")[x].style.backgroundColor="lightblue";
    }
}
function submitform(){
    var name=document.getElementById("form-name").value
    var email=document.getElementById("form-email").value
    var message=document.getElementById("form-message").value
    console.log(name+email+message)
   
    var frm=document.getElementById("contact-form")
    if (name!="" && message!="" && email.match("^[a-z]+[0-9]*([\._]*[a-z0-9]+)*@[a-z]+([\.]*[a-z]+)*$")){
        frm.reset()
        showAlert()
    }
}
function showAlert(){
    document.getElementsByClassName("alert")[0].style.display="flex"
}
function closeAlert(){
    document.getElementsByClassName("alert")[0].style.display="none"
}