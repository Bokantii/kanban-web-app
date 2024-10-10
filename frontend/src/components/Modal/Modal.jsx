import React from 'react'
import classes from './Modal.module.scss';
import AddNewTask from '../AddNewTask/AddNewTask';
import { ModalContext } from '../../store/modal-context';
import { useContext } from 'react';
const Modal = ({children}) => {
    const modalCtx=useContext(ModalContext);
  return (
    <section className={classes.modal} style={{display:modalCtx.modalIsOpen}}>
        {children}
    </section>
  )
}

export default Modal;