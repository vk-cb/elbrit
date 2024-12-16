import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`px-4 py-2 bg-featureBackground  text-white border border-featureBackground hover:bg-white hover:text-featureBackground duration-300 ease-in-out rounded-3xl ${className}`}>
        {text}
    </button>
  )
}

export default Button