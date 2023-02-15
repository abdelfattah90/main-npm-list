import Info from '../data/Info'
import moment from 'moment'

const Moment = () => {
  let now = moment().format('LLLL')
  let calendar = moment().calendar()
  return (
    <>
      <Info
        name='Moment'
        npm='https://www.npmjs.com/package/moment'
        doce='https://momentjs.com/'
      />
      <p className='text-center'>
        <a
          href='https://www.npmjs.com/package/dayjs'
          target={'_blank'}
          rel='noreferrer'
        >
          Dayjs
        </a>
        &
        <a
          href='https://www.npmjs.com/package/luxon'
          target={'_blank'}
          rel='noreferrer'
        >
          Luxon
        </a>
      </p>

      <h3>{now}</h3>
      <h3>{calendar}</h3>
    </>
  )
}

export default Moment
