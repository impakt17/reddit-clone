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
            commentInput.required = true; // en "required-attribut"
            const commentButton = document.createElement('button');
            commentButton.type = 'submit';
            commentButton.textContent = 'Comment';

            // här läggs till en varnings skylt kan man säga, om du inte skriver något utan bara trycker på knappen
            commentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const comment = commentInput.value.trim(); // Tar bort whitespace
                if (comment) { // Läggs endast till om kommentaren inte är tom
                    post.comments.push(comment);
                    displayPosts();
                    commentInput.value = ''; // här tar den bort input
                }
            });

            // DOM-elementen
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





