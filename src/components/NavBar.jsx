import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className='d-flex justify-content-end align-items-center p-2'>
        <Link to='/' className='btn btn-light'>
          Back
        </Link>
      </div>
    </>
  )
}

export default NavBar
