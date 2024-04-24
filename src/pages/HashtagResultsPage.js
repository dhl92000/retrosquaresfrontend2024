import { Link} from "react-router-dom"
import Square from "../components/Square"

const HashtagResultsPage = ({ foundHashtags }) => {

    const found = () => {
        return (
            <div className="
            flex flex-col items-center
            md:flex-row flex-wrap justify-center items-center">
                {
                    foundHashtags.map((x) =>
                        <Link to={`/squares/${x.id}`} key={x.id}>
                            <Square image={x.img_url} description={x.squares_description} />
                        </Link>
                    )
                }
                
            </div>
        )
    }

    const noResults = () => {
        return (
            <div className="h-fit text-center">
                <section className="m-20 text-4xl font-spacemono">
                    <h1> No Squares with that hashtag </h1>
                </section>

                <Link to='/'>
                    <button>
                        <h1 class="bg-burntorange text-slate-100 rounded-md p-3">
                            Home
                        </h1>
                    </button>
                </Link>
            </div>
        )
    }

    return foundHashtags.length > 0 ? found() : noResults()
}

export default HashtagResultsPage