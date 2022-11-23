$(document).ready(function() {
    $('button#login_btn').click(login);
})


function login() {
    let username = $('#username').val();
    let password = $('#password').val();
    let data = {
        'username': username,
        'password': password,
    }
    let endpoint = 'token/';
    let method = 'POST';
    call_api(endpoint, method, data).done(function(res) {
        console.log(res)
    })
}


function save_token(res) {
    
}