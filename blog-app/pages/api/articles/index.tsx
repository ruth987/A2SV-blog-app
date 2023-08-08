import { NextRequest, NextResponse } from 'next/server';
import * as jsonData from '../../../data.json';
import fs from 'node:fs';
export default function handler(req: NextRequest, res) {
    const data = jsonData.default;
    if(req.method == "POST"){
       const newdata = req.body;
        data.push(newdata);
        // validate here
        const jsonData = JSON.stringify(data);
        fs.writeFileSync('data.json', jsonData);
        return res.end(JSON.stringify(data));
    }
    else if(req.method == "GET"){
        return res.end(JSON.stringify(data))
    }

}