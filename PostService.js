import { Post } from '../models/Post.js';
import { Comment } from '../models/Comment.js';

export class PostService {
    constructor() {
        this.posts = [];
    }

    createPost(title, content) {
        const post = new Post(title, content);
        this.posts.push(post);
    }

    getAllPosts() {
        return this.posts;
    }

    addComment(postIndex, commentContent) {
        const comment = new Comment(commentContent);
        this.posts[postIndex].addComment(comment);
    }
}