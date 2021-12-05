import React, {useState} from 'react'

function Form() {
    const [page, setPage] = useState(0);

    const FormTitles = ["SignUp", "Personal Info", "Other Info"]
    return (
    <div className="form">
      <div className="progressbar"></div>
      <div className="form-container">
          <div className="header">
              <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body"></div>
          <div className="footer">
              <button 
              disabled={page === 0}
              onClick={() => setPage((currPage) => currPage -1)}>Prev</button>
              
              <button
              disabled={page === FormTitles.length - 1}  
              onClick={() => setPage((currPage) => currPage + 1)}>Next</button>
          </div>
      </div>
    </div>
  )
}
export default Form