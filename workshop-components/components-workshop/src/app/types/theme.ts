import { Post } from "./post";
import { UserId } from "./userID";

export interface Theme{
    "subscribers": string[];
    "posts": any ;
    "_id": string
    "themeName": string
    "userId": UserId;
    "created_at": string;
    "updatedAt": string
    "__v": number
}

