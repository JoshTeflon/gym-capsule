import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet" />
          {/* <script src="https://cdn.jsdelivr.net/npm/rrule@2.6.4/dist/es5/rrule.min.js" /> */}
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument