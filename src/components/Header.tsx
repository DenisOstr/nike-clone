import { DividerProps, MenuItem, Navigation } from "../types/Global"

function Divider({ id }: DividerProps) {
    if (id == 4) {
        return null
    }

    return <span className="vertical-divider">|</span>
}


function TopHeader() {
    const menuItems: MenuItem[] = [
        { id: 1, slug: 'find-a-store', title: 'Find a Store', url: '#' },
        { id: 2, slug: 'help', title: 'Help', url: '#' },
        { id: 3, slug: 'join-us', title: 'Join Us', url: '#' },
        { id: 4, slug: 'sign-in', title: 'Sign In', url: '#' }
    ]

    const listItems = menuItems.map((item: MenuItem) => 
        <li key={item.id}>
            <a href={item.url}>{ item.title }</a>
            <Divider id={item.id} />
        </li>
    );
    
    return (
        <>
            <div className="header-top">
                <ul className="menu-list">
                    { listItems }
                </ul>
            </div>
        </>
    )
}


function BottomHeader() {
    const navigation: Navigation[] = [
        { id: 1, title: 'New & Featured', url: '#', subNav: [] },
        { id: 2, title: 'Men', url: '#', subNav: [] },
        { id: 3, title: 'Women', url: '#', subNav: [] },
        { id: 4, title: 'Kids', url: '#', subNav: [] },
        { id: 5, title: 'Accessories', url: '#', subNav: [] },
        { id: 6, title: 'Sale', url: '#', subNav: [] },
    ]

    const navList = navigation.map((navItem: Navigation) =>
        <li key={navItem.id}>
            <a href={navItem.url}>{ navItem.title }</a>
        </li>
    );

    return (
        <>
            <div className="header-bottom">
                <div className="logo-container">
                    <svg aria-hidden="true" className="logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path></svg>
                </div>

                <div className="nav-search-container">
                    <nav className="nav-container">
                        <ul className="nav-list">
                            { navList }
                        </ul>
                    </nav>

                    <div className="search-bar-container">
                        <input className="search-bar" placeholder="Search" />
                        <button className="search-btn">
                            <svg aria-hidden="true" className="search-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
                        </button>
                    </div>
                </div>

                <div className="acc-btn-group">
                    <button className="acc-btn">
                        <svg aria-hidden="true" className="heart-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
                    </button>
                    <button className="acc-btn">
                        <svg aria-hidden="true" className="cart-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
                    </button>
                </div>
            </div>
        </>
    )
}


function Header() {
    return (
        <>
            <TopHeader />
            <BottomHeader />
        </>
    )
}

export default Header