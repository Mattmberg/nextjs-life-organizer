import Footer from "@/components/footer";
import "../assets/css/site.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/header";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="contentContainer">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                name="description"
                content="Organize your life within this webapp with lists and a scheduler."
                />
                <title>My Life Organizer</title>
            </Head>
            
            <Header siteTitle="Life Organizer"/>

            <Component {...pageProps} />

            <Footer authorName="Matthew Bergeron Jr" copyrightYear={2026}/>
        </div>
    );
}