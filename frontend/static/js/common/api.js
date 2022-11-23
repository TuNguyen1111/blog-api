function call_api(endpoint, method, data) {
    return $.ajax({
        url: `http://127.0.0.1:8000/api/${endpoint}`,
        method: method,
        body: data ? data : '',
    })
}