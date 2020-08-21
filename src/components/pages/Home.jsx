import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadList, sort } from '../../store/actions';
import { DragDropContext } from 'react-beautiful-dnd';

import Header from '../app/Header';
import Body from '../app/Body';
import Footer from '../app/Footer';

const Home = ({ loadList, sort }) => {
  useEffect(() => {
    loadList();
  }, [loadList]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    const properties = {
      droppableIdStart: source.droppableId,
      droppableIdEnd: destination.droppableId,
      droppableIndexStart: source.index,
      droppableIndexEnd: destination.index,
      draggableId,
    };
    sort(properties);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='container'>
        <div className='wrapper'>
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    </DragDropContext>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  loadList,
  sort,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
