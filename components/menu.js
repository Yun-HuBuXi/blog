import { Menu } from 'antd';
import 'antd/dist/antd.css';
import style from "../styles/style.module.css"

export default function Menu1() {
    const {SubMenu} =Menu
    function secret(e) {
        alert("深夜是独处的时刻")
    }
    function reach(e) {
        window.location.href = e.key
    }
    return (
        <div style={{ backgroundColor:"#343A40" }}>
        <Menu
        style={{ width: "12rem" }}
        // defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
      >
                <SubMenu className={style.menu} key="sub1" title="文章">
                    <Menu.Item className={style.item} key="/post/xwsd" onClick={reach}>下午三点</Menu.Item>
                    <Menu.Item className={style.item} key="/post/bwld" onClick={reach}>傍晚六点</Menu.Item>
                    <Menu.Item className={style.item} key="/post/wsqd" onClick={reach}>晚上七点</Menu.Item>
                    <Menu.Item className={style.item} key="/post/qcbd" onClick={reach}>清晨八点</Menu.Item>
                    <Menu.Item className={style.item} key="/post/swsd" onClick={reach}>上午十点</Menu.Item>
                    <Menu.Item className={style.item} onClick={secret}>深夜十二点</Menu.Item>
                    <Menu.Item className={style.item} onClick={secret}>凌晨一点</Menu.Item></SubMenu>
                </Menu>
            </div>
    )
}