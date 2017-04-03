import React from 'react';
import UInavbar from './ui-navbar.js';
import UIsidebar from './ui-sidebar.js';


export default class UIfileEditor extends React.Component {

  render() {
    //  console.log('here editor'),
    return (

      <div className="container-fluid">
        <UInavbar />
        <UIsidebar />

          <div className="row" >

        <div className="col-md-10 col-xs-9 background">
            <div className="text-center">


                <div className="container">
                    <div className="row">


                        <div className="col-md-12 boxing">
                                        <div className="tabbable-panel">

                                <div className="tabbable-line container" >
                                   <h2>Trash</h2>
                                   <div className="tab-content">
                                    <div class = "row">
                                    <div className= "col-md-12">
                                        <div className="container-fluid adm-archivos">    <div className="row">
    <div className="col-md-12">
        <div className="panel panel-default">
            <div className="panel-heading text-center">
                <span><strong><span className="glyphicon glyphicon-folder-open"> </span> Files</strong></span>
            </div>
            <table className="table table-bordered table-hover vmiddle">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>File Name</th>
                        <th>Actions</th>
                        <th>Size</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">
                            <div className="radio">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked></input>
                                </label>
                            </div>
                        </td>
                        <td className="text-center"><span className="glyphicon glyphicon-file"></span></td>
                        <td>List of ToDo's 9/16/2016</td>
                        <td className="text-center">
                            <a href="#"><span className="btn btn-sm btn-danger glyphicon glyphicon-trash"></span></a>
                            <a href="#"><span className="btn btn-sm btn-primary glyphicon glyphicon-pencil"></span></a>
                            <a href="#"><span className="btn btn-sm btn-warning glyphicon glyphicon-info-sign"></span></a>
                        </td>
                        <td>864.0 KB </td>
                        <td>sep-16-16 06:94:8</td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            <div className="radio">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked></input>
                                </label>
                            </div>
                        </td>
                        <td className="text-center"><span className="glyphicon glyphicon-folder-close"></span></td>
                        <td>Old Notes</td>
                        <td className="text-center">
                            <a href="#"><span className="btn btn-sm btn-danger glyphicon glyphicon-trash"></span></a>
                            <a href="#"><span className="btn btn-sm btn-primary glyphicon glyphicon-pencil"></span></a>
                            <a href="#"><span className="btn btn-sm btn-warning glyphicon glyphicon-info-sign"></span></a>
                        </td>
                        <td>1.8 MB </td>
                        <td>nov-16-16 09:48:7</td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            <div className="radio">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked></input>
                                </label>
                            </div>
                        </td>
                        <td className="text-center"><span className="glyphicon glyphicon-picture"></span></td>
                        <td>Picture</td>
                        <td className="text-center">
                            <a href="#"><span className="btn btn-sm btn-danger glyphicon glyphicon-trash"></span></a>
                            <a href="#"><span className="btn btn-sm btn-primary glyphicon glyphicon-pencil"></span></a>
                            <a href="#"><span className="btn btn-sm btn-warning glyphicon glyphicon-info-sign"></span></a>
                        </td>
                        <td>523.0 KB </td>
                        <td>dec-16-16 03:52:2</td>
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
                </div>






            </div>
        </div>


    </div>

      </div>



    )
  }
}
