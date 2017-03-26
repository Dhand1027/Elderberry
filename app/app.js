/* Empty for now. :) */
import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import UIcalendar from './components/ui-calendar.js';
import UIfileEditor from './components/ui-fileEditor.js';
import UIfileExplorer from './components/ui-fileExplorer.js';
import UImaps from './components/ui-maps.js';
import UInotes from './components/ui-notes.js';


// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('ui-calendar') !== null) {
  React.render(<UIcalendar></UIcalendar>)
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
    <UIfileExplorer />,
    document.getElementById('ui-fileExplorer')
  );
} else if (document.getElementById('ui-map') !== null) {
  ReactDOM.render(
    <UImaps />,
    document.getElementById('ui-map')
  );
} else if (document.getElementById('ui-notes') !== null) {
  ReactDOM.render(
    <UInotes />,
    document.getElementById('ui-notes')
  );
}
