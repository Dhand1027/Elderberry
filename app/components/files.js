import React from 'react';

export default class Files extends React.Component{
  constructor(props) {
    super(props);
    this.state = props.data;
  }

  whatType(item,display){
    if(item.type == "file"){
      display.push(
      <div className="row">
         <div className= "pull-left">
         <a href = '#'><span className="glyphicon glyphicon-list-alt glyphicon-larger"></span>
         <font size = "+2">{item.title}</font></a>
         </div>
      </div>
    )
    }
    if(item.type == "picture"){
      display.push(
      <div className="row">
         <div className= "pull-left">
             <a href = '#'><span className="glyphicon glyphicon-picture glyphicon-larger"></span>
                 <font size = "+2">{item.title}</font></a>
         </div>
       </div>
     )
    }
    if(item.type == "folder"){
      display.push(
      <div className="row">
         <div className= "pull-left">
             <button type="button" className="btn btn-default">
             <span className="glyphicon glyphicon-folder-close glyphicon-larger"></span>
                 <font size = "+2">{item.title}</font>
             </button>
         </div>
      </div>
    )
      this.List(item.content, display)
    }
  }

  List(array, display){
    for(var i = 0; i < array.length; i++) {
      this.whatType(array[i], display);
    }
  }

  render(){
    var data = this.state;
    var display = [];
    //this.List(data.masterFolder, display);
    display.push(
      <div className="row">
         <div className= "pull-left">
             <button type="button" className="btn btn-default">
             <span className="glyphicon glyphicon-folder-close glyphicon-larger"></span>
                 <font size = "+2">hi</font>
             </button>
         </div>
      </div>
    );
    display.push(
      <div className="row">
         <div className= "pull-left">
             <a href = '#'><span className="glyphicon glyphicon-picture glyphicon-larger"></span>
                 <font size = "+2">Before Pic of Me 01/01/17</font></a>
         </div>
       </div>
    );
    return(
      <div>
        {display}
      </div>
    )
  }
}
