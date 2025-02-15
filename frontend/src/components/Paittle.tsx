import React from 'react'

const Paittle = (props: any) => {
  return (
    <div className="left-section w-25 rounded bg-dark min-h-80 d-flex flex-column gap-3 pt-5 px-2">
          <input  className={`email-title-form form-control ${props.isFocusTitle? '': 'd-none'}`} value={props.mailData.title.data} onInput={props.updateTitle} placeholder="Title" />
          <input  className={`email-author-form form-control ${props.isFocusAuthor? '': 'd-none'}`} value={props.mailData.author.data} onInput={props.updateAuthor} placeholder="Author" />
          <textarea name="" id="" className={`email-content-form form-control ${props.isFocusContent? '': 'd-none'}`} value={props.mailData.content.data} onChange={props.updateContent} placeholder="Content"></textarea>
          <input  className={`email-author-form form-control ${props.isFocusImage? '': 'd-none'}`}  type="file"
        accept="image/*" 
        onChange={props.handleImageChange} placeholder="Author" />
        <p className={`  text-danger ${props.isFocusImage? '': 'd-none'}`}>Please use images under 500KB</p>


        <input type="color" name="font-color" id="" className={`form-control rounded font-color-box ${(props.isFocusTitle || props.isFocusAuthor || props.isFocusContent)? '': 'd-none'}`}
         onChange={props.updateColor} />
        <select name="font-options" id="" className={`form-control ${(props.isFocusTitle || props.isFocusAuthor || props.isFocusContent)? '': 'd-none'}`}
        onChange={props.updateFont} >
          <option className='font-Times-New-Roman' value="font-Times-New-Roman">Times New Roman</option>
          <option className='font-Arial' value="font-Arial">Arial</option>
          <option className='font-Italic' value="font-Italic">Italic</option>
          <option className='font-Vardana' value="font-Vardana">Vardana</option>
          <option className='font-Sans-sarif' value="font-Sans-sarif">Sans serif</option>
        </select>
        </div>
  )
}

export default Paittle
