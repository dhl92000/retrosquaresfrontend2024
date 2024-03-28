import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div class="
        flex-col  m-4
        md:flex md:flex-row md:justify-between ">
            <Link to='/'>
                <h1 class="text-burntorange font-spacemono font-bold text-3xl mx-4">
                    Retrosquares
                </h1>
            </Link>

            <div>
                <input type="text" placeholder="Search" class="border-2"></input>
                <button>Go</button>
            </div>

            <div>
                <Link to="/upload" class="border-2 p-2 m-4">
                    + Upload
                </Link>

                <Link to='/login' class="bg-rose-600 text-zinc-50 p-2 m-4">
                    Login
                </Link>

            </div>

        </div>
    )
}

export default Header