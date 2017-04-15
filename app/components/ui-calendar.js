import React from 'react';
import SimpleCalendar from './simple-calendar.js';



export default class UIcalendar extends React.Component {
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

                          <h2>Calendar</h2>
                            Placeholder
                            <SimpleCalendar/>

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
