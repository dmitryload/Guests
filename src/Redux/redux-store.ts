import {combineReducers, createStore, EmptyObject} from "redux";
import ChatReducer from "./chat-reducer";
import PostsReducer from "./posts-reducer";
import LeftFriendsReducer from "./left-friends-reducer";

export type StateType = EmptyObject & {
    PostsPage: PostsPageType;
    DialogsPage: DialogsPageType;
    LeftFriends: LeftFriendsType;
}
export type LeftFriendsType = {
    friends: Array<FriendsType>
}
export type FriendsType = {
    avatar: string
    name: string
    id: string
    city: string
}
export type DialogsPageType = {
    users: Array<UsersType>
    usersDialogs: Array<UsersDialogsType>
    newMessageText: string
}
export type UsersType = {
    name: string
    id: string
    ava: string
}
export type UsersDialogsType = {
    id: string
    name: string
    text: string
    time: number
    ava: string
}
export type PostsPageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type PostsType = {
    id: string
    message: string
    likes: number
    ava:string
    dots:string
    photo1: string
    photo2: string
    photo3: string
    photo4: string
}


let reducers = combineReducers({
    PostsPage: PostsReducer,
    DialogsPage: ChatReducer,
    LeftFriends: LeftFriendsReducer
})
let store = createStore(reducers)

export type DispatchType = (action: ActionType) => void
export type ActionType = {
    type: string,
    newText: string
}

export default store;