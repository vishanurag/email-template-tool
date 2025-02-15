import React from 'react'

const EmailTemplateCanvas = (props: any) => {
  return (
    <div className="left-section w-75 d-flex justify-content-center align-items-center">
          <div className="main-canvas w-75 bg-white rounded min-h-80">
            <div className="email-body rounded min-h-80 pt-5 p-2 d-flex flex-column justify-content-start gap-3 align-items-center position-relative" >

              <img onClick={e => { props.setIsFocusImage(!props.isFocusImage), props.setIsFocusAuthor(false), props.setIsFocusContent(false), props.setIsFocusTitle(false) }}
               className={`border border-${props.isFocusImage ? 'primary' : 'light'} p-2 border-3 rounded`} 
               style={{ maxWidth: "100%", maxHeight: "200px" }} src={props.mailData.image.data} alt={props.mailData.title.data} />
              <h2 onClick={e => { props.setIsFocusTitle(!props.isFocusTitle), props.setIsFocusImage(false), props.setIsFocusAuthor(false), props.setIsFocusContent(false) }}
               className={`${props.mailData.title.font} border border-${props.isFocusTitle ? 'primary' : 'light'} p-2 border-3 rounded`} 
               style={{ maxWidth: "80%", maxHeight: "max-content", color: props.mailData.title.color, fontFamily: props.mailData.title.font }} >
                {props.mailData.title.data}
                </h2>
              <p onClick={e => { props.setIsFocusContent(!props.isFocusContent), props.setIsFocusImage(false), props.setIsFocusAuthor(false), props.setIsFocusTitle(false) }}
               className={`${props.mailData.content.font} border border-${props.isFocusContent ? 'primary' : 'light'} p-2 border-3 rounded`} 
               style={{ maxWidth: "70%", maxHeight: "max-content", textAlign: "justify", color: props.mailData.content.color, fontFamily: props.mailData.content.font }} >
                {props.mailData.content.data}
                </p>
              <b onClick={e => { props.setIsFocusAuthor(!props.isFocusAuthor), props.setIsFocusImage(false), props.setIsFocusContent(false), props.setIsFocusTitle(false) }}
               className={ `${props.mailData.author.font}  border border-${props.isFocusAuthor ? 'primary' : 'light'} p-2 border-3 rounded`} 
               style={{ maxWidth: "25%", maxHeight: "max-content", textAlign: "left", position: "absolute", bottom: "10px", left: "10px", color: props.mailData.author.color, fontFamily: props.mailData.author.font }} >
                {props.mailData.author.data}
                </b>

            </div>
          </div>
        </div>
  )
}

export default EmailTemplateCanvas
