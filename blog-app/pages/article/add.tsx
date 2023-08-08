import { useRouter } from "next/router"
import {server} from '../../config'
import ArticleForm from '../../components/AddArticleForm'

const AddArticle = () => {
    const router = useRouter();

    const handleAddArticle = async(articleData) => {
        try{
            const response = await fetch(`${server}/api/articles`, {
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(articleData)
            });

        if (response.ok){
            router.push('/')
        }else{
            console.log("something went wrong");
        }
        }catch(error){
            console.log("something went wrong");
        }
    };

    return (
        <div>
            <h1>Add article</h1>
            <ArticleForm onSubmit={handleAddArticle} />
        </div>
    
    );
};

export default AddArticle;

