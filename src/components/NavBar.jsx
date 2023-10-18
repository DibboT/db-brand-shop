import { Link } from "react-router-dom";

const NavBar = () => {
    const NavLink = <>
        <Link to="/home">Home</Link>
        <Link to="/aboutus">Add Product</Link>
        <Link to="/login">My Cart</Link>
        <Link to="/register">Login</Link>

    </>
    return (
        <div>
            <div className="mb-40">

                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1583)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Welcome to DB Eventcon</h1>


                        </div>
                    </div>
                </div>

                <div className="navbar text-white z-10 absolute top-0 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {NavLink}
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">The Db Eventcon</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-10 text-[16px]">
                            {NavLink}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default NavBar;