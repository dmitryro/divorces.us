import { BlogStore as BlogStoreModel } from './index'

export as namespace IBlogStore

export interface BlogStore extends BlogStoreModel {}

export interface IPost {
    id: number
    link: string
    action_id: number
    body: string
    author_id: number
    image: string
    image_thumbnail: string
    time_published: date
    total_comments: number
    type_id: number 
    category_id: number
}
