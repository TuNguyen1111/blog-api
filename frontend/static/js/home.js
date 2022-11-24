$(document).ready(function() {
    render_blogs();
})


async function render_blogs() {
    let endpoint = 'blogs';
    let method = 'GET';
    let response = await call_api(endpoint, method);

    if (is_success_status(response)) {
        let blogs = await response.json();
        for (let blog of blogs) {
            let html = `
                <article class="media content-section">
                    <div class="media-body">
                        <div class="article-metadata">
                            <a class="mr-2" href="">Tu Nguyen</a>
                            <small class="text-muted">2022-01-01</small>
                        </div>
                        <h2><a class="article-title" href="">${blog.title}</a></h2>
                        <p class="article-content">${blog.content ? blog.content: ''}</p>
                        <img class="blog-img" src="${blog.image_url}">
                        <div class="text-right">
                            <button onClick=go_to_detail_page(${blog.blog_id}) type="button" class="btn btn-primary go_to_detail" blog_id=${blog.blog_id}>Detail</button>
                        </div>
                    </div>
                </article>
            `
            $('#main').append(html)
        }
    }
    else {
        show_response_error(response);
    }
    
}


function go_to_detail_page(blog_id) {
    let target_url = HOST_URL + `/detail-blog/${blog_id}`
    location.replace(target_url);
}
