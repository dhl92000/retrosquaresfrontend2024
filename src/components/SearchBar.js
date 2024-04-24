import { useNavigate } from "react-router-dom"


const SearchBar = ({searchTextState, setSearchTextState, searchHashtagsFunc}) => {
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        searchHashtagsFunc(searchTextState)
        navigate(`/hashtags/${searchTextState}`)
    }

    return (
        <div className="text-burntorange font-spacemono">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search hashtags" value={searchTextState} onChange={(e)=> setSearchTextState(e.target.value.toLowerCase())} className="border-2 rounded-lg p-2 mx-2" />

                <button type="submit" className="bg-slate-100 rounded-lg p-2">
                        GO
                </button>
            </form>



        </div>
    )
}

export default SearchBar