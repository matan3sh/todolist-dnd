const gDefaultList = [
  {
    id: '13mkopreyu8',
    title: 'Go Work Out',
    done: true,
    addedAt: new Date(),
  },
  {
    id: 'bnHg67iud13',
    title: 'Complete One Section in React Native Course',
    done: true,
    addedAt: new Date(),
  },
  {
    id: 'cvbfgtEhj09',
    title: 'Developed a todo list with dnd',
    done: false,
    addedAt: new Date(),
  },
];

function getDefaultData() {
  return gDefaultList;
}

export default {
  getDefaultData,
};
