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


function show_response_error(response) {
    $('#api_error').text(response.statusText);
}
