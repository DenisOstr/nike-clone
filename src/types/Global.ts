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