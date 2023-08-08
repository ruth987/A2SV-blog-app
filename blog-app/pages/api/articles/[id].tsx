import * as jsonData from '../../../data.json';
import fs from 'node:fs';

export default function handler(req: NextRequest, res) {
    const {id} = req.query;
    let articles = jsonData.default;
    if(req.method == "GET"){
        const filtered = articles.filter(article=>article.id === id);

        if(filtered.length>0){
            res.status(200).json(filtered[0]);
        }else{
            res.status(404).json({message: `Article with the id of ${id} is not found`});
        }
    } else if(req.method == "PUT"){
        const newData = req.body;
        articles = articles.filter(article=>article.id !== id);
        articles.push(newData);
        const jsondata = JSON.stringify(articles);
        fs.writeFileSync('data.json', jsondata);
        return res.end(JSON.stringify({success: true}));
        
    } else if(req.method == "DELETE"){
        const newData = req.body;
        articles = articles.filter(article=>article.id !== id);
        const jsondata = JSON.stringify(articles);
        fs.writeFileSync('data.json', jsondata);
        return res.end(JSON.stringify({success: true}));
    }
   
}