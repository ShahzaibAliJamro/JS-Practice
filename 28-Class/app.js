const div = document.querySelector('div');

axios('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data)
    .then(res => {
        res.map(item => {
            console.log(item);
            div.innerHTML += `
            <div class="card" style="width: 18rem;">
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
    })
    .catch(err => {
        console.log(err);
    })



    
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