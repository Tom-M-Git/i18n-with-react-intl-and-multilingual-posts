import React from 'react';
import {FormattedMessage} from 'react-intl';

function Home (props) {
    const langProp = props.locale;

    const homeEn =
        <article>
            <h2>Welcome</h2>
            <hr/>
            <p>
                This is a mock website as my personal project built with <span className="highlight">React</span>.
            </p>
            <p>
                It is focused on <span className="highlight">i18n(internationalization)</span> using a library <span className="highlight">React Intl</span>.
            </p>
            <p>
                Select one from the <em>language buttons</em> to switch the language. The <em>Posts button</em> to open posts.
            </p>
            <p>
                Supported Languages: English, Japanese
            </p>
            <h2>Details</h2>
            <hr/>
            <p>Involved technologies:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li><a href="https://reactjs.org/" target="_blank" rel="noreferrer">React.js</a></li>
                <li><a href="https://formatjs.io/" target="_blank" rel="noreferrer">React Intl (Format.JS)</a></li>
                <li><a href="https://reactrouter.com/" target="_blank" rel="noreferrer">React Router</a></li>
            </ul>
            <p>
                For translating each single word or phrase, I used <span className="highlight">react-intl</span> functions. For each long sentence or article, it's separated in each block of code and displayed by language.
            </p>
            <h2>Other</h2>
            <hr/>
            <p>Author: Tomoaki Morioka</p>
            <p>Project Started: October 25, 2020</p>
            <br />
            <p>Thank you for visiting.</p>
            <br />
            <br />
            <p className="warning">
                Reloading this app isn't supported. Leave the url only before "<strong>/en</strong>" or "<strong>/ja</strong>" in the search bar and run a search if needed. Sorry for inconvenience.
            </p>
        </article>;
    const homeJa =
        <article>
            <h2>ようこそ</h2>
            <hr/>
            <p>
                これは著者が個人的なプロジェクトとして、<span className="highlight">React</span>を使用して制作した模擬ウェブサイトです。
            </p>
            <p>
                ライブラリの<span className="highlight">React Intl</span>を利用した<span className="highlight">i18n(インターナショナライゼーション | 国際化)</span>に焦点を当てています。
            </p>
            <p>
                言語を切り替えるには言語のボタンから、投稿を表示するには投稿のボタンを選択してください。
            </p>
            <p>
                サポートされている言語: 英語, 日本語
            </p>
            <h2>詳細</h2>
            <hr/>
            <p>関連するテクノロジー:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React.js</li>
                <li>React Intl (Format.JS)</li>
                <li>React Router</li>
            </ul>
            <p>
                単語やフレーズを翻訳する際は、<span className="highlight">react-intl</span>ファンクションを使用しました。長文や記事については、コードがブロックごとに分けられており、言語に対応する方が表示されます。
            </p>
            <h2>その他</h2>
            <hr/>
            <p>著者: 森岡 知映</p>
            <p>プロジェクト開始: 2020年10月25日</p>
            <br />
            <p>ご覧いただきありがとうございます。</p>
            <br />
            <br />
            <p className="warning">
                このアプリではページの更新ができません。必要な場合は｢<strong>/en</strong>｣ または ｢<strong>/ja</strong>｣より前(左)のurlのみを検索バーに残して検索してください。ご不便をお詫び申し上げます。
            </p>
        </article>;

    function HomeByLang(){
        switch(langProp){
            case "en":
                return homeEn;
            case "ja":
                return homeJa;
            default:
                return homeEn;
        }
    }


    return (
        <main>
            <header>
                <h1>
                    <FormattedMessage
                    id="app.home"
                    defaultMessage="Home"
                    />
                </h1>
            </header>
            <HomeByLang />
        </main>
    );
}

export default Home;