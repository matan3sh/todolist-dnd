import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { updateList } from '../../store/actions';
import { Draggable } from 'react-beautiful-dnd';
import EditItem from '../modal/EditItem';

const Item = ({ todo, id, index, updateList }) => {
  const [openModal, setOpenModal] = useState(false);

  const onClose = () => setOpenModal(false);
  const onOpen = () => setOpenModal(true);
  return (
    <>
      <Draggable draggableId={String(id)} index={index}>
        {(provided) => (
          <div
            className='todo'
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div>
              <p className={`${todo.done ? 'done' : ''}`} onClick={onOpen}>
                {todo.title}
              </p>
              <small>{moment(todo.addedAt).fromNow()}</small>
            </div>
            <i
              className={`${
                todo.done ? 'far fa-check-square' : 'far fa-square'
              }`}
              onClick={() => updateList(todo)}
            ></i>
          </div>
        )}
      </Draggable>
      <EditItem onClose={onClose} openModal={openModal} todo={todo} />
    </>
  );
};

const mapDispatchToProps = {
  updateList,
};

export default connect(null, mapDispatchToProps)(Item);
