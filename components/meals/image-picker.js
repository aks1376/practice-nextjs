"use client"

import { useRef, useState } from "react"
import classes from "./image-picker.module.css"
import Image from "next/image"

export function ImagePicker({ label, name }) {

  const [pickedImage, setPickedImage] = useState()
  const imageInput = useRef()

  function handlePickClick() {
    imageInput.current.click()
  }

  function handleImageChange(event) {
    const file = event.target.files[0]

    if (!file) return

    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }

  return <div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={classes.controls}>
      <div className={classes.preview}>
        {!pickedImage && <p>No image picked yet</p>}
        {pickedImage && <Image src={pickedImage} alt="the image selected by user" fill />}
      </div>
      <input type="file"
        id={name}
        name={name}
        className={classes.input}
        accept="image/png,image/jpeg"
        ref={imageInput}
        onChange={handleImageChange}
      />

      <button type="button" className={classes.button} onClick={handlePickClick}>
        Pick an image
      </button>
    </div>
  </div>
} 