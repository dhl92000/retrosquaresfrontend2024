import { useState } from "react"
import { useNavigate } from "react-router-dom"

const UploadPage = (props) => {
    const navigate = useNavigate()
    // const [description, setDescription] = useState()
    // const [file, setFile] = useState()

    // const handleFileChange = (e) => {
    //     setFile(e.target.files[0])
    //     console.log(e.target.files[0])
    // }

    // const handleChange = (e) => {
    //     setDescription(e.target.value)
    //     console.log(description)
    // }

    //state holding data for request body to be sent
    const [formData, setFormData] = useState({
        //keyName: "",
        Description: "",
        image: ""
    })

    // function for form input
    // const handleChange = (event) => {
    //     setFormData({ ...formData, 
    //         ['event.target.name']: event.target.value
    //     })
    //     console.log(formData)
    // }

    // function for form submit
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const fd = new FormData(event.target)
        console.log(fd)
        //Object constructor makes an object out of the form entries
        // const data = Object.fromEntries(fd.entries())
        // console.log(data)
        props.handleUpload(fd)
        navigate(`/`)
    
    }

    return (
        <div class="flex flex-col items-center m-10">
            <div>
                <h1 class="font-spacemono text-burntorange text-2xl">
                    Create a Retrosquare
                </h1>
            </div>


            <form onSubmit={handleFormSubmit} class="flex flex-col items-center m-10"  >
                {/* image preview */}
                <div class="h-64 w-64  mx-6 overflow-hidden border-4 border-dashed rounded-lg">
                    <img  alt="Preview Uploaded File" id="file-preview" />
                </div>

                {/* image upload */}
                <input type='file' accept=".jpg, .jpeg, .png" name="image"   />
                <br></br>

                {/* caption */}
                <label >Caption:
                    <br></br>
                    <textarea name="Description"  maxLength={140} class="border-2"  />
                </label>
                <br></br>

                <button type="submit" class="bg-burntorange text-slate-100 rounded-md p-2 m-2">Post</button>
            </form>

        </div>
    )
}

export default UploadPage