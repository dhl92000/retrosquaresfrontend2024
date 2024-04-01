import { Link } from "react-router-dom"
import Square from '../components/Square'
import sampleData from '../data/sampledata'

const Mainpage = (props) => {
    const squares = sampleData


    const allSquares = sampleData

    return (
        <div class="
        flex flex-col items-center
        md:flex-row flex-wrap justify-center items-center
        ">
            {/* add onclick function to squares */}
            {
                squares.map((x) =>
                    <Link to={`/squares/${x.id}`} key={x.id}>
                        <Square  image={x.img_url} description={x.squares_description} />
                    </Link>

                )
            }

        </div>
    )
}

export default Mainpage