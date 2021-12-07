import bhstyle from "../styles/backhome.module.css"
import Head from "next/head"    
import Link from "next/link"
import Image from "next/image"

export default function     BackHome({children}) {
    const blanket = ''
    return (
        <div className={ bhstyle.backpage }>
        <Head>
          <title>{blanket}</title>
        </Head>
          <header className={ bhstyle.header }>
          <div  className={ bhstyle.photo }><Image className={ bhstyle.photo} src="/images/myphoto.jpg" alt="" layout="fill"/>
                </div>
              <h1 className={ bhstyle.name }>云胡不喜</h1>
  </header>
  <main>{children}</main>
  <footer className={bhstyle.backhome}><Link href={'/'} ><a>⇐ 回去看看其他的</a></Link></footer>
  <footer>Made By HuangXin</footer>
</div>
    )
}