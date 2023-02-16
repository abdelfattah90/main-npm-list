import { Link } from 'react-router-dom'

const Info = ({ name, npm, doce }) => {
  return (
    <>
      <div className='d-flex justify-content-end align-items-center p-1'>
        <Link to='/' className='btn btn-danger'>
          Back
        </Link>
      </div>
      <div className='text-center'>
        <h2>{name}</h2>
        <div className='fw-bold d-inline p-1'>
          <Link className='text-decoration-none' to={npm} target='_blank'>
            NPM
          </Link>
        </div>
        <div className='fw-bold d-inline p-1'>
          <Link className='text-decoration-none' to={doce} target='_blank'>
            Docs
          </Link>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Info
