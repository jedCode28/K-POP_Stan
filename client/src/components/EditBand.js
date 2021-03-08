import React from 'react'

const EditBand = ({ id, name, description, sales}) => {
    
    const handleSubmit = async (e) => {
       e.preventDefault()
       let band = {name, description, sales}
       console.log(band)
       
       let res = await axios.put(`/api/facts/${id}`, band)
       console.log(res)
    }

    return (

        <div className='band-form'>
            <h1>Edit Band Details</h1>
            <form onSubmit={handleSubmit}>
                <h2>Name</h2>
                <input value={text} onChange={(e) => setText(e.target.value)} />

                <h2>Description</h2>
                <input value={description} onChange={(e) => setText(e.target.value)} />

                <h2>Album Sales</h2>
                <input value={sales} onChange={(e) => setText(e.target.value)} />

            </form>
            
        </div>
    )
}

export default EditBand
