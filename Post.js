export class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }
}