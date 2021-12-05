import React, {useState} from 'react'
import SignUpInfo from './SignUpInfo';
import Personal from './Personal';
import Other from './Other';

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        middleName: '',
        lastName: '',
        contactNumber: '',
        alternateNumber: '',
    });

    const FormTitles = ["SignUp", "Personal Info", "Other Info"]

    const PageDisplay = () => {
        if(page === 0){
            return <SignUpInfo formData = {formData} setFormData = {setFormData} />
        }else if(page === 1){
            return <Personal  formData = {formData} setFormData = {setFormData} />
        }else{
            return <Other  formData = {formData} setFormData = {setFormData}/>
        }
    }
    return (
    <div className="form">
      <div className="progressbar">
          <div style={{width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"}}></div>
      </div>
      <div className="form-container">
          <div className="header">
              <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">
              {PageDisplay()}
          </div>
          <div className="footer">
              <button 
              disabled={page === 0}
              onClick={() => setPage((currPage) => currPage -1)}>Prev</button>
              
              <button  
              onClick ={() => {
                  if(page === FormTitles.length - 1) {
                      alert("Successfully Submitted")
                  }else{
                      setPage((currPage) => currPage + 1);
                  }
              }}>{page === FormTitles.length - 1 ? "Submit" : "Next"}</button>
          </div>
      </div>
    </div>
  )
}
export default Form