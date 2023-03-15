import NavBar from "./NavBar";
import Head from "next/head";

export default function Layout ({ children }) {

    return (
        <>
             <Head>
                <title>Recepe | NextJs + contentful</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />

            <div className="mt-4">
                { children }
            </div>
        </>
        
       
    )

}