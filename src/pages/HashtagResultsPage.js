import { Link, useParams } from "react-router-dom"

const HashtagResultsPage = (props) => {

    const hashtags = props.foundHashtags

    return (
        <div class="
        flex flex-col items-center
        md:flex-row flex-wrap justify-center items-center
        ">
            {/* add onclick function to squares */}
            {
                // squares.map((x) =>
                //     <Link to={`/squares/${x.id}`} key={x.id}>
                //         <Square  image={x.img_url} description={x.squares_description} />
                //     </Link>

                // )
            }

            Found Hashtags

        </div>
    )
}

export default HashtagResultsPage