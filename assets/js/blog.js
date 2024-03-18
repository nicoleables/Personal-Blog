const body = document.body;
const headerContent = document.getElementById('header-content');


headerContent.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

const backButton = document.getElementById('back');
backButton.addEventListener('click', () => {
    window.history.back(); // Go back to the previous page
});

const formData = JSON.parse(localStorage.getItem('formData'));
if (formData) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    // Create elements for username and content
    const usernameElement = document.createElement('p');
    usernameElement.textContent = `Posted by: ${formData.username}`;
    usernameElement.style.marginTop = '40px'; // Add margin to move the username down

    
    const contentElement = document.createElement('p');
    contentElement.textContent = formData.content;
    contentElement.style.paddingLeft ='20px';
    
    // Append elements to postElement in the desired order
    const titleElement = document.createElement('span');
    titleElement.textContent = formData.title;
    titleElement.classList.add('post-title');
    
    // Move username and content to specific positions within postElement
    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement); // Move username below the title
    postElement.appendChild(usernameElement); // Move content below the username
     
    document.body.appendChild(postElement);
}

function goBack() {
    window.history.back();
}

document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    let savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

    savedPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const usernameElement = document.createElement('p');
        usernameElement.textContent = `Posted by: ${post.username}`;

        const titleElement = document.createElement('h3');
        titleElement.textContent = post.title;
        titleElement.classList.add('underline-title'); // Add the CSS class for underlining

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(usernameElement);

        postsContainer.appendChild(postElement);
    });
});













