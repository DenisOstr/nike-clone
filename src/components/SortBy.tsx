import { useState } from 'react'

import { SortByProps } from "../types/Global"

function SortBy({ sortByList, currentSortBy, callback }: SortByProps) {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            <div className='sort-container'>
                <div className='sort-options'>
                    <p>Sort By:</p>
                    <span onClick={handleOpen}>{ currentSortBy.title }</span>
                    <svg className={`arrow-icon ${ open ? 'arrow-up' : 'arrow-down' }`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M3.2 5.74a.75.75 0 0 1 1.06-.04L8 9.227L11.74 5.7a.75.75 0 1 1 1.02 1.1l-4.25 4a.75.75 0 0 1-1.02 0l-4.25-4a.75.75 0 0 1-.04-1.06Z"/></svg>
                </div>

                {
                    open ? (
                        <div className='sort-options-dropdown'>
                            {
                                sortByList.map((sortByItem: any) => (
                                    <button className={`sort-option-btn ${ sortByItem.slug == currentSortBy.slug ? 'sort-btn-active' : '' }`} key={sortByItem.slug} onClick={() => callback(sortByItem)}>
                                        { sortByItem.title }
                                    </button>
                                ))
                            }
                        </div>
                    ) : null
                }
            </div>
        </>
    )
}

export default SortBy