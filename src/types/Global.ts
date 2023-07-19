export type DividerProps = {
    id: number
}


export type MenuItem = {
    id: number
    slug: string
    title: string
    url: string
}


export type Navigation = {
    id: number
    title: string
    url: string
    subNav: string[]
}


export type SortByList = {
    slug: string
    title: string
}


export type SortByProps = {
    sortByList: SortByList[]
    currentSortBy: SortByList
    callback: any
}


export type Product = {
    id: number
    title: string
    description: string
    price: number
    category: string
    image: string
}


export type ProductCardProp = {
    product: Product
}