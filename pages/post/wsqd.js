import BackHome from "../../components/backhome";
import pgstyle from "../../styles/page.module.css"
import Head from "next/head";

export default function first() {
    return (
        <BackHome>
            <Head>
                <title>晚上七点</title>
            </Head>
            <div className={ pgstyle.content }>
            <section className={ pgstyle.title }>晚上七点</section>
            <section className={ pgstyle.article }> &emsp;&emsp;我用了一个转头的瞬间陷入，用了三年也未曾逃出。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;你是我真正意义上的初恋。不像初中，那时有着朦胧的好感便觉得是喜欢，是爱。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;我很好奇，为什么相处一个学期我都对你没有感觉，却偏偏在新学期开学那天，因为自己一个不经意地转头而喜欢上你。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;我在想，如果最开始我就说明来意，而不是打着朋友的幌子接近你，或许我也不会耗费近乎三年的时间一边垒筑着梦一边看着你把它打碎，可能就不会在这沼泽中越陷越深。在这段不长不短的日子里，男孩变成了男人，我被你改变了许多，你让我成熟了许多，让我明白真正的生活是意料之外。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;起初和你分开那段时间，我一直想的是怎么拥有你，后面当觉得自己无望时，心里渐渐多了一些恐惧。我害怕再也不会有一个让我去这么爱的人，害怕也学不会去回应别人炙热的爱。感情在失败之后蒙上了一层灰色。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;听你说大学应该会耍朋友，我不禁好奇：能吸引特别的萤火虫的是什么样的月亮，能吸引这样的你的是怎样一个人。但此后大概与我无关了。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;我过去以为我们哪怕没在一起，也至少有过交汇，可是现在想来，你我不过像是DNA的两条链，所谓的重合不过是视觉的欺骗，我们从未有过碰撞。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;我献祭曾经那个热烈的自己，把你永远地映在心中。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;希望你能遇到那个温柔你岁月的戈多，余生安好。我也会在你施与的暴风雪中亦寻找亦等待，盼着能有个执灯之人引我不再迷失。</section>
            <section className={ pgstyle.article }> &emsp;&emsp;以此了结，之后，我们只是朋友。</section>
            </div>
        </BackHome>
    )
}