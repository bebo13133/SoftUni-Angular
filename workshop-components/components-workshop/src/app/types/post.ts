import { UserId } from "./userID";

export interface Post{
 likes: string[];
  _id: string;
  text: string;
  userId: UserId;
//   themeId: ThemeWithUserIdAsString;
  created_at: string;
  updatedAt: string;
  __v: number;
}