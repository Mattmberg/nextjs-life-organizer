import "../assets/css/site.css";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                name="description"
                content="Organize your life within this webapp with lists and a scheduler."
                />
                <title>My Life Organizer</title>
            </Head>


            <main className="">
                <Component {...pageProps} />
            </main>
        </>
    );
}