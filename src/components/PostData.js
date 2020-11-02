import React, { useEffect } from 'react';
let PostData = (props) => {
    const langProp = props.locale;
    function Entries () {
        return (
            <section className="posts" year="2020">
                <section className="post" date="2020-10-23T00:20:00Z" author="Tomoaki Morioka">
                    <section className="item" lang="en">
                        <h2 className="title">Hi</h2>
                        <section className="description">How are you</section>
                        <article className="post-body">
                            <p>Lorem ipsum dolor sit amet <em>consectetur</em> adipisicing elit. Ipsa error, maiores explicabo saepe dolorem rerum labore, ullam laboriosam sapiente odio perferendis! <strong>Dolores nam tempore id eum sapiente nulla beatae vero.</strong></p>
                        </article>
                    </section>
                    <section className="item" lang="ja">    
                        <h2 className="title">やあ</h2>
                        <section className="description">調子は</section>
                        <article className="post-body"><p>これは日本語の例文。記事のプレースホルダーとしてここに記入した。日本語には｢Lorem Ipsum｣のような便利なプレースホルダーが無い為、この例ではオリジナルの代用文を使用している。</p></article>
                    </section>
                </section>
                <section className="post" date="2020-10-22T17:00:00Z" author="Tomoaki Morioka">
                    <section className="item" lang="en">
                        <h2 className="title">Hi</h2>
                        <section className="description">How are you</section>
                        <article className="post-body"><p>Lorem ipsum dolor sit amet <em>consectetur</em> adipisicing elit. Ipsa error, maiores explicabo saepe dolorem rerum labore, ullam laboriosam sapiente odio perferendis! <strong>Dolores nam tempore id eum sapiente nulla beatae vero.</strong></p></article>
                    </section>    
                    <section className="item" lang="ja">    
                        <h2 className="title">やあ</h2>
                        <section className="description">調子は</section>
                        <article className="post-body"><p>これは日本語の例文。記事のプレースホルダーとしてここに記入した。日本語には｢Lorem Ipsum｣のような便利なプレースホルダーが無い為、この例ではオリジナルの代用文を使用している。</p></article>
                    </section>
                </section>
                <section className="post" date="2020-10-21T00:20:00Z" author="Tomoaki Morioka">
                    <section className="item" lang="en">
                        <h2 className="title">Hi</h2>
                        <section className="description">How are you</section>
                        <article className="post-body">
                            <p>Lorem ipsum dolor sit amet <em>consectetur</em> adipisicing elit. Ipsa error, maiores explicabo saepe dolorem rerum labore, ullam laboriosam sapiente odio perferendis! <strong>Dolores nam tempore id eum sapiente nulla beatae vero.</strong></p>
                        </article>
                    </section>    
                    <section className="item" lang="ja">    
                        <h2 className="title">やあ</h2>
                        <section className="description">調子は</section>
                        <article className="post-body"><p>これは日本語の例文。記事のプレースホルダーとしてここに記入した。日本語には｢Lorem Ipsum｣のような便利なプレースホルダーが無い為、この例ではオリジナルの代用文を使用している。</p></article>
                    </section>
                </section>
                <section className="post" date="2020-10-20T17:00:00Z" author="Tomoaki Morioka">
                    <section className="item" lang="en">
                        <h2 className="title">Hi</h2>
                        <section className="description">How are you</section>
                        <article className="post-body"><p>Lorem ipsum dolor sit amet <em>consectetur</em> adipisicing elit. Ipsa error, maiores explicabo saepe dolorem rerum labore, ullam laboriosam sapiente odio perferendis! <strong>Dolores nam tempore id eum sapiente nulla beatae vero.</strong></p></article>
                    </section>    
                    <section className="item" lang="ja">    
                        <h2 className="title">やあ</h2>
                        <section className="description">調子は</section>
                        <article className="post-body"><p>これは日本語の例文。記事のプレースホルダーとしてここに記入した。日本語には｢Lorem Ipsum｣のような便利なプレースホルダーが無い為、この例ではオリジナルの代用文を使用している。</p></article>
                    </section>
                </section>
                <section className="post" date="2020-10-20T15:00:00Z" author="Tomoaki Morioka">
                    <section className="item" lang="en">
                        <h2 className="title">Hi</h2>
                        <section className="description">How are you</section>
                        <article className="post-body"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error, maiores explicabo saepe dolorem rerum labore, ullam laboriosam sapiente odio perferendis! Dolores nam tempore id eum sapiente nulla beatae vero.</p></article>
                    </section>    
                    <section className="item" lang="ja">    
                        <h2 className="title">やあ</h2>
                        <section className="description">調子は</section>
                        <article className="post-body"><p>これは日本語の例文。記事のプレースホルダーとしてここに記入した。日本語には｢Lorem Ipsum｣のような便利なプレースホルダーが無い為、この例ではオリジナルの代用文を使用している。</p></article>
                    </section>
                </section>
                <section className="post" date="2020-10-19T00:20:00Z" author="Tomoaki Morioka">
                    <section className="item" lang="en">
                        <h2 className="title">Hi</h2>
                        <section className="description">How are you</section>
                        <article className="post-body">
                            <p>Lorem ipsum dolor sit amet <em>consectetur</em> adipisicing elit. Ipsa error, maiores explicabo saepe dolorem rerum labore, ullam laboriosam sapiente odio perferendis! <strong>Dolores nam tempore id eum sapiente nulla beatae vero.</strong></p>
                        </article>
                    </section>    
                    <section className="item" lang="ja">    
                        <h2 className="title">やあ</h2>
                        <section className="description">調子は</section>
                        <article className="post-body"><p>これは日本語の例文。記事のプレースホルダーとしてここに記入した。日本語には｢Lorem Ipsum｣のような便利なプレースホルダーが無い為、この例ではオリジナルの代用文を使用している。</p></article>
                    </section>
                </section>
                <section className="post" date="2020-10-18T17:00:00Z" author="Tomoaki Morioka">
                    <section className="item" lang="en">
                        <h2 className="title">Hi</h2>
                        <section className="description">How are you</section>
                        <article className="post-body"><p>Lorem ipsum dolor sit amet <em>consectetur</em> adipisicing elit. Ipsa error, maiores explicabo saepe dolorem rerum labore, ullam laboriosam sapiente odio perferendis! <strong>Dolores nam tempore id eum sapiente nulla beatae vero.</strong></p></article>
                    </section>    
                    <section className="item" lang="ja">    
                        <h2 className="title">やあ</h2>
                        <section className="description">調子は</section>
                        <article className="post-body"><p>これは日本語の例文。記事のプレースホルダーとしてここに記入した。日本語には｢Lorem Ipsum｣のような便利なプレースホルダーが無い為、この例ではオリジナルの代用文を使用している。</p></article>
                    </section>
                </section>
                <section className="post" date="2020-10-17T21:00:00Z" author="Tomoaki Morioka">
                    <section className="item" lang="en">
                        <h2 className="title">Hi</h2>
                        <section className="description">How are you</section>
                        <article className="post-body"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error, maiores explicabo saepe dolorem rerum labore, ullam laboriosam sapiente odio perferendis! Dolores nam tempore id eum sapiente nulla beatae vero.</p></article>
                    </section>    
                    <section className="item" lang="ja">    
                        <h2 className="title">やあ</h2>
                        <section className="description">調子は</section>
                        <article className="post-body"><p>これは日本語の例文。記事のプレースホルダーとしてここに記入した。日本語には｢Lorem Ipsum｣のような便利なプレースホルダーが無い為、この例ではオリジナルの代用文を使用している。</p></article>
                    </section>
                </section>
            </section>
        );
    }

    useEffect(()=>{
        let b;
        //a = document.querySelectorAll(".item:not([lang='en'])");
        //console.log(a);
        switch(langProp){
            case "en":
                b = document.querySelectorAll(".item:not([lang='en'])");
                break;
            case "ja":
                b = document.querySelectorAll(".item:not([lang='ja'])");
                break;
            default:
                b = document.querySelectorAll(".item:not([lang='en'])");
        }
        b.forEach((eachB)=>{
            eachB.remove();
        })
    });
    return(
        <Entries/>
    );
}
export default PostData;