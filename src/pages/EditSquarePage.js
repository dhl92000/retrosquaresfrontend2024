import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const EditSquarePage = (props) => {
    const navigate = useNavigate()

    // data for current single square
    const data = props.squaresData //props.allSquares

    const params = useParams()
    const id = params.id 
    let currentSquare = data[id]
    const singleSquare = data.find((square) => String(square.id) === id )

    //const [imagePreview, setImagePreview] = useState(singleSquare.img_url)

    // const [squareToEdit, setSquareToEdit] = useState({
    //     squares_description: '',
    //     //img_url: ''
    //     //hashtags
    //     // do i need id here?
    // })

    const [squareToEdit, setSquareToEdit ] = useState(singleSquare)

    // form input event listener 
    const handleChange = (identifier, value) => {
        setSquareToEdit(prev => ({
            ...prev,
            [identifier]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(squareToEdit)
        //console.log(squareToEdit)
        // navigate(`/squares/${currentSquare.id}'`)
        navigate(`/squares/${singleSquare.id}/`)
    }

    const deleteSquare = () => {
        props.deleteSquare()
        navigate(`/`)
    }

    return (
        <div class="flex flex-col items-center m-10">
            <div>
                <h1 class="font-spacemono text-burntorange text-2xl">
                    Edit Your Square
                </h1>
            </div>

            {/* handleSubmit function for submitting form  */}
            <form onSubmit={handleSubmit} class="flex flex-col items-center m-10">

                {/* image preview */}
                <div class="h-64 w-64 bg-orange-300 overflow-hidden ">
                    <img src={singleSquare.img_url} alt="Preview Uploaded Image" id="file-preview" />
                </div>

                {/* image upload
                <input class="m-4" type="file" accept="image/*" name="image" value={squareToEdit.img_url} onChange={(event) => handleChange('img_url', event.target.value)} /> */}

                {/* caption */}
                <label>Caption:
                    <br></br>
                    <textarea name="squares_description" value={squareToEdit.squares_description} maxLength={140} class="border-2" onChange={(event) => handleChange('squares_description', event.target.value)} placeholder={singleSquare.squares_description}/>
                </label>
                <br></br>

                <button class="bg-burntorange text-slate-100 rounded-md p-2 ">Update</button>
                
            </form>

        </div>
    )
}

export default EditSquarePage