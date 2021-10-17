import React from 'react'

function Health({ piece }) {
  const { health } = piece
  const fullHealthWidth = 10;
  const  actualHealthWidth = 10 * ( health.actual / health.full)

  return (
    <>
      <rect className="red" width={fullHealthWidth} height="3" y="2" x="-5" />
       <rect className="green" width={actualHealthWidth} height="3" y="2" x="-5" />
    </>
  )
}

export default Health
