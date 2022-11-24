$(document).ready(function() {
    $('#login_btn').click(login);
})


async function login() {
    let user_data = {};
    user_data['username'] = $('#username').val();
    user_data['password'] = $('#password').val();

    let url = `${HOST_URL}/api/token/`;
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: user_data ? JSON.stringify(user_data) : ''
    }

    let response = await fetch(url, options);
    if (response.status == 200) {
        let data = await response.json()
        save_token(data);
        location.reload();
    }
    else {
        alert(response.statusText);
    }
}


function parse_Jwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

