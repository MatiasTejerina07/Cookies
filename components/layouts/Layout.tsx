import Head from "next/head"
import { FC, FunctionComponent, ReactNode } from "react"
import { Navbar } from "../ui"



export const Layout: FunctionComponent = ({ children }: any) => {
    return (
        <>
            <Head>


            </Head>
            <nav>
                <Navbar />
            </nav>
            <main style={{ padding: '20px 50px' }}>
                {children}
            </main>
        </>
    )
}
