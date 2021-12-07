import BackHome from "../../components/backhome";
import pgstyle from "../../styles/page.module.css"
import Head from "next/head";

export default function first() {
    return (
        <BackHome>
            <Head>
                <title>清晨八点</title>
            </Head>
            <div className={ pgstyle.content }>
            <section className={ pgstyle.title }>清晨八点</section>
            <section className={ pgstyle.article }> &emsp;&emsp;恋爱是什么？</section>
            <section className={ pgstyle.article }> &emsp;&emsp;对于异性恋来说，可能要简单一点，找到一个在一起的人，公之于众，给周围单身狗喂足狗粮。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;对于同性恋来说，可能要更难一点，在公布恋情的时候，可能收到的不是别人的祝福而是世俗的指点。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;这么说起来，是不是异性恋的爱情就带了点炫耀的意味，同性恋的爱情就带了点悲伤的气息呢。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;我没真正谈过恋爱，只真正喜欢过一个人。我能懂和自己喜欢的人呆一起时那种发自内心的快乐，能明白去对喜欢的人付出原来是也是一种幸福。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;我曾经一直很好奇为什么爱情都要走到确定关系的一步，在喜欢那个人的过程中，我逐渐感觉到了一些什么，但是说不清，可能也许是一种认同感和归属感？我不知道。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;我所认知的爱情，就算不是日久生情，也不会是那种所谓的表白墙征婚的快餐式感情。相比于脱单晚会给一个机会来认识与了解，表白墙上随口一个谈恋爱，我觉得可笑至极，仅仅凭着短短几句介绍和一张图片就确定对方是自己的另一半，这是什么原理？</section>
            <section className={ pgstyle.article }> &emsp;&emsp;我一直很好奇，谈恋爱的当事人为什么要谈恋爱，是因为对方就是自己的天命还是因为这可以羡煞旁人？谈恋爱的人把这个过程看做是伊甸园的苹果，只想尝尝恋爱的滋味，还是肯定自己一定会为对方负责，用最大的努力和对方结婚共同躺进爱情的坟墓？</section>
            <section className={ pgstyle.article }> &emsp;&emsp;我一边吹捧单身万岁一边羡慕别人甜甜的爱情，像个摇摆不定的墙头草。一个人一生中可以有几次天赐的机会去遇到那个和自己相契合的另一半灵魂，是选择去等待命定的另一半还是选择主动去献出自己鲜红的热烈。结局没什么变化，我们找的都是那个能让自己奋不顾身的人。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;总是希望在一起的能执子之手,至今孤单的能遇到义无反顾。</section>
            </div>
        </BackHome>
    )
}