import React from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import Item from './Item';

const Body = ({ list }) => {
  return (
    <Droppable droppableId={String(list?.id)}>
      {(provided) => (
        <div
          className='body'
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {list?.map((todo, index) => (
            <Item todo={todo} key={todo.id} id={todo.id} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const mapStateToProps = (state) => ({
  list: state.mainApp.list,
});

export default connect(mapStateToProps, null)(Body);
