import React from 'react'

const Unauthorized = ({role}) => {
  return (
    <div>You are not authorized. Only  the {role} authorized in this page</div>
  )
}

export default Unauthorized