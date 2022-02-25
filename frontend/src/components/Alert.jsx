import React from 'react'

export default function Alert(props) {
    const {category , message} = props
  return (
    <div class={`alert alert-${category}`} role="alert">
        <strong>Attention!</strong> {message}
    </div>
    
  )
}
