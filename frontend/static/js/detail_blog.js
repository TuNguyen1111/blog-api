$(document).ready(function() {
    get_blog();

    $('#update_btn').click(update_blog);
    $('#confirm_delete_btn').click(delete_blog);
})


async function get_blog() {
    let blog_id = $('#blog_id').val();
    let endpoint = `get-blog/${blog_id}`;
    let method = 'GET';

    let response = await call_api(endpoint, method);
    handle_response(response, fill_blog_data_to_form);
}


function fill_blog_data_to_form(blog_data) {
    for (let ele of $('#update_form').find('input, textarea, img')) {
        let input_name = $(ele).attr('name');

        if (input_name == 'blog_id') {
            continue;
        }

        if (input_name === 'blog_img') {
            let img_src = blog_data['image_url'];
            $('#blog_img').attr('src', img_src);
        }
        else if (input_name in blog_data) {
            $(ele).val(blog_data[input_name]);
        }
    }
}



async function update_blog() {
    let blog_id = $('#blog_id').val();
    let endpoint = `update/${blog_id}`;
    let method = 'POST';
    let blog_data = {};
    for (let input of $('#update_form').find('input, textarea')) {
        let input_name = $(input).attr('name');
        let input_val = $(input).val();
        blog_data[input_name] = input_val;
    }
    let response = await call_api(endpoint, method, blog_data);
    handle_response(response, show_update_success_msg);
}


function show_update_success_msg(){
    alert('Updated!');
}


async function delete_blog() {
    let blog_id = $('#blog_id').val();
    let endpoint = `delete/${blog_id}`;
    let method = 'POST';

    let response = await call_api(endpoint, method);
    handle_response(response, go_to_home_page);
}


function go_to_home_page() {
    alert('Delete success!');
    location.replace(HOST_URL);
}