export interface Store {
    title: string
    content: string
    images: string[]
    managed: string[]
}

export interface Product {
    uid: string
    // Reference to Store.title
    store: string
    title: string
    detail: string
    images: string[]
}
