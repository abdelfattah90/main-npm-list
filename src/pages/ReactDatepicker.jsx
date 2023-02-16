import Info from './Info'

import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const ReactDatepicker = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <>
      <Info
        name='React Datepicker'
        npm='https://www.npmjs.com/package/react-datepicker'
        doce='https://reactdatepicker.com/'
      />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </>
  )
}

export default ReactDatepicker
