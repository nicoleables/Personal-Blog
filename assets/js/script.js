
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
function createAndRenderBlog() {
    const blog = {
        username: usernameInput.value,
        title: titleInput.value,
        contents: contentInput.value,
    };
    const blogs = JSON.parse(localStorage.getItem('blogs'));
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

const form = document.querySelector('form');
const errorMessage = document.getElementById('error-message');
let hasErrors = false;

form.addEventListener('submit', (event) => {
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (username === '' || title === '' || content === '') {
        event.preventDefault();
        errorMessage.style.display = 'block'; // Show the error message
        hasErrors = true;
    } else {
        // Remove the beforeunload event listener if there are no errors
        window.removeEventListener('beforeunload', handleBeforeUnload);
    }
});

function handleBeforeUnload(event) {
    if (hasErrors) {
        event.preventDefault();
        event.returnValue = ''; // Display a confirmation message
    }
}

window.addEventListener('beforeunload', handleBeforeUnload);

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Get the values from the form fields
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    // Update the content of the sections with the entered values
    document.getElementById('here').innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
        <span class="nicole">Posted by: ${username}</span>
    `;
    document.getElementById('here-2').innerHTML = `
        <h2>${title} 2</h2>
        <p>${content} 2</p>
        <span class="ables">Posted by: ${username}</span>
    `;
});






