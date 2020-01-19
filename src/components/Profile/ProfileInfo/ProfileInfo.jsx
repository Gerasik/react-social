import React from "react"
import mainImg from "./first-img.jpg"
import styles from "./profileInfo.module.scss"

const ProfileInfo = () => (
    <img 
        src={mainImg} 
        alt="main-photography" 
        className={styles._image}
    />
)

export default ProfileInfo;