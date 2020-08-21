import storageService from './storageService';
import dbService from './dbService';

const KEY = 'todo-list';
var gList = null;
_createLists();

function _createLists() {
  gList = storageService.load(KEY);
  if (gList === null) {
    gList = dbService.getDefaultData();
    storageService.store(KEY, gList);
  }
}

const query = async () => {
  try {
    return Promise.resolve(gList);
  } catch (err) {
    console.log(err);
  }
};

function makeId(length = 11) {
  var txt = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

export default {
  query,
  makeId,
};
