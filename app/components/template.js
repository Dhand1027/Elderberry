import React from 'react';
import UInavbar from './ui-navbar.js';
import UIsidebar from './ui-sidebar.js';

export default class Template extends React.Component {
  render(){
    return (
              <div className="container-fluid">
                  <UInavbar />
                  <UIsidebar />
              </div>
    )
  }
}
