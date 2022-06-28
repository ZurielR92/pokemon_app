import Head from "next/head";
import { FC } from "react";
import { Navbar } from '../ui/';

interface props {
  title: string,
  children: React.ReactNode
}

const origin = (typeof window === 'undefined') ? '' : window.location

export const Layout: FC<props> = ( { children, title } ) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content="Victor Ramos" />
            <meta name='description' content="Información sobre el pokemon xxxx" />
            <meta name='keywords' content="xxxx, pokemon, pokedex" />

            <meta name="og:title" content="Pokemon App"/>
            <meta name="og:description" content="La mejor pokedex para mantener listados tus pokemons favoritos"/>
            <meta name="og:image" content={`${origin}/img/banner.png`}/>
        </Head>

        {/* Navbar */}
        <Navbar/>
        <main style={{
          margin:'0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
