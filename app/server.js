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
  user._id = readDocument('users', user._id);
  user.fullName = readDocument('users', user.fullName);
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
  userData.contents = userData.contents.map(getItemSync);
  emulateServerReturn(userData, cb);
}
