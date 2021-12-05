import React from 'react'

function Other({formData, setFormData}) {
  return (
    <div className="sign-up-container">
      <input type="text" placeholder="Contact Number" value = {formData.contactNumber} onChange={(event) =>
          setFormData({ ...formData, contactNumber: event.target.value })
        }/>
      <input type="text" placeholder="Alternate Number" value = {formData.alternateNumber} onChange={(event) =>
          setFormData({ ...formData, alternateNumber: event.target.value })
        }/>
    </div>
  )
}

export default Other
