import { ServicesStore as ServicesStoreModel } from './index'

export as namespace IServicesStore

export interface ServicesStore extends ServicesStoreModel {}

export interface IServices {
    id: number
    title: string
    statement: string
    description: string
    service: string
}
