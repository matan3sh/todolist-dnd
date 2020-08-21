import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../store/actions';

import Modal from 'react-modal';
Modal.setAppElement('#root');

const AddItem = ({ openModal, onClose, addItem }) => {
  const [text, setText] = useState('');

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => onClose()}
      className={'addItem__modal'}
      overlayClassName={'addItem__overlay'}
    >
      <div className='addItem__header'>
        <h2>Add Item</h2>
        <i className='fas fa-tasks'></i>
      </div>
      <div className='addItem__body'>
        <textarea
          type='text'
          rows='3'
          placeholder='What to do ...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />{' '}
      </div>
      <div className='addItem__footer'>
        <button
          className='add'
          onClick={() => {
            addItem(text);
            onClose();
          }}
        >
          Add
        </button>
        <button className='close' onClick={() => onClose()}>
          Close
        </button>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(AddItem);
