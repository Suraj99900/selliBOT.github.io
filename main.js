let send = document.getElementById('send');
let msg = document.getElementById('usermsg');
let chat =document.getElementById('chatbot');
// request to selli for answer to msg
var i=0;
function requestSelli() {
  
    if (msg.value != "") {
        
        var user = document.createElement('div');
        var div_box_user = document.createElement('div');
        div_box_user.setAttribute('class','usermsg')
        div_box_user.setAttribute('id','u'+i);
        var div_box_selli = document.createElement('div');
        user.setAttribute('class', 'alert alert-primary user_msg');
        user.innerHTML = "<img src='img/icons8-user-100.png' alt='user img' style='width:50px;'>" + msg.value;
        div_box_user.append(user);
        chat.append(div_box_user);

        var selli = document.createElement('div');
        selli.setAttribute('class', 'alert alert-info selli_msg');


        var ajax = new XMLHttpRequest();
        ajax.open("GET", "req.php?req=" + msg.value, true);

        ajax.onload = () => {
            div_box_selli.setAttribute('id','s'+i);
            div_box_selli.setAttribute('class','sellimsg');
            var selliMsg = ajax.responseText;
            if (selliMsg != "") {

                selli.innerHTML = "<img src='img/icons8-girl-and-check-50.png' alt='selli img'>"+selliMsg;
               
                console.log(selliMsg);
               
                div_box_selli.append(selli);
                chat.append(div_box_selli);
                scrollDown();
              msg.value = "";
                i++;
            }
        }
        ajax.send();

        
    }

}

function scrollDown(){
    document.getElementById('chatbot').scrollTo(0,document.getElementById('chatbot').scrollHeight)
}










send.addEventListener('click', requestSelli);
