import { Link } from 'react-router-dom'
// import NavBar from '../components/NavBar'
// <NavBar />
const packagesLists = [
  { id: 1, name: 'p1', url: 'p1' },
  { id: 2, name: 'p2', url: 'p2' },
  // { id: , name: '', url: '' },
]

const Home = () => {
  return (
    <>
      <div className='container p-3'>
        <h2 className='text-center p-3'>NPM Packages Examples</h2>
        <div className='list-group col-md-3'>
          {packagesLists.map((packagesList) => (
            <span key={packagesList.id}>
              <Link
                to={`/${packagesList.url}`}
                className='list-group-item list-group-item-action'
              >
                {packagesList.name}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
