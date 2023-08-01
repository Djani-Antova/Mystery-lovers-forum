//comment.ts

export interface Comment {
        id: string;
        text: string;
        postDate: string;
        postId: string; // Change type to string to store the ID of the post
        author: string;
        _id: string;
      }
