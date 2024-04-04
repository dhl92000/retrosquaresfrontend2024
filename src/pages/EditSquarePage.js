import { useState } from "react"

const EditSquarePage = (props) => {

    const [squareToEdit, setSquareToEdit] = useState({
        squareToEdit: "",
        img_url: ""
        //hashtags
    })

    const [imagePreview, setImagePreview] = useState()
    

    const handleChange = () => {
        setSquareToEdit(
            
        )
        console.log(squareToEdit)


    }

    return (
        <div class="flex flex-col items-center m-10">
            <div>
                <h1 class="font-spacemono text-burntorange text-2xl m-4">
                    Edit Your Square
                </h1>
            </div>


            <form class="border-2 p-4">
                
                {/* image preview */}
                <div class="h-64 w-64 bg-orange-300 mx-6 overflow-hidden ">
                    <img src="#" alt="Preview Uploaded Image" id="file-preview"/>
                </div>

                {/* image upload */}
                <input type="file" accept="image/*" name="image" value={squareToEdit.img_url} onChange={handleChange} />
                <br></br>

                {/* caption */}
                <label for="squares_description">Caption:
                    <br></br>
                    <textarea name="Description" value={squareToEdit.Description} maxLength={140} class="border-2" onChange={handleChange} />
                </label>
                <br></br>

                <button type="submit" class="bg-burntorange text-slate-100 rounded-md p-2 m-2">Post</button>
            </form>

        </div>
    )
}

export default EditSquarePage