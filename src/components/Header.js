import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const Header = ({searchHashtagsFunc, searchTextState, setSearchTextState}) => {

    return (
        <div className="
        flex flex-col m-4 items-center
        md:flex md:flex-row md:justify-between ">
            <Link to='/'>
                <h1 className="text-burntorange font-spacemono font-bold text-3xl mx-4 p-4">
                    Retrosquares
                </h1>
            </Link>

            {/* <div class="text-burntorange">
                <form>
                    <input type="text" placeholder="Search hashtags" class="border-2 rounded-lg p-2 mx-2" />
                </form>

                <Link to={'/hashtags/'}>
                    <button  >
                        <div class="bg-slate-100 rounded-lg p-2">
                            Go
                        </div>
                    </button>
                </Link>
            </div> */}

            <SearchBar searchTextState={searchTextState} setSearchTextState={setSearchTextState} searchHashtagsFunc={searchHashtagsFunc}/>

            <div class="m-6">
                <Link to="/upload" className="text-burntorange border-2 p-2 m-4 rounded-lg">
                    + Upload
                </Link>

                <Link to='/login' className="bg-rose-600 text-zinc-50 p-2 m-4 rounded-lg">
                    Login
                </Link>
            </div>

        </div>
    )
}

export default Header