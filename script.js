document.addEventListener('DOMContentLoaded', () => {
    const posts = [];

    const postForm = document.getElementById('postForm');
    const postsContainer = document.getElementById('posts');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('postTitle').value.trim();
        const content = document.getElementById('postContent').value.trim();

        if (title && content) {
            const post = { title, content, comments: [] };
            posts.push(post);
            displayPosts();
            postForm.reset();
        }
    });

    function displayPosts() {
        postsContainer.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            const postTitle = document.createElement('h2');
            postTitle.textContent = post.title;

            const postContent = document.createElement('p');
            postContent.textContent = post.content.substring(0, 60) + (post.content.length > 60 ? '...' : '');

            const commentForm = document.createElement('form');
            commentForm.classList.add('commentForm');
            const commentInput = document.createElement('input');
            commentInput.type = 'text';
            commentInput.placeholder = 'Write a comment';
            commentInput.required = true; // Lägg till required-attribut
            const commentButton = document.createElement('button');
            commentButton.type = 'submit';
            commentButton.textContent = 'Comment';

            // här läggs till en varnings skylt kan man säga
            commentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const comment = commentInput.value.trim(); // Ta bort whitespace
                if (comment) { // Lägg endast till om kommentaren inte är tom
                    post.comments.push(comment);
                    displayPosts();
                    commentInput.value = ''; // Rensa input
                }
            });

            // Bygg ihop DOM-elementen
            commentForm.appendChild(commentInput);
            commentForm.appendChild(commentButton);

            const commentsList = document.createElement('ul');
            post.comments.forEach(comment => {
                const commentItem = document.createElement('li');
                commentItem.textContent = comment;
                commentsList.appendChild(commentItem);
            });

            postElement.appendChild(postTitle);
            postElement.appendChild(postContent);
            postElement.appendChild(commentForm);
            postElement.appendChild(commentsList);
            postsContainer.appendChild(postElement);
        });
    }
});





// document.addEventListener('DOMContentLoaded', () => {
//     const posts = [];

//     const postForm = document.getElementById('postForm');
//     const postsContainer = document.getElementById('posts');

//     postForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const title = document.getElementById('postTitle').value;
//         const content = document.getElementById('postContent').value;

//         const post = { title, content, comments: [] };
//         posts.push(post);
//         displayPosts();
//         postForm.reset();
//     });

//     function displayPosts() {
//         postsContainer.innerHTML = '';
//         posts.forEach((post, index) => {
//             const postElement = document.createElement('div');
//             postElement.classList.add('post');

//             const postTitle = document.createElement('h2');
//             postTitle.textContent = post.title;

//             const postContent = document.createElement('p');
//             postContent.textContent = post.content.substring(0, 60) + (post.content.length > 60 ? '...' : '');

//             const commentForm = document.createElement('form');
//             commentForm.classList.add('commentForm');
//             const commentInput = document.createElement('input');
//             commentInput.type = 'text';
//             commentInput.placeholder = 'write a comment';
//             const commentButton = document.createElement('button');
//             commentButton.type = 'submit';
//             commentButton.textContent = 'comment here';
//             commentForm.appendChild(commentInput);
//             commentForm.appendChild(commentButton);

//             commentForm.addEventListener('submit', (e) => {
//                 e.preventDefault();
//                 const comment = commentInput.value;
//                 post.comments.push(comment);
//                 displayPosts();
//             });

//             const commentsList = document.createElement('ul');
//             post.comments.forEach(comment => {
//                 const commentItem = document.createElement('li');
//                 commentItem.textContent = comment;
//                 commentsList.appendChild(commentItem);
//             });

//             postElement.appendChild(postTitle);
//             postElement.appendChild(postContent);
//             postElement.appendChild(commentForm);
//             postElement.appendChild(commentsList);
//             postsContainer.appendChild(postElement);
//         });
//     }
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const posts = [];

//     const postForm = document.getElementById('postForm');
//     const postsContainer = document.getElementById('posts');

//     postForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const title = document.getElementById('postTitle').value;
//         const content = document.getElementById('postContent').value;

//         const post = { title, content, comments: [] };
//         posts.push(post);
//         displayPosts();
//         postForm.reset();
//     });

//     function displayPosts() {
//         postsContainer.innerHTML = '';
//         posts.forEach((post, index) => {
//             const postElement = document.createElement('div');
//             postElement.classList.add('post');

//             const postTitle = document.createElement('h2');
//             postTitle.textContent = post.title;

//             const postContent = document.createElement('p');
//             postContent.textContent = post.content.substring(0, 60) + (post.content.length > 60 ? '...' : '');

//             const commentForm = document.createElement('form');
//             commentForm.classList.add('commentForm');
//             const commentInput = document.createElement('input');
//             commentInput.type = 'text';
//             commentInput.placeholder = 'Skriv en kommentar';
//             const commentButton = document.createElement('button');
//             commentButton.type = 'submit';
//             commentButton.textContent = 'Kommentera';
//             commentForm.appendChild(commentInput);
//             commentForm.appendChild(commentButton);

//             commentForm.addEventListener('submit', (e) => {
//                 e.preventDefault();
//                 const comment = commentInput.value;
//                 post.comments.push(comment);
//                 displayPosts();
//             });

//             const commentsList = document.createElement('ul');
//             post.comments.forEach(comment => {
//                 const commentItem = document.createElement('li');
//                 commentItem.textContent = comment;
//                 commentsList.appendChild(commentItem);
//             });

//             postElement.appendChild(postTitle);
//             postElement.appendChild(postContent);
//             postElement.appendChild(commentForm);
//             postElement.appendChild(commentsList);
//             postsContainer.appendChild(postElement);
//         });
//     }
// });