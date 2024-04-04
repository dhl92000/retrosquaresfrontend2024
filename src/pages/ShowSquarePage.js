import { Link, useParams } from "react-router-dom"


const ShowSquarePage = (props) => {
    const data = props.allSquares

    const params = useParams()
    const id = params.id
    console.log(data[id]) //2

    return (
            <div class="flex flex-col items-center">
                <div class="h-96 w-80 bg-slate-100 shadow-xl">
                    {/* username */}
                    <div class="text-burntorange font-spacemono px-6 pb-2 pt-6">
                        username
                    </div>

                    {/* image container */}
                    <div class="h-64 w-64 bg-orange-300 mx-6 overflow-hidden " >
                        <img src={data[id].img_url} class="" />
                    </div>

                    {/* squares description */}

                    <div class="w-80 bg-slate-50">
                        <div class="font-inter text-neutral-500 m-6 py-6">
                            {data[id].squares_description}
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


                    <button class="bg-burntorange text-slate-100 rounded-md p-2 m-2">
                        Delete
                    </button>
                </div>

            </div>
    )
}

export default ShowSquarePage