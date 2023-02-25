import React from "react"
import "../components/css/Main.css"


function Form()
{
    const [formData,setFormData] = React.useState({
        fullName:"",
        mobileNumber:"",
        email:"",
        timeDate:"",
        city:"",
        comments:""
    })

console.log(formData)

    function handleChange(event)
    { 
        const {name,value} = event.target

        setFormData( prevFormData => {
          return {
              ...prevFormData,
              [name]:value
                 }
        
        })
    }

    function handleSubmit(){
        console.log(formData)
    }
    
    return (

<div>  
    

        <div className="main-right">
         <form onSubmit = {handleSubmit} action="https://formsubmit.co/s.shashidhar15@gmail.com" method="POST">       
            <h2 className="form-text"> Schedule an Appointment</h2>
            <input type="hidden" name="_next" value="http://localhost:3001/"></input>
            <input type="hidden" name="_autoresponse" 
            value="Hang on your consultation is booked and will get a call at the scheduled time please">
            </input>
           
          
        <div className="form-container">
          <label>Your Full Name  
          <input type="text" 
            placeholder="Name" 
            className="form-input"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}/></label> 

          <label>Phone Number         
            <input type="text" 
            placeholder="Mobile number" 
            className="form-input" 
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}/> </label>
           
           
           <label>Email Address          
            <input type="email" 
           
            placeholder="Email Address" 
            className="form-input" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            /> </label>
                 
           <label htmlFor="city">Select your city?</label>
            <select 
                id="city"
                className="form-input" 
                value={formData.city}
                onChange={handleChange}
                name="city">
                <option value="">-- Choose --</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
            </select> 
           <br></br>
           <br></br>
            <textarea 
             className="form-input" 
                value={formData.comments}
                placeholder="add details"
                onChange={handleChange}
                name="comments"
            />
            
     </div>
   
        <button className= "btn form-button"> Submit </button>
        </form>  
    </div>
</div>
    )
}

export default Form
         