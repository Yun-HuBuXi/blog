import Head from "next/head"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Content from "../components/content"

export default function Home() {
  return (
    <Layout>
        <Head>
            <title>'Welcome to My Blog'</title>
        </Head>
        <Intro></Intro>
        <Content></Content>
    </Layout>
  )
}