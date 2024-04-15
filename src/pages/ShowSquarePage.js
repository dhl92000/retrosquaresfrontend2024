import { Link, useParams, useNavigate } from "react-router-dom"


const ShowSquarePage = (props) => {
    const navigate = useNavigate()
    // const data = props.allSquares
    const data = props.squaresData

    const params = useParams()
    const id = params.id
    // function using find() to return the first element matching the condition
    const singleSquare = data.find((square) => String(square.id) === id )
    
    const deleteSquare = () => {
        props.deleteSquare(singleSquare)
        navigate(`/`)
    }

    return (
            <div className="flex flex-col items-center">
                <div class="h-96 w-80 bg-slate-100 shadow-xl">
                    {/* username */}
                    <div class="text-burntorange font-spacemono px-6 pb-2 pt-6">
                        username
                    </div>

                    {/* image container */}
                    <div class="h-64 w-64 bg-orange-300 mx-6 overflow-hidden " >
                        {/* test image */}
                        {/* <img src={data[id].img_url} class="" /> */}
                        {<img src={singleSquare.img_url} />}
                    </div>

                    {/* squares description */}

                    <div class="w-80 bg-slate-50">
                        <div class="font-inter text-neutral-500 m-6 py-6">
                            {/* test description */}
                            {/* {data[id].squares_description} */}
                            {singleSquare.squares_description}

                        </div>
                    </div>
                </div>

                {/* Edit Delete buttons */}
                <div class="my-8">
                    <Link to={`/squares/${id}/edit`}>
                        <button class="bg-burntorange text-slate-100 rounded-md p-2 m-2">
                            Edit
                        </button>
                    </Link>


                    <button onClick={deleteSquare} class="bg-burntorange text-slate-100 rounded-md p-2 m-2">
                        Delete
                    </button>
                </div>

            </div>
    )
}

export default ShowSquarePage