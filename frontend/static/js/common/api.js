async function call_api(endpoint, method, form_data) {
    let access_token = localStorage.getItem('access');
    let url = `${HOST_URL}/api/${endpoint}/`;
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(access_token)
        },
    }

    if (method == 'POST') {
        options.body = form_data ? JSON.stringify(form_data) : ''
    }

    let response = await fetch(url, options);
    return response
}


function get_access_token_by_refresh_token() {
    let refresh_token = localStorage.getItem('refresh');
    if (!refresh_token) {
        return;
    }

    let url = `${HOST_URL}/api/token/refresh/`;
    let body_data = {
        'refresh': refresh_token
    }
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body_data)
    }

    fetch(url, options)
    .then(res => res.json())
    .then(data => {
        save_new_access_token(data);
        location.reload();
    })   
}
