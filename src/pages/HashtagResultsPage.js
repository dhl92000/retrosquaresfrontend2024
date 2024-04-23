import { Link } from "react-router-dom"
import Square from "../components/Square"

const HashtagResultsPage = ({ foundHashtags }) => {

    const found = () => {
        <div class="
        flex flex-col items-center
        md:flex-row flex-wrap justify-center items-center">
            Found Squares:
            {
                foundHashtags.map((x) =>
                    <Link to={`/squares/${x.id}`} key={x.id}>
                        <Square image={x.img_url} description={x.squares_description} />
                    </Link>
                )
            }
        </div>
    }

    const noResults = () => {
        <div>
            Nothing found
            <Link to='/'>
                Back Home
            </Link>
        </div>
    }

    return (
        foundHashtags ? found() : noResults()
    )
}

export default HashtagResultsPage