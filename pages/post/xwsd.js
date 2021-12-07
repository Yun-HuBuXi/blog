import BackHome from "../../components/backhome";
import pgstyle from "../../styles/page.module.css"
import Head from "next/head";

export default function first() {
    return (
        <BackHome>
            <Head>
                <title>下午三点</title>
            </Head>
            <div className={ pgstyle.content }>
            <section className={ pgstyle.title }>下午三点</section>
            <section className={ pgstyle.article }> &emsp;&emsp;我总是会被悲伤的人吸引。不是那种哭的梨花带雨的，是那种沉默的或者带笑的被掩饰的悲伤。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;在人群中，第一个夺我眼球的肯定是那种带动全场的人。但是我总是会不动声色地观察那些沉默寡言的人。我总是好奇，总是带有恻隐之心：为什么他们不愿意说话？我想去了解他们的过去是什么样的，究竟是什么造成了如今的他们。在我印象中，他总是更沉默一些，没有皱着眉头，但眼睛里总是有一抹悲伤。我经常远远地注视他，每次都在想究竟是什么样的事情，让他有了这沉重的灰色。我走近他，了解他，并且期望帮他消除那份悲伤。但可惜，做的是超出能力范围外的蠢事，甚至一度连我也带上了浓厚的灰色。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;能够接触到别人的悲伤是我的荣幸，伤口只会被信任的人检查。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;而伪装，似乎成了一个人成熟的必要技能。发现其悲伤成为了一个人在我心里形象变得立体的转折点。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;如果不是今天的偶然小事，我会一直忘却一种人。他们总是阳光开朗，我也一直觉得不管什么时候他们浑身闪耀着的都是艳丽的金色。但是今天我才醒悟，光越强，影越暗。在大众面前，他从来都是嘻嘻哈哈的，我很少见过他生气的样子，更是从来没见过他颓唐悲伤的样子。不经意间，我看到了那个脆弱敏感悲伤的他。而后，一发不可收拾的，再看到他的笑，我总是不由自主地想知道在他灿烂的笑之下隐藏的是哪个程度的悲伤。他在我心中也不再是个单纯的爱笑的人，成为一个带有悲伤底色的人。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;不知道是因为天性的善良还是因为那份看破伪装的恣意还是因为被倾诉的被信任还是因为自己也是这样的，我总是会被沉默的、带笑的、被掩饰的悲伤吸引。</section>
            </div>
        </BackHome>
    )
}