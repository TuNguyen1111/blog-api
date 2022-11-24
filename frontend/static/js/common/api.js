async function call_api(endpoint, method, handle_success_response, form_data) {
    let access_token = localStorage.getItem('access');
    let url = `http://127.0.0.1:8000/api/${endpoint}/`;
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
    if (response.status == 200) {
        let data = await response.json()
        handle_success_response(data);
    }
    else {
        alert(response.statusText);
    }
}