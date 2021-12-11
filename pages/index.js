import Head from "next/head"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Content from "../components/content"
import Menu1 from "../components/menu"

export default function Home() {
  return (
    <div className="body">
      <Menu1 className="menu"></Menu1>
      <Layout className="layout">
        <Head>
          <title>Welcome to My Blog</title>
        </Head>
        <Intro></Intro>
        <Content></Content>
      </Layout>
    </div>
  )
}