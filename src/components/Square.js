import { Link } from "react-router-dom"

const Square = (props) => {


    return (
        <div class="
        h-96 w-80 m-6 bg-slate-100
        md:h-96 w-80 shadow-xl
        ">
            <div class="text-burntorange font-spacemono px-6 pb-2 pt-6">
                username
            </div>

            <div class="h-64 w-64 mx-6 overflow-hidden" >
                <img src={props.image} />
            </div>

            <div class="w-80 bg-slate-50">
                <div class="m-6 py-6 font-inter text-neutral-500">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default Square