$(document).ready(function() {
    fill_data_to_form();
    bind_event_for_update_btn();
})


function fill_data_to_form() {
    let blog_id = $('#blog_id').val();
    let endpoint = `get-blog/${blog_id}`;
    let method = 'GET';

    call_api(endpoint, method).done(function(res) {
        for (let ele of $('#update_form').find('input, textarea, img')) {
            let input_name = $(ele).attr('name');

            if (input_name == 'blog_id') {
                continue;
            }

            if (input_name === 'blog_img') {
                let img_src = res['image_url'];
                $('#blog_img').attr('src', img_src);
            }
            else if (input_name in res) {
                $(ele).val(res[input_name]);
            }
        }
    })
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
        call_api(endpoint, method, blog_data).done(function(res) {
            console.log(res)
            alert(res);
        })
    })
}


function bind_event_for_delete_action() {
    let blog_id = $('#blog_id').val();
    let endpoint = `delete/${blog_id}`;
    let method = 'POST';

    call_api(endpoint, method).done(function(res) {
        alert('Delete success!');
        location.replace(HOST_URL);
    })
}