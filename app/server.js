import {readDocument, writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

function getItemSync(UserId) {
  var user = readDocument('users', UserId);
  user._id = user._id.map((id) => readDocument('users', id));
  user.fullName = user.fullName.map((id) => readDocument('users', id));
  user.masterFolder = user.masterFolder.map((id) => readDocument('users', id));
  user.masterFolder.forEach((item) => {
    item.title = readDocument('users', item.title);
    item.type = readDocument('users', item.type);
    item.content = readDocument('users', item.content);
    item.postDate = readDocument('users', item.postDate);
  });
  return user;
}

export function getData(user, cb) {
  var userData = readDocument('users', user);
  userData = userData.map(getItemSync);
  emulateServerReturn(userData, cb);
}
