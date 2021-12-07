import style from "../styles/style.module.css"
import Link from  "next/link"

export default function Content() {
    function secret(e) {
        e.preventDefault()
        alert("深夜是独处的时刻")
    }
    return (
        <section className={ style.content }>
            <h2 className={ style.contentH2}>二十四小时杂记</h2>
            <ul className={ style.list }>
                <div className={style.choice}>
                    <li className={ style.topic }><Link href='/post/xwsd'><a>下午三点</a></Link></li><li className={ style.date }>10/08/2021</li>
                </div>
                <div className={style.choice}>  
                    <li className={ style.topic }><Link href='/post/bwld'><a>傍晚六点</a></Link></li>
                    <li className={ style.date}>09/16/2021</li>
                </div>
                <div className={style.choice}>
                    <li className={ style.topic }><Link href='/post/wsqd'><a>晚上七点</a></Link></li>
                    <li className={ style.date}>07/15/2020</li>
                </div>
                <div className={style.choice}>
                    <li className={ style.topic }><Link href='/post/qcbd'><a>清晨八点</a></Link></li>
                    <li className={ style.date}>08/21/2021</li>
                </div>
                <div className={style.choice}>
                    <li className={ style.topic }><Link href='/post/swsd'><a>上午十点</a></Link></li>
                    <li className={ style.date}>08/10/2020</li>
                </div>
                <div className={style.choice}>
                    <li className={ style.topic }><Link href='#'><a onClick={ secret }>深夜十二点</a></Link></li>
                    <li className={ style.date}>07/02/2021</li>
                </div>
                <div className={style.choice}>
                    <li className={ style.topic }><Link href='#'><a onClick={ secret }>凌晨一点</a></Link></li>
                    <li className={ style.date}>11/06/2021</li>
                </div>
                <h3 className={ style.sorry }>其他的再等等吧，还没产出哦~</h3>
            </ul>
            
        </section>
    )
}