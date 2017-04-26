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

function getItemSync(folderId) {
    var folder = readDocument('files', folderId);
    return folder;
  }

  export function getData(user, cb) {
    var userData = readDocument('users', user);
    var masterFolderData = readDocument('masterFolders', userData.masterFolderID);
    masterFolderData.contents = masterFolderData.contents.map(getItemSync);
    emulateServerReturn(masterFolderData, cb);
  }
