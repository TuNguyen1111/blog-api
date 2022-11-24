$(document).ready(function() {
    get_blog();
    bind_event_for_update_btn();
})


function get_blog() {
    let blog_id = $('#blog_id').val();
    let endpoint = `get-blog/${blog_id}`;
    let method = 'GET';

    call_api(endpoint, method, fill_data_to_form);
}


function fill_data_to_form(response) {
    for (let ele of $('#update_form').find('input, textarea, img')) {
        let input_name = $(ele).attr('name');

        if (input_name == 'blog_id') {
            continue;
        }

        if (input_name === 'blog_img') {
            let img_src = response['image_url'];
            $('#blog_img').attr('src', img_src);
        }
        else if (input_name in response) {
            $(ele).val(response[input_name]);
        }
    }
}



function bind_event_for_update_btn() {
    $('#update_btn').click(function() {
        let blog_id = $('#blog_id').val();
        let endpoint = `update/${blog_id}`;
        let method = 'POST';
        let blog_data = {};
        for (let input of $('#update_form').find('input, textarea')) {
            let input_name = $(input).attr('name');
            let input_val = $(input).val();
            blog_data[input_name] = input_val;
        }
        call_api(endpoint, method, show_update_result, blog_data);
    })
}


function show_update_result(response) {
    alert(response);
}


function bind_event_for_delete_action() {
    let blog_id = $('#blog_id').val();
    let endpoint = `delete/${blog_id}`;
    let method = 'POST';

    call_api(endpoint, method, go_to_home_page);
}


function go_to_home_page() {
    alert('Delete success!');
    location.replace(HOST_URL);
}