import Info from './Info'
import { faker } from '@faker-js/faker'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

const ChartjsPackage = () => {
  return (
    <>
      <Info
        name='ChartJS & Faker Data'
        npm='https://www.npmjs.com/package/react-chartjs-2'
        doce='https://react-chartjs-2.js.org/'
      />
      <a
        className='text-center'
        href='https://www.npmjs.com/package/@faker-js/faker'
        target='_blank'
        rel='noreferrer'
      >
        <p>@faker-js/faker</p>
      </a>
      <div className='container p-5'>
        <Bar options={options} data={data} />
      </div>
    </>
  )
}
export default ChartjsPackage
