import { useNavigate } from "react-router-dom"


const SearchBar = ({searchTextState, setSearchTextState, searchHashtagsFunc}) => {
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        searchHashtagsFunc(searchTextState)
        navigate(`/hashtags/${searchTextState}`)
    }

    return (
        <div class="text-burntorange">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={searchTextState} value={searchTextState} onChange={(e)=> setSearchTextState(e.target.value.toLowerCase())} class="border-2 rounded-lg p-2 mx-2" />

                <button type="submit" class="bg-slate-100 rounded-lg p-2">
                        Go
                </button>
            </form>



        </div>
    )
}

export default SearchBar