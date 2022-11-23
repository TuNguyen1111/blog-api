$(document).ready(function() {
    render_blogs()

})


function render_blogs() {
    let endpoint = 'blogs';
    let method = 'GET';
    call_api(endpoint, method).done(function(blogs) {
        for (let blog of blogs) {
            let html = `
                <article class="media content-section">
                    <div class="media-body">
                        <div class="article-metadata">
                            <a class="mr-2" href="">Tu Nguyen</a>
                            <small class="text-muted">2022-01-01</small>
                        </div>
                        <h2><a class="article-title" href="">${blog.title}</a></h2>
                        <p class="article-content">${blog.content}</p>
                        <img class="blog-img" src="${blog.image_url}">
                    </div>
                </article>
            `
            $('#main').append(html)
        }
    });
}