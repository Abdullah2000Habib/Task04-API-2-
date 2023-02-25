let boxes =document.querySelector('.boxes');
let button =document.querySelector('.to-down');
let main =document.querySelector('.main');
let postTitle =document.querySelector('.post-title');
let postDescription =document.querySelector('.post-description');
let newBox = ``;
let data = [];


// fetch('https://api.giphy.com/v1/gifs/trending?api_key=1pE96dSG5FunJmP1rGWZOHXunKlr8JDU').then((res)=>res.json()).then((data)=>{
//     console.log(data)
//     newBox = ``;
//     data.data.forEach((item)=>{
//         let box =`<div class="box">
//         <img src=${item.images['480w_still'].url} alt=""/>
//         </div>`
//         newBox = newBox + box ;
//         boxes.innerHTML=newBox;
//     })
// }).catch(err => boxes.innerHTML =err);


const callApi =async (url)=>{
try{ const res  =await fetch(url);
 const data = await res.json();
    newBox = ``;
    data.data.forEach((item)=>{
        let box =`<div class="box">
        <img src=${item.images['480w_still'].url} alt=""/>
        </div>`
        newBox = newBox + box ;
        boxes.innerHTML=newBox;
    })
}catch (error) {
    boxes.innerHTML = error;
  }
}


callApi('https://api.giphy.com/v1/gifs/trending?api_key=1pE96dSG5FunJmP1rGWZOHXunKlr8JDU')

button.addEventListener('click', (e)=>{
    window.scrollTo(22,document.body.scrollHeight);
    button.style.display = 'none';
})

