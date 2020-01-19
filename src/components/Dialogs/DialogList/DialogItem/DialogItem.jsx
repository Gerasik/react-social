import React from "react"
import styles from "./dialogitem.module.scss"
import {NavLink} from 'react-router-dom'

const DialogItem = ({name, id}) => 
    <NavLink to={`/dialogs/${id}`} className={styles._item} activeClassName={styles['_item--active']}>{name}</NavLink>

export default DialogItem;