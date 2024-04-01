import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <h4 class="font-spacemono text-burntorange text-center m-12">Designed by 
                <Link to="https://github.com/dhl92000" class="animate-pulse">
                    {' '}Dahee
                </Link>
            </h4>
        </>
    )



}

export default Footer