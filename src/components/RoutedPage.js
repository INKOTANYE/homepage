import React from 'react'

function RoutedPage({menu}) {
    console.log(menu);
  return (
    <div style={{
      marginTop: "20%",
      marginLeft: "50%"
    }}>{menu}</div>
  )
}

export default RoutedPage