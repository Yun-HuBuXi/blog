import bhstyle from "../styles/backhome.module.css"
import Head from "next/head"    
import Link from "next/link"
export default function     BackHome({children}) {
    return (
        <div className={ bhstyle.backpage }>
        <Head>
          <title>''</title>
        </Head>
          <header className={ bhstyle.header }>
              <img className={ bhstyle.photo } src="/images/myphoto.jpg"/>
              <h1 className={ bhstyle.name }>云胡不喜</h1>
  </header>
  <main>{children}</main>
  <footer className={bhstyle.backhome}><Link href={'/'} ><a>⇐ 回去看看其他的</a></Link></footer>
  <footer>Powered By HuangXin</footer>
</div>
    )
}