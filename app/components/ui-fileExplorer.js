import React from 'react';

import Files from './files.js'
//import {getData} from '../server.js';

export default class UIfileExplorer extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      contents: []
    };
  }

  refresh() {
       getData(this.props.user, (Data) => {
         this.setState(Data);
       });
     }

    componentDidMount() {
     this.refresh();
   }

  render() {
    return (
        <div className="container-fluid">
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
                                                <Files user={this.prop}/>
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
