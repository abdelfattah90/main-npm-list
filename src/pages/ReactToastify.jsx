import Info from './Info'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ReactToastify = () => {
  const notify = () => toast('Saved...')
  return (
    <>
      <Info
        name='React Toastify'
        npm='https://www.npmjs.com/package/react-toastify'
        doce='https://fkhadra.github.io/react-toastify/introduction'
      />

      <button className='btn btn-primary m-2' onClick={notify}>
        Save
      </button>
      <ToastContainer position='bottom-right' />
    </>
  )
}

export default ReactToastify
