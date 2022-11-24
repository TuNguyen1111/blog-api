$(document).ready(function() {
    $('#create_btn').click(create_blog);
})


async function create_blog() {
    let endpoint = 'create';
    let method = 'POST';
    let form_data = {};
    for (let input of $('#create_form').find('input, textarea')) {
        let input_name = $(input).attr('name');
        let input_val = $(input).val();
        form_data[input_name] = input_val;
    }
    let response = await call_api(endpoint, method, form_data);
    if (is_success_status(response)) {
        $('#create_form')[0].reset();
    }
}
