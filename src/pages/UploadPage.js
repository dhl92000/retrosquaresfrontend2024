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
        setFormData({...formData, [event.target.name]: event.target.value})
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
        <div class="flex flex-col w-1/3 ">
            <div>
                <h1>
                    Create a Retrosquare
                </h1>
            </div>


            <form class="border-2 p-4">
                {/* caption */}
                <label for="squares_description">Caption:
                    <br></br>
                    <textarea name="Description" value={formData.Description} maxLength={140} class="border-2" onChange={handleChange} />
                </label>
                <br></br>

                <input type="file" accept=".jpg, .jpeg, .png" name="image" value={formData.img_url} onChange={handleChange}/>
                <br></br>

                <button type="submit" class="border-2">Post</button>
            </form>

        </div>
    )
}

export default UploadPage