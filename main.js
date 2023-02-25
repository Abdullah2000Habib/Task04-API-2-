let boxes =document.querySelector('.boxes');
let button =document.querySelector('.to-down');
let main =document.querySelector('.main');
let postTitle =document.querySelector('.post-title');
let postDescription =document.querySelector('.post-description');
let newBox = ``;
let data = [];


button.addEventListener('click', (e)=>{
    window.scrollTo(22,document.body.scrollHeight);
    button.style.display = 'none';
})



// const callApi = async (method ,url)=>{
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url,true);
//     xhr.send();
//     return new Promise((resolve,reject) =>{
//         xhr.onreadystatechange = () =>{
//             if(xhr.readyState ==4 && xhr.status ==200){
//                 resolve(JSON.parse(xhr.response));
//             }else if(xhr.readyState ==4 && xhr.status !==200){
//                 reject(Error('sth went wrong'));
//             }
//         };
//     })

// }
// boxes.innerHTML='Loading ...'
// callApi('GET','https://jsonplaceholder.typicode.com/posts').then((response)=>
// {
//     console.log(response)
//     newBox = ``;
//     response.forEach((item)=>{
//         let box =`<div class="box">
//                 <h4 class="box-title">${item.title}</h4>
//                 <p class="box-description">${item.body}</p>
//                 <div class="box-spans">
//                     <span class="span-one">P1</span>
//                     <span class="span-two">Health</span>
//                 </div>
//         </div>`
//         newBox = newBox + box ;
//         boxes.innerHTML=newBox;
//     })
// }
// );
