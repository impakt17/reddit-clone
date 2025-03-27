export class PostView {
    renderPosts(posts) {
        const postsContainer = document.getElementById('posts');
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
            commentInput.placeholder = 'write a comment';
            const commentButton = document.createElement('button');
            commentButton.type = 'submit';
            commentButton.textContent = 'comment';
            commentForm.appendChild(commentInput);
            commentForm.appendChild(commentButton);

            commentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const commentContent = commentInput.value;
                postService.addComment(index, commentContent);
                this.renderPosts(postService.getAllPosts());
            });

            const commentsList = document.createElement('ul');
            post.comments.forEach(comment => {
                const commentItem = document.createElement('li');
                commentItem.textContent = comment.content;
                commentsList.appendChild(commentItem);
            });

            postElement.appendChild(postTitle);
            postElement.appendChild(postContent);
            postElement.appendChild(commentForm);
            postElement.appendChild(commentsList);
            postsContainer.appendChild(postElement);
        });
    }
}