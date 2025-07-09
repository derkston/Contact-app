// STYLE
import style from './header.module.css'


export default function Header(){

    return <header>
        <div className={style.header__content}>
                <a target='_blank' href="https://github.com/derkston/Contact-app" className={style.git__hub}>WebSite Code {`</>`}</a>
                <h1>Contact-app</h1>
        </div>
    </header>
}