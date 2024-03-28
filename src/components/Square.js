import { Link } from "react-router-dom"

const Square = (props) => {

    
    return (
        <div class="
        
        h-96 w-80 m-6 bg-yellow-300 border-4
        ">

            username
            <div class="h-64 w-64 bg-pink-300" >
                <img src={props.image} />
            </div>

            {props.description}
        </div>
    )
}

export default Square