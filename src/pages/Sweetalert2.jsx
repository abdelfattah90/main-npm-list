import Info from './Info'
import Swal from 'sweetalert2'

const Sweetalert2 = () => {
  const successAlert = () => {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button.',
      icon: 'success',
    })
  }
  return (
    <>
      <Info
        name='Sweetalert2'
        npm='https://www.npmjs.com/package/sweetalert2'
        doce='https://sweetalert2.github.io/'
      />
      <button className='btn btn-success m-2' onClick={successAlert}>
        Success Alert
      </button>
    </>
  )
}

export default Sweetalert2
