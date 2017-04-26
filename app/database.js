import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var Jeeves = null;

// Put your mock objects here, as in Workshop 4
var initialData = {
  "users": {
    // For now, we'll use the user code the workshops to emulate the user's personal info.
    // "Folder" corresponds to "feed" from the workshop code here as we are aiming to create different folder views.

      // This user has id "1".
      "1": {
        "_id": 1,
        "fullName": "Someone",
        "masterFolderID": 1
      },
      "2": {
        "_id": 2,
        "fullName": "Someone Else",
        "masterFolderID": 2
      },
      "3": {
        "_id": 3,
        "fullName": "Another Person",
        "masterFolderID": 2
      },
      // This is "you"!
      "4": {
        "_id": 4,
        "fullName": "Jeeves User",
        // ID of your feed.
        "masterFolderID": 4
      }
    },

    "masterFolders": {
      "4": {
        "_id": 4,
        "contents": [1, 2, 3]
      },
      "3": {
        "_id": 3,
        "contents": []
      },
      "2": {
        "_id": 2,
        "contents": []
      },
      "1": {
        "_id": 1,
        "contents": []
      }
    },

    "files":{
        "1":{
          "title": "To Do List",
          "type": "file",
          "contents":"Homework",
          "postDate":  1453690800000,
          "idx":1,
          "owner":4
        },
        "2":{
          "title": "Gym Routines",
          "type": "folder",
          "contents":[
            {
              "title": "Leg day",
              "type": "file",
              "contents":"Workout",
              "postDate":  1453690800000,
              "idx":1,
              "owner":4
            },
            {
              "title": "Bicep",
              "type": "file",
              "contents":"Workout",
              "postDate":  1453690800000,
              "idx":2,
              "owner":4
            },
            {
              "title": "BeforePic",
              "type": "picture",
              "contents":"Picture",
              "postDate":  1453690800000,
              "idx":3,
              "owner":4
            }
          ],
          "postDate":  1453690800000,
          "idx":2,
          "owner":4
        },
      "3":{
      "title": "Shopping List",
      "type": "folder",
      "contents":[
        {
        "title":"Groceries",
        "type": "file",
        "contents":"Fruits",
        "postDate":  1453690800000,
        "idx":1,
        "owner":4
        }
        ],
        "idx":3,
        "owner":4,
      "notes": [
      {
        "_id": 1,
        "title": "CS326",
        "type": "notes",
        "contents":"This is loading from the databse",
        "postDate":  1453690800000
      },
      {
        "_id": 2,
        "title": "Workshop3",
        "type": "notes",
        "contents": "This Workshop3 is loading from database",
        "postDate":  1453690800000
        }
      ]
      }
    }
  };

var data = JSON.parse(localStorage.getItem(Jeeves));
if (data === null) {
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  localStorage.setItem(Jeeves, JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase() {
  localStorage.setItem(Jeeves, JSON.stringify(initialData));
  data = JSONClone(initialData);
}

/**
 * Reset database button.
 */
class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}
