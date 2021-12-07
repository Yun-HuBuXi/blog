import style from "../styles/style.module.css"
import Head from "next/head"
import Image from "next/image"

export default function Layout({children}) {
  const blanket = ''
    return (
        <div className={ style.backpage }>
          <Head>
            <title>{blanket}</title>
          </Head>
            <header className={ style.header }>
                <div  className={ style.photo }><Image className={style.photo} src="/images/myphoto.jpg" alt="" layout="fill"/>
                </div>
                <h1 className={ style.name }>云胡不喜</h1>
    </header>
    <main>{children}</main>
    <footer>Powered By HuangXin</footer>
  </div>
)
}