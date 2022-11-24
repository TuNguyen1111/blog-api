$(document).ready(function() {
    $('#login_btn').click(login);
})


function login() {
    let endpoint = 'token';
    let method = 'POST';
    let user_data = {};
    user_data['username'] = $('#username').val();
    user_data['password'] = $('#password').val();

    call_api(endpoint, method, save_token, user_data);
}


function save_token(response) {
    localStorage.setItem('refresh', response.refresh);
    localStorage.setItem('access', response.access);
    console.log(parse_Jwt(response.access))
}


function parse_Jwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
