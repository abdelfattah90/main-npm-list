import { Link } from 'react-router-dom'
import GitHubButton from 'react-github-btn'
import reactPackages from '../data/reactPackages'
import nodePackages from '../data/nodePackages'

const Home = () => {
  return (
    <>
      <div className='d-flex justify-content-end align-items-center p-1'>
        <GitHubButton
          href='https://github.com/abdelfattah90'
          data-color-scheme='no-preference: light; light: dark; dark: light;'
          data-size='large'
          aria-label='Follow @abdelfattah90 on GitHub'
        >
          Follow @abdelfattah90
        </GitHubButton>
      </div>

      <div className='container'>
        <h3 className='pt-4'>
          <b className='text-primary pe-1'>{reactPackages.length}</b>React
          Packages With Examples
        </h3>
        <div className='d-flex align-content-start flex-wrap'>
          {reactPackages.map((reactPackage) => (
            <span key={reactPackage.id}>
              <Link
                to={`/${reactPackage.url}`}
                className='order-1 px-2 bd-highlight text-decoration-none'
              >
                {reactPackage.name}
              </Link>
            </span>
          ))}
        </div>
        <hr />
        <h3 className='pt-4'>
          <b className='text-success pe-1'>{nodePackages.length}</b>Node Js
          Packages Most on used
        </h3>
        <div className='row'>
          <div className='col-md-8'>
            <div className='table-responsive '>
              <table className='table table-striped table-hover table-bordered'>
                <thead>
                  <tr>
                    <th scope='col'>Package</th>
                    <th scope='col'>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {nodePackages.map((nodePackage) => (
                    <tr key={nodePackage.id}>
                      <td>
                        <Link
                          to={`${nodePackage.url}`}
                          className='text-decoration-none'
                          target='_blank'
                        >
                          {nodePackage.name}
                        </Link>
                      </td>
                      <td> {nodePackage.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
