import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'
import BigCalendar from 'react-big-calendar'

BigCalendar.momentLocalizer(moment)

require('style!css!react-big-calendar/lib/css/react-big-calendar.css')

class SimpleCalendar extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      // React Components in JSX look like HTML tags
      <BigCalendar
        style={{height: '420px'}}
        events={[]}
      />
    )
  }
}

render(<SimpleCalendar />, document.getElementById('ui-calendar'))
