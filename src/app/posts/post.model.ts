export class User {
  _id: string;
  name: string;
  picture: string;
}
export class Post {
  _id: string;
  creator: User;
  date: Date;
  type: string;
  content: string;
  likes: number;
  comments: [
    {
      creator: User;
      text: string;
    }
  ];
  dateDiff: string;
  showContent: string;
  liked: boolean;
};
