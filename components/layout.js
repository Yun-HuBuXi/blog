import style from "../styles/style.module.css"
import Head from "next/head"

export default function Layout({children}) {
    return (
        <div className={ style.backpage }>
          <Head>
            <title>''</title>
          </Head>
            <header className={ style.header }>
                <img className={ style.photo } src="/images/myphoto.jpg"/>
                <h1 className={ style.name }>云胡不喜</h1>
    </header>
    <main>{children}</main>
  </div>
)
}