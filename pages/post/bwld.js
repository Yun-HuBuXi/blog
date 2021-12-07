import BackHome from "../../components/backhome";
import pgstyle from "../../styles/page.module.css"
import Head from "next/head";

export default function first() {
    return (
        <BackHome>
            <Head>
                <title>傍晚六点</title>
            </Head>
            <div className={ pgstyle.content }>
            <section className={ pgstyle.title }>傍晚六点</section>
            <section className={ pgstyle.article }> &emsp;&emsp;打完游戏之后，我码下这些字。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;又是一场这样的闹剧。经历了几次了，之前认为自己能够不去想，不去烦。但事实不是这样，还是会在不动声色的外表下进行激烈的自导自演。但与之前不同的是，这次我去面对了现实，而不是沉浸在自我的臆想之中。不过每次都是这样，设想了许多种情况，现实却总是我未曾料及的模样。不知道是我思维确实有漏洞，还是现实喜欢跟我开玩笑。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;我很喜欢今天的那段对话。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;“墙上是你写吧。”</section>
            <section className={ pgstyle.article }> &emsp;&emsp;“嗯。”</section>
            <section className={ pgstyle.article }> &emsp;&emsp;“那个人指的谁？”</section>
            <section className={ pgstyle.article }> &emsp;&emsp;“答案重要吗？”</section>
            <section className={ pgstyle.article }> &emsp;&emsp;“不重要，只是好奇而已。”</section>
            <section className={ pgstyle.article }> &emsp;&emsp;“那也没有回答的必要了。等什么时候它变得重要了，再说吧。”</section>
            <section className={ pgstyle.article }> &emsp;&emsp;我感觉到的自己成长。若是放在以前，我肯定要迫不及待地说的我的答案。我想把这归功于一个一直听歌的晚上和一个怎么也学不进去的上午。兜兜转转了许久，我仍没有勇气去跑遍越五。但我知道，有些事必须要做，我也去做了。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;期间我一直在考虑一个问题：我究竟是想感动自己，让自己觉得没有遗憾；还是想感动对方，取得原谅。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;没打算继续深究了。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;只是，明天能好好复习经济学以防挂科了。</section>
            </div>
        </BackHome>
    )
}