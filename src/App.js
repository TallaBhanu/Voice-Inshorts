import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import './App.css';
import NewsCards from './Components/NewsCards/NewsCards';


const App=()=>{
    const alanKey='8aac8821891a29ec9dbed4da6971bfd92e956eca572e1d8b807a3e2338fdd0dc/stage';
    const [newsArticles,setNewsArticles]=useState([]);
    const [activeArticle,setActiveArticle]=useState(-1);

    useEffect(()=>{
        alanBtn({
            key:alanKey,
            //articles are passed according to search from alan
            onCommand:({command,articles,number})=>{
                if(command==='newHeadlines'){
                    //setting the articles received from alan
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }
                else if(command==='highlight'){
                    setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);
                }
                else if(command==='open'){
                    const parseNumber=number.length>2 ? wordsToNumbers(number,{fuzzy:true}) :number;
                    const article=articles[parseNumber-1];
                    if(parseNumber>20){
                        alanBtn().playText('Please try again');
                    }
                    else{
                        window.open(articles[parseNumber].url,'_blank');
                        alanBtn().playText('Opening....');
                    }
                    
                }
            }
        })
    },[])
    return(
        <div className="app">
            <div className="app__logo">
               <div className="app_image">
                   <img className="app__imagelogo" src="https://www.mediainfoline.com/wp-content/uploads/2015/12/Inshorts-Logo.png" alt="inShorts Logo"/>
               </div>
               <div className="app__title">
                    <h1>Voice inShorts</h1>
               </div>
            </div>
            <div className="app__desc">
                <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
            </div>
        </div>
    );
}

export default App;
