import { Link } from 'react-router-dom'
import GitHubButton from 'react-github-btn'
import reactPackages from './reactPackages'

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
          GitHub
        </GitHubButton>
      </div>

      <div className='container'>
        <h3 className='p-4'>React Packages Examples</h3>
        <div className='row'>
          <div className='col-md-8'>
            <div className='table-responsive '>
              <table className='table table-hover table-bordered'>
                <tbody>
                  {reactPackages.map((reactPackage) => (
                    <tr key={reactPackage.id}>
                      <td>
                        <Link
                          to={`/${reactPackage.url}`}
                          className='text-decoration-none'
                        >
                          {reactPackage.name}
                        </Link>
                      </td>
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
