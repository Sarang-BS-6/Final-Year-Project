import React, { useState } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import {AiFillFile} from 'react-icons/ai'
import './Upload.css'

function Upload() {

  const [image, setImage] = useState(null)
  const [filename, setFilename] = useState('No file chosen')  
  return (
    <div className='upload'>
        <h1>Water Body Extraction</h1>
        <h2>Upload Image</h2>
        <form className='upload-form' action="" 
        onClick={() => document.querySelector('.input-field').click()}>
            <input type="file" accept='image/*'className='input-field' hidden
            onChange={({target : {files}}) => {
                files[0] && setFilename(files[0].name)
                if (files){
                    setImage(URL.createObjectURL(files[0]))
                }
            }}
            />
            {image ? <img src={image} width={200} height={200} alt={filename} /> : <MdCloudUpload color='#0E87CC' size={60} />}
            <p>Browse Files to Upload</p>
        </form>
        <section className='uploaded-row'> 
            <AiFillFile color= "blue" />
            <span className='upload-content'>
                {filename}
                <MdDelete
                onClick={() => {
                    setFilename('No Selected File')
                    setImage(null)
                }} />
            </span>
        </section>
        <h2>Enter the Co-ordinates</h2>
        <form className='coord upload-form' action="">
            <input className='upload-coord' type="text" placeholder='Enter the coordinates'/>
            <button className="submit-upload">Submit</button>
        </form>
    </div>
  )
}

export default Upload