import { JournalEntries } from "./JournalEntries"

export const SideBar = () => {
    return (
        <aside className='journal__sidebar'>
            <div className='journal_sidebar-navbar'>
                <h3 className='mt-5'>
                    <i className='far fa-moon'></i>
                    <span> juna</span>
                </h3>
                <button className='btn'>
                    logout
                </button>
            </div>

            <div className='journal_new-entry'>
                <i className='far fa-calendar-plus fa-5x'></i>
                <p className='mt-5'>
                    New entry
                </p>
            </div>
            <JournalEntries />

        </aside>
    )
}
