var socket = io.connect('http://192.168.0.106:2019',{'forceNew':true});

socket.on('messages',(data)=>{
    console.log(data);
    render(data);
})

function render(data){
    var html = data.map((message,index)=>{
        return (`
            <div class="d-flex justify-content-start mb-4">
                <div class="img_cont_msg" data-toggle="tooltip" data-placement="bottom" title="${ message.nickname }">
                    <img src="./assets/img/user.png" class="rounded-circle user_img_msg">
                </div>
                <div class="msg_cotainer">
                    ${ message.message }
                    <span class="msg_time">${ message.nickname } - El tiempo irá aquí</span>
                </div>
            </div>
            
        `)
    }).join(' ');

    document.getElementById('inbox').innerHTML = html;
}

function send_msg(e){
    var message = {
        nickname: document.getElementById("nickname").value,
        message: document.getElementById("box_message").value
    };
    document.getElementById("nickname").className = "form-control-plaintext";
    document.getElementById("nickname").setAttribute("readonly","");
    document.getElementById("box_message").value = ""
    socket.emit("add_message",message);
    return false;

}