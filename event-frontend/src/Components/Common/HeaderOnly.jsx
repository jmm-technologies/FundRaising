import React from 'react'

function HraderOnly({title,subTitle}) {
  return (
    <div className="custom-card-header ">
    <div>
      <h2 className="f-18 text-primary fw-500">{title}</h2>
      <p className="text-muted f-12 my-1">{subTitle}</p>
    </div>
  </div>
  )
}

export default HraderOnly
