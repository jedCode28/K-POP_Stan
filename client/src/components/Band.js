const Band = (props) => {
  
   
    const { name, description, sales } = props
    
    return (
      <>
        <h1>{name}</h1>
        <p>Description: {description} sales:{sales} </p>
      </>
    )
  }
  
  export default Band