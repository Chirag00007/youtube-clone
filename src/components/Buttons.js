import React from 'react'

const Buttons = (props) => {
  return (
    <div>
      <button className="px-4 py-2 m-2 bg-gray-200 font-semibold rounded-lg">
        {props.name}
      </button>
    </div>
  );
}

export default Buttons
