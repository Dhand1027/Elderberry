import React from 'react';
import UInavbar from './ui-navbar.js';
import UIsidebar from './ui-sidebar.js';
import Files from './files.js';


export default class UIfileExplorer extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     // Empty feed.
     contents: []
   };
 }
  render() {
  //  console.log('here explo'),
    return (

        <div className="container-fluid">
          <UInavbar />
          <UIsidebar />
        <div className="row" >
            <div className="col-md-10 col-xs-9 background">
                <div className="text-center">
                    <div className="container">
                        <div className="row row-height">
                            <div className="col-md-12 boxing">
                                <div className="tabbable-panel">
                                    <div className="tabbable-line">
                                        <h2>Files</h2>
                                        <div className="tab-content">
			<div className= "row">
                                                 <div className= "col-md-12">
                                             <Files />
                                                 </div>
                                        </div>
                                </div>
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
