import { useState } from "react"

const EditSquarePage = (props) => {

    const [squareToEdit, setSquareToEdit] = useState({
        squareToEdit: "",
        img_url: ""

    })

    const handleChange = () => {

    }

    return (
        <div class="flex flex-col  m-10">
            <div>
                <h1>
                    Edit Your Square
                </h1>
            </div>


            <form class="border-2 p-4">
                {/* caption */}
                <label for="squares_description">Caption:
                    <br></br>
                    <textarea name="Description" value={squareToEdit.Description} maxLength={140} class="border-2" onChange={handleChange} />
                </label>
                <br></br>

                <input type="file" name="image" value={squareToEdit.img_url} onChange={handleChange} />
                <br></br>

                <button type="submit" class="border-2">Post</button>
            </form>

        </div>
    )
}

export default EditSquarePage