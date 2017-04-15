import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import UInavbar from './components/ui-navbar.js';
import UIsidebar from './components/ui-sidebar.js';
import Template from './components/template.js';
import UIcalendar from './components/ui-calendar.js';
import UIfileEditor from './components/ui-fileEditor.js';
import UIfileExplorer from './components/ui-fileExplorer.js';
import UImaps from './components/ui-maps.js';
import UInotes from './components/ui-notes.js';


// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('ui-calendar') !== null) {
  ReactDOM.render(
    <UIcalendar />,
    document.getElementById('ui-calendar')
  );
} else if (document.getElementById('ui-fileEditor') !== null) {
  ReactDOM.render(
    <UIfileEditor />,
    document.getElementById('ui-fileEditor')
  );
} else if (document.getElementById('ui-fileExplorer') !== null) {
  ReactDOM.render(
    <UIfileExplorer user = {4}/>,
    document.getElementById('ui-fileExplorer')
  );
} else if (document.getElementById('ui-maps') !== null) {
  ReactDOM.render(
    <UImaps />,
    document.getElementById('ui-maps')
  );
} else if (document.getElementById('ui-notes') !== null) {
  ReactDOM.render(
    <UInotes />,
    document.getElementById('ui-notes')
  );
} else if (document.getElementById('template') !== null) {
  ReactDOM.render(
    <Template />,
    document.getElementById('template')
  );
} else if (document.getElementById('ui-navbar') !== null) {
  ReactDOM.render(
    <UInavbar />,
    document.getElementById('ui-navbar')
  );
} else if (document.getElementById('ui-sidebar') !== null) {
  ReactDOM.render(
    <UIsidebar />,
    document.getElementById('ui-sidebar')
  );
}
