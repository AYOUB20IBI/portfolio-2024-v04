
export default function Sidebar(){
    return(
        // Sidebar 
        <div className="sidebar">
            <a href="#" className="logo">
                <i className='bx bx-code-alt'></i>
                <div className="logo-name"><span>Asmr</span>Prog</div>
            </a>
            <ul className="side-menu">
                <li><a href="#"><i className='bx bxs-dashboard'></i>Dashboard</a></li>
                <li><a href="#"><i className='bx bx-store-alt'></i>Shop</a></li>
                <li className="active"><a href="#"><i className='bx bx-analyse'></i>Analytics</a></li>
                <li><a href="#"><i className='bx bx-message-square-dots'></i>Tickets</a></li>
                <li><a href="#"><i className='bx bx-group'></i>Users</a></li>
                <li><a href="#"><i className='bx bx-cog'></i>Settings</a></li>
            </ul>
            <ul className="side-menu">
                <li>
                    <a href="#" className="logout">
                        <i className='bx bx-log-out-circle'></i>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
        // End of Sidebar
    )
}