import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editItem, deleteItem } from '../../store/actions';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const EditItem = ({ openModal, onClose, todo, editItem, deleteItem }) => {
  const [text, setText] = useState(todo.title);

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => onClose()}
      className={'editItem__modal'}
      overlayClassName={'editItem__overlay'}
    >
      <div className='editItem__header'>
        <h2>Edit/Delete Item</h2>
        <i className='fas fa-tasks'></i>
      </div>
      <div className='editItem__body'>
        <textarea
          type='text'
          rows='3'
          placeholder='What to do ...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='editItem__footer'>
        <button
          className='edit'
          onClick={() => {
            editItem(todo, text);
            onClose();
          }}
        >
          Update
        </button>
        <button
          className='delete'
          onClick={() => {
            deleteItem(todo.id);
            onClose();
          }}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = {
  editItem,
  deleteItem,
};

export default connect(null, mapDispatchToProps)(EditItem);
