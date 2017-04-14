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
  // Resolve 'like' counter.
  user._id = user._id.map((id) => readDocument('users', id));
  user.fullName = user.fullName.map((id) => readDocument('users', id));
  user.masterFolder = user.masterFolder.map((id) => readDocument('users', id));

  // Assuming a StatusUpdate. If we had other types of
  // FeedItems in the DB, we would
  // need to check the type and have logic for each type.
  // Resolve comment author.
  user.masterFolder.forEach((item) => {
    item.title = readDocument('users', item.title);
    item.type = readDocument('users', item.type);
    item.content = readDocument('users', item.content);
    item.postDate = readDocument('users', item.postDate);
  });
  return user;
}

export function getData(user, cb) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  // Get the Feed object for the user.
  // Map the Feed's FeedItem references to actual FeedItem objects.
  // Note: While map takes a callback function as an argument, it is
  // synchronous, not asynchronous. It calls the callback immediately.
  userData = userData.map(getItemSync);
  // Return FeedData with resolved references.
  // emulateServerReturn will emulate an asynchronous server operation, which
  // invokes (calls) the "cb" function some time in the future.
  emulateServerReturn(userData, cb);
}
