import { useState } from "react"

const UploadPage = (props) => {

    //state holding data for request body to be sent
    const [formData, setFormData] = useState({
        keyName: "",
        squares_description: "",
        image: ""
    })

    console.log(formData)

    // function for form input
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    // function for form submit
    const handleForm = (event) => {
        event.preventDefault()

        setFormData({
            Description: "",
            image: ""
        })

        props.handleUpload(formData)
    }

    return (
        <div class="flex flex-col items-center m-10">
            <div>
                <h1 class="font-spacemono text-burntorange text-2xl m-4">
                    Create a Retrosquare
                </h1>
            </div>


            <form class="border-2 p-4"  >
                {/* image preview */}
                <div class="h-64 w-64 bg-orange-300 mx-6 overflow-hidden ">
                    <img src="#" alt="Preview Uploaded Image" id="file-preview" />
                </div>

                {/* image upload */}
                <input type="file" accept=".jpg, .jpeg, .png" name="image" value={formData.img_url} onChange={handleChange} />
                <br></br>

                {/* caption */}
                <label for="squares_description">Caption:
                    <br></br>
                    <textarea name="Description" value={formData.Description} maxLength={140} class="border-2" onChange={handleChange} />
                </label>
                <br></br>

                <button type="submit" class="bg-burntorange text-slate-100 rounded-md p-2 m-2">Post</button>
            </form>

        </div>
    )
}

export default UploadPage