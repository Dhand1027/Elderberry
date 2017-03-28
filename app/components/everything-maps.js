import React from 'react';
import UImaps from './ui-maps.js';
import UInavbar from './ui-navbar.js';
import UIsidebar from './ui-sidebar.js';

export default class EverythingMaps extends React.Component {
  render() {
    return (
        <div className="container-fluid">

          <UInavbar />

          <div className="row" >

            <UIsidebar />

            <div className="col-md-10 col-xs-9 background">
              <div className="text-center" style={{"padding-left" : "10px;", "padding-right" : "10px;",
                                                  "padding-top" : "10px;", "height" : "100%"}}>


                <div className="container">
                  <div className="row" style={{"height" : "100%"}}>


                    <div className="col-md-12 boxing">

                      <div className="tabbable-panel" style={{"padding-top" : "0;"}}>
                        <div className="tabbable-line" style={{"min-height" : "100%"}}>

                          <UImaps />
                          <h2>Maps</h2>



                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    )
  }
}
