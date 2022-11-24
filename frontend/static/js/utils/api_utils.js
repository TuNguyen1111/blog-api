function is_success_status(response) {
    return response.status === 200;
}


function is_unauthorized(response) {
    return response.status === 401;
}


function is_have_refresh_token() {
    return localStorage.getItem('refresh');
}


function save_token(response) {
    localStorage.setItem('refresh', response.refresh);
    localStorage.setItem('access', response.access);
}


function save_new_access_token(response) {
    localStorage.setItem('access', response.access);
}


function show_response_error(response) {
    $('#api_error').text(response.statusText);
}

async function handle_response(response, callback) {
    if (is_success_status(response) && callback) {
        let data = await response.json();
        callback(data);
        show_section('content_section');
        hide_section('login_section');
    }
    else if (is_unauthorized(response) && is_have_refresh_token()){
        get_access_token_by_refresh_token();
    }
    else {
        show_section('login_section');
        hide_section('content_section');
    }
}
