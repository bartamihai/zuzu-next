import Document, { Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta viewport="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        ></link>
        <style
          dangerouslySetInnerHTML={{
            __html:
              'body{margin:0}#__next>div:first-child{min-height:100vh}*,:before,:after{box-sizing: border-box}',
          }}
        ></style>
      </html>
    )
  }
}

export default CustomDocument
