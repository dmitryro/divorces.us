import { LayoutStore as LayoutStoreModel } from './index'

export as namespace ISlideStore

export interface LayoutStore extends LayoutStoreModel {}

export interface ISlide {
    id: number
    title: string
    text: string
    link: string
    action: string
    slide: string
}
