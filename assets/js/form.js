document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const formData = {
            username: username,
            title: title,
            content: content
        };


        let savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        savedPosts.push(formData);
        localStorage.setItem('posts', JSON.stringify(savedPosts));

        window.location.href = 'blog.html';
    });
});






