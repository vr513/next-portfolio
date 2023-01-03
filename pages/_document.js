import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from "@chakra-ui/react"

export default class MyDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                href="https://fonts.googleapis.com/css2?family=Crete+Round&display=swap"
                rel="stylesheet"
                />
            <Head>
            <meta name="description" content="Personal portfolio of Varad Rajopadhye where he posts his tech updates , writes blogs and publishes his projects" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Varad Rajopadhye"/>
            <meta property="og:description" content="Personal portfolio of Varad Rajopadhye where he posts his tech updates , writes blogs and publishes his projects"/>
            <meta property="og:image" content="https://www.varadrajopadhye.tech/assets/home.webp"/>
            <meta property="og:url" content="https://www.varadrajopadhye.tech/"></meta>
            <meta name="twitter:title" content="Varad Rajopadhye"/>
            <meta name="twitter:description" content="Personal portfolio of Varad Rajopadhye where he posts his tech updates , writes blogs and publishes his projects"/>
            <meta name="twitter:image" content="https://www.varadrajopadhye.tech/assets/home.webp"/>
            <meta name="twitter:url" content="https://www.varadrajopadhye.tech/"></meta>

            </Head>
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}