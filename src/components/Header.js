import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const Header = ({ searchHashtagsFunc, searchTextState, setSearchTextState }) => {

    return (
        <>
            <div className="text-center text-xs font-spacemono text-slate-400 m-4">
                <span className="bg-amber-100"> PS. You are visiting a local version of the app ;) Thanks for visiting! </span>
            </div>
            <div className="
        flex flex-col m-4 items-center
        md:flex md:flex-row md:justify-between ">
                <Link to='/'>
                    <h1 className="text-burntorange font-spacemono font-bold text-3xl p-4">
                        Retrosquares
                    </h1>
                </Link>

                <SearchBar searchTextState={searchTextState} setSearchTextState={setSearchTextState} searchHashtagsFunc={searchHashtagsFunc} />

                <div class="m-6">
                    <Link to="/upload" className="bg-rose-600 text-zinc-50 p-2 m-8 rounded-lg">
                        + Upload
                    </Link>

                    {/* <Link to='/login' className="bg-rose-600 text-zinc-50 p-2 m-4 rounded-lg">
                    Login
                </Link> */}
                </div>

            </div>
        </>
    )
}

export default Header