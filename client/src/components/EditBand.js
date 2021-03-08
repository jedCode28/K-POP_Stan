import {useState} from 'react'
import axios from 'axios'
const EditBand = (props) => {

    const {id} = props
    
    const [name, setName] = useState(props.name)
    const [description, setDescription] = useState(props.description)
    const [sales, setSales] = useState(props.sales)




    const handleSubmit = async (e) => {
       e.preventDefault()
       let band = {name, description, sales}
       console.log(band)
       
       let res = await axios.put(`/api/bands/${id}`, band)
       console.log(res)
    }

    return (

        <div className='band-form'>
            <h1>Edit Band Details</h1>
            <form onSubmit={handleSubmit}>
                <h2>Name</h2>
                <input value={name} onChange={(e) => setName(e.target.value)} />

                <h2>Description</h2>
                <input value={description} onChange={(e) => setDescription(e.target.value)} />

                <h2>Album Sales</h2>
                <input value={sales} onChange={(e) => setSales(e.target.value)} />

                <button type={'submit'}>Update</button>
            </form>
            
        </div>
    )
}

export default EditBand
