import React from 'react'

const AppComponent = (props) => {
  return (
    <div className="component">
      <style jsx>
        {`
          .component {
            width: 500px;
            height: 500px;
            display: block;
            overflow: auto;
            font-family: Open Sans;
            background-color: #fcfcfc;
          }
        `}
      </style>
    </div>
  )
}

export default AppComponent
