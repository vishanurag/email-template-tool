import React from 'react'

const TitleSection = (props) => {
  return (
    <div className="top-section w-100 h4 px-3  text-light p-2">
        {props.mailData.title.data}
      </div>
  )
}

export default TitleSection
