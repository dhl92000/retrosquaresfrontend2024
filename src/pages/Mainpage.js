import { Link } from "react-router-dom"
import Square from '../components/Square'
//import sampleData from '../data/sampledata'

const Mainpage = ({ allSquares, localDev, searchHashtagsFunc }) => {    

    return (
        <div className="flex flex-col items-center">
            <div className="text-burntorange font-spacemono w-2/3 p-4">
                <h1 className="text-lg font-bold">
                    Record your memories as polaroids and reminisce about the past with Retrosquares.
                </h1>
                <h4 className="text-justify text-sm">
                    Retrosquares was designed with React and Express.js. The images and backend are managed with AWS, and the app uses MySQL as its database.
                </h4>
            </div>

            <div className="flex flex-col items-center 
            md:flex-row flex-wrap justify-center items-center">

                {
                    allSquares.map((x) =>
                        <Link to={`/squares/${x.id}`} key={x.id}>
                            <Square searchHashtagsFunc={searchHashtagsFunc} image={x.img_url} description={x.squares_description} />
                        </Link>

                    )
                }

            </div>
        </div>

    )
}

export default Mainpage