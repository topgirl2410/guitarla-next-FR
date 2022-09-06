import Head from "next/head"
import Header from "../components/Header"




const Layout = ({ children, pagina }) => {
    return (
        <div>
            <Head>
                <title>GuitarLA - {pagina}</title>
                <meta name="description" content="Sito Web de Ventas de Guitarras" />
            </Head>


            <Header />
            {children}
        </div>
    )
}

export default Layout