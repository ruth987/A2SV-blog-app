import { useRouter } from 'next/router';
import {server} from '../../../config';
import Link from 'next/link';
import Meta from '../../../components/Meta';
import buttonStyles from '../../../styles/Button.module.css';

const article = ({article})=>{
    // const router = useRouter();
    // const {id} = router.query;
    return (
        <>
            <Meta title={article.title} description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br/>
            <hr/>
            <div className={buttonStyles.buttoncontainer}>
            <Link href={`/article/${article.id}/editArticle`}><button className={buttonStyles.button}>Edit Article</button></Link>
            <Link href={`/article/${article.id}/deleteArticle`}><button className={buttonStyles.button}>Delete Article</button></Link>
            </div>
            <hr />
            <Link href='/'>Go Back</Link>
        </>
    )
}


export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json();
    console.log(article);
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();
    const ids = articles.map(article=>article.id);
    const paths = ids.map(id=>({params:{id:id.toString()}}));
    return {
        paths,
        fallback: "blocking"
    }
}

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();
//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const articles = await res.json();
//     const ids = articles.map(article=>article.id);
//     const paths = ids.map(id=>({params:{id:id.toString()}}));
//     return {
//         paths,
//         fallback: false
//     }
// }

export default article;