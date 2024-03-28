import { Link, useParams } from "react-router-dom"


const ShowSquarePage =(props)=>{
    const data = props.allSquares

    const params = useParams()
    const id = params.id
    console.log(data[id]) //2

    return(
        <div class="
        
        h-96 w-80 m-6 bg-yellow-300 border-4
        ">

            username
            <div class="h-64 w-64 bg-orange-300" >
                <img src={data[id].img_url} />
            </div>

            {props.description}

            <button class="border-2 p-2 m-2">
                Edit
            </button>

            <button class="border-2 p-2 m-2">
                Delete
            </button>
        </div>
    )
}

export default ShowSquarePage