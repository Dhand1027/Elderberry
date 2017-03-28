import React from 'react';

export default class UImaps extends React.Component {
  render() {
    return (
      <div className="col-md-2 col-xs-3 fixed-left-sidebar">
        <ul className="nav nav-pills nav-stacked" style="padding-left: 20px; padding-right: 0px;margin-top:10px;margin-left:20px;margin-right:20px;">

          <li data-toggle="collapse" data-target="#service">
            <a href="#"><span className="glyphicon glyphicon-folder-open icon"></span>Folder</a>
          </li>

          <li data-toggle="collapse" data-target="#service">
            <a href="#"><span className="glyphicon glyphicon-pencil icon"></span>Notes</a>
          </li>

          <li data-toggle="collapse" data-target="#service" style = "margin-bottom: 400px">
            <a href="#"><span className="glyphicon glyphicon-picture icon"></span>Images</a>
          </li>


          <li data-toggle="collapse" data-target="#service">
            <a href="#"><span className="glyphicon glyphicon-calendar icon"></span>Calendar</a>
          </li>

          <li data-toggle="collapse" data-target="#service">
            <a href="#"><span className="glyphicon glyphicon-map-marker icon"></span>Maps</a>
          </li>

          <li data-toggle="collapse" data-target="#service">
            <a href="#"><span className="glyphicon glyphicon-trash icon"></span>Trash</a>
          </li>


        </ul>
      </div>
      )
    }
}
