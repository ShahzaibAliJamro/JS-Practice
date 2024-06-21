const div = document.querySelector('div');
let arr;
axios('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        arr = res.data;
        return arr;
    })
    .then(res => {
        renderCards(res);
    })
    .catch(err => {
        console.log(err);
    })

    function renderCards(arr) {
        div.innerHTML = '';
        arr.map((item,index) => {
            div.innerHTML += `
            <div class="card" style="width: 18rem;" onclick="deleteCardOnClick(${index})">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Address: ${item.address.suite}, ${item.address.street}, ${item.address.city}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Phone: ${item.phone}</li>
                <li class="list-group-item">Email: ${item.email}</li>
                <li class="list-group-item">Website: ${item.website}</li>
                </ul>
            </div>
            `
        })
    }
    function deleteCardOnClick(card) {
        arr.splice(card,1);
        renderCards(arr);
    }

    
// async function asyncFunc() {
//     try {
//         const res = await axios('https://jsonplaceholder.typicode.com/users');
//         res.data.map(item => {
//             div.innerHTML += `
//             <div class="card" style="width: 18rem;">
//                 <div class="card-body">
//                     <h5 class="card-title">${item.name}</h5>
//                     <p class="card-text">Address: ${item.address.suite}, ${item.address.street}, ${item.address.city}</p>
//                 </div>
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item">Email: ${item.email}</li>
//                     <li class="list-group-item">Phone: ${item.phone}</li>
//                     <li class="list-group-item">Website: ${item.website}</li>
//                 </ul>
//             </div>
//             `
//         })
//     } catch (error) {
//         console.log(console.error());
//     }
// }
// asyncFunc();