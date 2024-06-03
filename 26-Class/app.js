// function hello(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (num > 5) {
//                 console.log('YES!');
//                 resolve('YES!')
//             }else{
//                 console.log('NO!');
//                 reject('NO!')
//             }
//         },1000)
//     })
// };
// hello(10)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })




















// fetch('https://fakestoreapi.com/products/1')
// .then((res)=>{
//     return res.json();
// }).then((res) => {
//     console.log(res);
// })

const div = document.querySelector('div');

const store = axios('https://fakestoreapi.com/products')
.then(res => {
    return res.data;
}).then(res => {
    div.innerHTML = '';
    div.style.marginTop = '0px'
    res.map(item => {
        div.innerHTML += `
        <div class="card" style="width: 18rem;">
        <div class="text-center p-3">
        <img style="width:150px;height:170px;" src="${item.image}" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.price} $</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
        </div>
        `
    })
})
.catch(err => {
    console.log(err);
})



















