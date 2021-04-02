//const apiKey="680fe263d1334401aba53b6355c664a3";

/////
const searchForm = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList =  document.querySelector('.news-list');

searchForm.addEventListener('submit',retrieve)

function retrieve(e){
    e.preventDefault()
    let topic = input.nodeValue;
    console.log(topic);
    const apikey = '680fe263d1334401aba53b6355c664a3'
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`
    
    fetch(url).then((Res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
    })

}

/////
// FetchNewsData();
// function FetchNewsData()
// {
//     var $res1=document.getElementById("container");
//     $res1.innerHTML="";
//     const url =`https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=680fe263d1334401aba53b6355c664a3`;
//     var $res1=document.getElementById("container");
//     $res1.innerHTML="";
//     axios.get(url)
//     .then(response=>{
//         console.log(response)
//         $res1.innerHTML=getResult(response)
//     }).catch(error=>{
//         $res1.innerHTML=getError(error)
//     })

// }
// function getResult(response){
//     return "<h4>Result</h4>"+
//     "<h5>Status:</h5>"+
//     "<pre>" +response.status +" "+response.statusText +"</pre>"+
//     "<h5>Headers:</h5>"+
//     "<pre>"+JSON.stringify(response.headers,null,"\t")+"<pre>"+
//     "<h5>Data:</h5>"+
//     "<pre>"+JSON.stringify(response.data,null,"\t")+"<pre>"
// }

// function getError(error){
//     return "<h4>Result</h4>"+
//     "<h5>Message:</h5>"+
//     "<pre>"+error.message+"<pre>"+
//     "<h5>Status:</h5>"+
//     "<pre>" +error.response.status +" "+error.response.statusText +"</pre>"+
//     "<h5>Headers:</h5>"+
//     "<pre>"+JSON.stringify(error.response.headers,null,"\t")+"<pre>"+
//     "<h5>Data:</h5>"+
//     "<pre>"+JSON.stringify(error.response.data,null,"\t")+"<pre>"
// }