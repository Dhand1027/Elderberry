import React from 'react';

export default class UIfileExplorer extends React.Component {
  render() {
    return (
          <div className="text-center" style="padding-left:10px;padding-right:10px;padding-top:10px; height:100%">
              <div className="container">
                  <div className="row" style="height:100%">


                      <div className="col-md-12 boxing">

                          <div className="tabbable-panel" style="padding-top:0;">
                              <div className="tabbable-line" style="height:100%">

                                  <h2>Files</h2>
                                       <div className="tab-content">
                                   <div className = "row">
                                  <div className= "col-md-12">
                                       <div className="row bottomBorder">
                                          <div className = "pull-left">
                                          <a href = '#'><span className="glyphicon glyphicon-list-alt glyphicon-larger"></span>
                                          <font size = "+2">To Do List</font></a>
                                          </div>
                                      </div>
                                      <div className="row bottomBorder">
                                          <div className = "pull-left">
                                              <button type="button" className="btn btn-default">
                                              <span className="glyphicon glyphicon-folder-close glyphicon-larger"></span>
                                                  <font size = "+2">Gym Routines</font>
                                              </button>
                                          </div>
                                      </div>
                                      <div className="row">
                                          <div className = "pull-left inFolder">
                                          <a href = '#'><span className="glyphicon glyphicon-list-alt glyphicon-larger"></span>
                                          <font size = "+2">Leg day</font></a>
                                          </div>
                                      </div>
                                      <div className="row">
                                          <div className = "pull-left inFolder">
                                              <a href = '#'><span className="glyphicon glyphicon-list-alt glyphicon-larger"></span>
                                                  <font size = "+2">Bicep</font></a>
                                          </div>
                                      </div>
                                      <div className="row">
                                          <div className = "pull-left inFolder">
                                              <a href = '#'><span className="glyphicon glyphicon-picture glyphicon-larger"></span>
                                                  <font size = "+2">Before Pic of Me 01/01/17</font></a>
                                          </div>
                                      </div>
                                       <div className="row bottomBorder">
                                          <div className = "pull-left">
                                              <button type="button" className="btn btn-default">
                                              <span className="glyphicon glyphicon-folder-close glyphicon-larger"></span>
                                              <font size = "+2">Shopping List</font>
                                              </button>
                                          </div>
                                      </div>
                                       <div className="row bottomBorder">
                                          <div className = "pull-left">
                                              <button type="button" className="btn btn-default">
                                              <span className="glyphicon glyphicon-folder-close glyphicon-larger"></span>
                                              <font size = "+2">My Screenplay Ideas</font>
                                              </button>
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
