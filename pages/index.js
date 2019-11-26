import React from 'react'
import Head from 'next/head'

const Page = (props) => {
  return (
    <div className="page">
      <Head>
        <title>zuzu</title>
      </Head>
      <style jsx>
        {`
          .page {
            width: 100%;
            height: 100%;
            display: block;
            overflow: auto;
            min-height: 100vh;
            font-family: Open Sans;
            background-color: #fcfcfc;
          }
        `}
      </style>
    </div>
  )
}

export default Page
