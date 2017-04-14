import React from 'react';

export default class Files extends React.Component{

  whatType(item,display){
    if(item.type == "file"){
      <div className="row">
         <div className= "pull-left">
         <a href = '#'><span className="glyphicon glyphicon-list-alt glyphicon-larger"></span>
         <font size = "+2">To Do List</font></a>
         </div>
      </div>
    }
    if(item.type == "picture"){
      <div className="row">
         <div className= "pull-left">
             <a href = '#'><span className="glyphicon glyphicon-picture glyphicon-larger"></span>
                 <font size = "+2">Before Pic of Me 01/01/17</font></a>
         </div>
       </div>
    }
    if(item.type == "folder"){
      <div className="row">
         <div className= "pull-left">
             <button type="button" className="btn btn-default">
             <span className="glyphicon glyphicon-folder-close glyphicon-larger"></span>
                 <font size = "+2">Gym Routines</font>
             </button>
         </div>
      </div>
      this.List(item.content, display)
    }
  }

  List(array, display){
    for(var i = 0; i < array.length; i++) {
      display.add(this.whatType(array[i], display));
    }
  }

  render(){
    var display = []
    return(
      <div>
        {display}
      </div>
    )
  }
}
