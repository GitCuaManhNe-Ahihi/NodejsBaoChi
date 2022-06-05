//
//
//          HEADER
//
//
var listItem = document.querySelectorAll('.itemCanSelect');
var eleForm1 = document.getElementById("form-log1");
var eleForm2 = document.getElementById("form-log2");
function showClick(idItemSelect,objectChange)
{
    var eleSelect =  document.getElementById(idItemSelect);
    listItem.forEach(element => {
        if (element.classList.contains("open") && element!=eleSelect){
            element.classList.remove("open");
            var idEleNav = element.getAttribute("idItemShow");
            document.getElementById(idEleNav).classList.add("cl");
        }
    });
    if (eleSelect.classList.contains("open"))
    {
        eleSelect.classList.remove("open");
        document.getElementById(objectChange).classList.add("cl");
        document.querySelector(".header_navigation").classList.add("cl");
    }
    else{
        eleSelect.classList.add("open");
        document.getElementById(objectChange).classList.remove("cl");
        document.querySelector(".header_navigation").classList.remove("cl");

    }
}

function closeTabLogin(value)
{
    var eleFormLogin =  document.querySelector(".nav_login");
    if (value)
        {
            eleFormLogin.classList.add("cl");
            preFormRegis();
        }
    else
        eleFormLogin.classList.remove("cl");
}

function toggleShowPass()
{
    var eleChk = document.querySelector(".check_pass #check_pass_regis");
    if (eleChk.checked)
       document.getElementById("pass_regis").setAttribute("type","text"); 
    else
    document.getElementById("pass_regis").setAttribute("type","password");
}

function nextFormRegis(){
    var emailUser = eleForm1.querySelector("#email_regis").value;
    eleForm1.classList.add("cl");
    eleForm2.classList.remove("cl");
    eleForm2.querySelector("#email_user").innerHTML = emailUser;
}
function preFormRegis(){
    var eleForm1 = document.getElementById("form-log1");
    var eleForm2 = document.getElementById("form-log2");
    eleForm1.classList.remove("cl");
    eleForm2.classList.add("cl");
}
function showResult()
{  console.log("showResult");
    var url =document.getElementById("img-comment-author").attributes.src.value;
    var name = document.getElementById("img-comment-author").attributes.name.value;
    var idpost =  document.getElementById("detail_content")["id-post"];
    var content = eleForm2.querySelector("#text_user").value;
    window.alert(idpost + "\n" + name + "\n" + url + "\n" +content)
}
//
//
//      CONTENT
//
//            

function openTabsRightContent(event,tabContentName) {
    var eleTabContents = document.querySelectorAll(".tabs_content_inner");
    eleTabContents.forEach(ele => {
        if (ele.id == tabContentName){
            ele.classList.remove("cl");
        }
        else{
            ele.classList.add("cl");
        }
    });
    document.querySelector(".r_active").classList.remove("r_active");
    event.currentTarget.className += ' r_active';
}
function replaceHTML (data)
{    
    var comment = $("#comment_element").html();
    comment = comment.replace("{{name}}",data.name);
    comment = comment.replace("{{url}}",data.url);
    comment = comment.replace("{{content}}",data.content);
    comment = comment.replace("{{time}}",data.createdAt);
    var box = $("#showcomment")
    $(comment).appendTo(box);
}
function retriveComment(id){
    $("#showcomment").empty()
    $.ajax({
        url: "https://baochicuocsong.herokuapp.com/api/v1/comment?idpost="+id,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        type: "GET",
        success: function(data){
            data.forEach(element => {
                replaceHTML(element);
            })
        }
    });
}
// get comment user page : post.html
function getCommentUser(){
    var url =document.getElementById("img_comment_author").attributes.src.value;
    var name = document.getElementById("img_comment_author").attributes.name.value;
    var content = document.querySelector("#text_user").value;
    let idpost = document.getElementById("postdetail").attributes.postid.value;
   if(content)
   {
    $.ajax({
        url: "https://baochicuocsong.herokuapp.com/api/v1/comment",
        type: "POST",
        data: JSON.stringify({
            idpost: idpost,
            name: name,
            url: url,
            content: content
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success:function(){
            document.querySelector("#text_user").value = "";
            retriveComment(idpost)
        }
    });
   }

}
