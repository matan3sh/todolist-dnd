import React, { useState } from 'react';
import AddItem from '../modal/AddItem';

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);

  const onClose = () => setOpenModal(false);
  const onOpen = () => setOpenModal(true);

  return (
    <>
      <div className='footer'>
        <span onClick={onOpen}>
          <i className='fas fa-plus'></i>
        </span>
      </div>
      <AddItem onClose={onClose} openModal={openModal} />
    </>
  );
};

export default Footer;
