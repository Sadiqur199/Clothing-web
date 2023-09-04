import React from 'react'

function InputComponent({label , placeholder, onChange, value, type}) {
  return (
    <div className='relative'>
      <p className='pt-0 pr-2 -mt-3 pl-2 absolute pb-0 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white'>{label}</p>
      <input 
      placeholder={placeholder}
      type={type || "text"} 
      value={value}
      onChange={onChange}
      className='border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md'
      />
    </div>
  )
}

export default InputComponent