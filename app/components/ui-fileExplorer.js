import React from 'react';
import Files from './files.js';
import {getData} from '../server.js';

export default class UIfileExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

  refresh() {
    getData(4 , (Data) => {
      this.setState(Data);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div classNameName="container-fluid">
        <div className="row" >
          <div className="col-md-10 col-xs-9 background">
            <div className="text-center" >
              <div className="container">
                <div className="row row-height">
                  <div className="col-md-12 boxing">
                    <div className="tabbable-panel-maps">
                      <div className="tabbable-line">
                        <h2>Files</h2>
                        <div className="contentBox">

                          <div className="col-md-10 col-md-offset-1">
             <form action="#" method="get">
                 <div className="input-group btn-padding">
                     <input className="form-control" id="system-search" name="q" placeholder="Search for" required></input>
                     <span className="input-group-btn">
                         <button type="submit" className="btn btn-default btn-md" ><i className="glyphicon glyphicon-search"></i></button>
                     </span>
                 </div>
             </form>
                    </div>

<div className="well-sm" id="tools">
    <a className="btn btn-default" style={{margin: '7px'}} id="upload-button"><i className="glyphicon glyphicon-upload icon-white"></i> Upload</a>
    <a className="btn btn-default" style={{margin: '7px'}} id="new-file-button"><i className="glyphicon glyphicon-file"></i> New File</a>
    <a className="btn btn-default" style={{margin: '7px'}} id="new-folder-button"><i className="glyphicon glyphicon-folder-close"></i> New folder</a>
    <a className="btn btn-default" style={{margin: '7px'}} id="refresh-button"><i className="glyphicon glyphicon-refresh"></i> Refresh</a>
</div>


<div className="container-table">

    	 <table className="table table-list-search table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Created</th>
                            <th>Modified</th>
                            <th>Author</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Captain America</td>
                            <td>capta</td>
                            <td>89%</td>
                            <td>02:14</td>

                        </tr>
                        <tr>
                            <td>Spider-Man</td>
                            <td>spida</td>
                            <td>77%</td>
                            <td>03:13</td>

                        </tr>

                        <tr>
                            <td>Thor</td>
                            <td>thor</td>
                            <td>98%</td>
                            <td>01:12</td>

                        </tr>

                    </tbody>
        </table>
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
