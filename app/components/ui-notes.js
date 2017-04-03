import React from 'react';
import UInavbar from './ui-navbar.js';
import UIsidebar from './ui-sidebar.js';


export default class UInotes extends React.Component {
  //console.log('here')
  render() {
    return (

        <div className="container-fluid">
            <UInavbar />
            <UIsidebar />



        <div className="row row-height" >


            <div className="col-md-10 col-xs-9 background">
                <div className="text-center">


                    <div className="container">
                        <div className="row">


                            <div className="col-md-12 boxing">

                                <div className="tabbable-panel">
                                    <div className="tabbable-line">

                                       <ul className="nav nav-tabs ">
						<li className="active">
							<a href="#tab_default_1" data-toggle="tab">
							New Note </a>
						</li>
						<li>
							<a href="#tab_default_2" data-toggle="tab">
							CS326 </a>
						</li>
						<li>
							<a href="#tab_default_3" data-toggle="tab">
							Workshop3 </a>
						</li>
					</ul>
					<div className="tab-content">
						<div className="tab-pane active" id="tab_default_1">
                            <textarea className="form-control" id="userInput" type="text"></textarea>

						</div>
						<div className="tab-pane" id="tab_default_2">

							<textarea className="form-control" id="userInput" type="text"></textarea>
						</div>
						<div className="tab-pane" id="tab_default_3">
							<textarea className="form-control" id="userInput" type="text"></textarea>


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
