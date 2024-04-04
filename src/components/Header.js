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

            <div class="text-burntorange">
                <input type="text" placeholder="Search hashtags" class="border-2 rounded-lg p-2 mx-2"></input>
                <Link>
                    <button>
                        <div class="bg-slate-100 rounded-lg p-2">
                            Go
                        </div>
                    </button>
                </Link>

            </div>

            <div>
                <Link to="/upload" class="text-burntorange border-2 p-2 m-4 rounded-lg">
                    + Upload
                </Link>

                <Link to='/login' class="bg-rose-600 text-zinc-50 p-2 m-4 rounded-lg">
                    Login
                </Link>
            </div>

        </div>
    )
}

export default Header