$(document).ready(function() {
    $('#login_btn').click(login);
})


function login() {
    let endpoint = 'token/';
    let method = 'POST';
    let user_data = {};
    user_data['username'] = $('#username').val();
    user_data['password'] = $('#password').val();

    call_api(endpoint, method, user_data).done(function(res) {
        console.log(res)
    })
}