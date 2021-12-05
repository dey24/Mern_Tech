import React from 'react'

function Personal({formData, setFormData}) {
  return (
    <div className="sign-up-container">
      <input type="text" placeholder="First Name" value = {formData.firstName} onChange={(event) =>
          setFormData({ ...formData, firstName: event.target.value })
        }/>
      <input type="text" placeholder="Middle Name" value = {formData.middleName} onChange={(event) =>
          setFormData({ ...formData, middleName: event.target.value })
        }/>
      <input type="text" placeholder="Last Name" value = {formData.lastName} onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })
        }/>
    </div>
  )
}

export default Personal
