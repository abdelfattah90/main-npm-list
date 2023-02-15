import Info from '../data/Info'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const EmotionPackage = () => {
  return (
    <>
      <Info
        name='Emotion'
        npm='https://www.npmjs.com/package/@emotion/react'
        doce='https://emotion.sh/docs/introduction'
      />
      <div
        css={css`
          padding: 32px;
          margin: 5px;
          width: 50%;
          background-color: #925272;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: #ffffff;
            transition: all 1s ease;
          }
        `}
      >
        Hover to change color.
      </div>
    </>
  )
}

export default EmotionPackage
