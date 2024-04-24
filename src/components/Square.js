import { Link } from "react-router-dom"
const Square = ({ image, description }) => {

    let parsedDescription = description.split(' ')

    return (
        <div class="
        h-96 w-80 m-6 bg-slate-100
        md:h-96 w-80 shadow-xl
        ">
            <div className="text-burntorange font-spacemono px-6 pb-2 pt-6">
                username
            </div>

            <div className="h-64 w-64 mx-6 overflow-hidden relative" >
                <img className="absolute bottom-0" src={image} alt="Square" />
            </div>

            <div className="w-80 bg-slate-50">
                <div className="m-6 py-6 font-inter text-neutral-500">
                    {
                        parsedDescription.map((x) => {
                            if(x[0] !== '#'){
                                return x + ' '
                            } else {
                                return <Link to={`/hashtags/${x}`} className="text-blue-600"> {x} </Link>
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Square