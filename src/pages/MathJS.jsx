import Info from './Info'
import { atan2, e, log, pi, round, evaluate } from 'mathjs'

const MathJS = () => {
  const num1 = round(e, 3)
  const num2 = atan2(3, -3) / pi
  const num3 = log(10000, 10)
  const num4 = evaluate('12 / (2.3 + 0.7)')

  return (
    <>
      <Info
        name='MathJS'
        npm='https://www.npmjs.com/package/mathjs'
        doce='https://mathjs.org'
      />
      <div className='container'>
        <p>
          round(e, 3) = <b>{num1}</b>
        </p>
        <p>
          atan2(3, -3) / pi = <b>{num2}</b>
        </p>
        <p>
          log(10000, 10) = <b>{num3}</b>
        </p>

        <p>
          evaluate('12 / (2.3 + 0.7)') = <b>{num4}</b>
        </p>
      </div>
    </>
  )
}

export default MathJS
