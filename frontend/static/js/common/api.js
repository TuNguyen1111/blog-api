function call_api(endpoint, method, form_data) {
    return $.ajax({
        url: `http://127.0.0.1:8000/api/${endpoint}`,
        method: method,
        data: form_data ? form_data : '',
    })
}