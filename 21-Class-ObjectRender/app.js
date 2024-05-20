// const goat = {
//     Name: 'Lionel Messi',
//     age: 36,
//     ballonDors: 8,
// }
// console.log(obj.age);

// const object = {
//     name: 'Shahzaib Ali',
//     email: 'shahzaibalijamro@gmail.com',
//     age: 18,
//     greetUser: function () {
//         return `Hello ${this.name}`
//     }
// }
// console.log(object.greetUser());
// delete object.name;
// object.firstName = 'Shahzaib';
// object.lastName = 'Ali';
// console.log(object);

// let username = document.querySelector('.input-name');
// let userEmail = document.querySelector('.input-email');
// let userAge = document.querySelector('.input-age');
// let userCity = document.querySelector('.input-city');
// let user;

// function getObject() {
//     user = {
//         name: username.value,
//         email: userEmail.value,
//         age: userAge.value,
//         city: userCity.value,
//     }
//     console.log(user);
// }


// const players = {
//     goatLevelPlayers: ['Messi', 'Ronaldo', 'Pele', 'Maradona'],
//     elite: {
//         top: ['Zidane', 'Xavi', 'Maldini', 'Iniesta', 'Modric', 'Kroos', 'KDB'],
//         normal: {
//             top: ['Beckham', 'Pogba', 'Schweinsteiger'],
//             normal: {
//                 extra: {
//                     level: [1,2,3,4,5,6,7,8,9],
//                     low: {
//                         level: {
//                             op: [1,2,3,4,10]
//                         }
//                     }
//                 }
//             }
//         },
//     high: {
//         top:["Delio Onnis","Bernard Lacombe","Jean-Pierre Papin","Roger Courtois","Hervé Revelli",  "Thadée Cisowski","Carlos Bianchi","Zlatan Ibrahimović","Dominique Rocheteau","Didier Drogba","Edinson Cavani","Sonny Anderson","Pauleta","Josip Skoblar","George Weah",],
//         }
//     },
//     failed: [{failedTop: [{no1: 'Neymar',no2: 'Ronaldinho',no3: 'Hazard',},
//             {failedNot: [{no1: 'Messi',no2: 'Ronaldo',}]}]
//     }]
// }
// console.log(players.failed[0]);
// console.log(players.failed[0].failedTop[1]);
// console.log(players.failed[0].failedTop[1].failedNot[0].no2);

// const nestedObject = {
//     id: 1,
//     name: "Main Object",
//     metadata: {
//       createdBy: "John Doe",
//       createdAt: "2024-05-02",
//       info: {
//         description: "This is a deeply nested JavaScript object.",
//         tags: ["nested", "complex", "javascript"],
//         version: 1.0,
//         status: "active",
//         details: {
//           size: {
//             height: 100,
//             width: 200,
//             depth: 50
//           },
//           colors: ["red", "green", "blue"],
//           configurations: {
//             option1: true,
//             option2: false
//           }
//         }
//       }
//     },
//     children: [
//       {
//         id: 2,
//         name: "Child Object 1",
//         metadata: {
//           createdBy: "Jane Smith",
//           createdAt: "2024-05-01",
//           info: {
//             description: "First child object in the nested structure.",
//             tags: ["child", "object"],
//             version: 1.2,
//             status: "active",
//             details: {
//               size: {
//                 height: 80,
//                 width: 150,
//                 depth: 40
//               },
//               colors: ["yellow", "green"],
//               configurations: {
//                 option1: false,
//                 option2: true
//               }
//             }
//           }
//         },
//         children: []
//       },
//       {
//         id: 3,
//         name: "Child Object 2",
//         metadata: {
//           createdBy: "Mike Johnson",
//           createdAt: "2024-04-30",
//           info: {
//             description: "Second child object in the nested structure.",
//             tags: ["child", "object"],
//             version: 1.1,
//             status: "active",
//             details: {
//               size: {
//                 height: 120,
//                 width: 180,
//                 depth: 60
//               },
//               colors: ["blue", "white"],
//               configurations: {
//                 option1: true,
//                 option2: true
//               }
//             }
//           }
//         },
//         children: [
//           {
//             id: 4,
//             name: "Grandchild Object",
//             metadata: {
//               createdBy: "Anna Lee",
//               createdAt: "2024-04-29",
//               info: {
//                 description: "A grandchild object within the nested structure.",
//                 tags: ["grandchild", "object"],
//                 version: 1.0,
//                 status: "active",
//                 details: {
//                   size: {
//                     height: 60,
//                     width: 100,
//                     depth: 30
//                   },
//                   colors: ["purple", "orange"],
//                   configurations: {
//                     option1: false,
//                     option2: false
//                   }
//                 }
//               }
//             },
//             children: []
//           }
//         ]
//       }
//     ]
//   };
// console.log(nestedObject.children[1].children[0].metadata.createdBy);
// const nestedObject = {
//     children: [
//         {

//         },
//         {
//             children: [
//                 {
//                     metadata: {
//                         createdBy: 'Abbu jaaan'
//                     }
//                 }
//             ]
//         }
//     ]
// }
// console.log(nestedObject.children[1].children[0].metadata.createdBy);


















































































































































































// const arr = ['Muhammad Abdullah' , 20]


// const obj = {
//     name: 'Muhammad Abdullah',
//     age: 20,
//     isLoggedIn: true,
//     hobbies: ['cricket' , 'swimming' , 'running']
// }


// const nestedObj = {
//     names: {
//         secondPosition: [
//             {},
//             {
//                 names: [
//                     {
//                         names: ['heelo', 'helo2']
//                     }
//                 ]
//             }
//         ]
//     }
// }
// console.log(nestedObj.names.secondPosition[1].names[0].names[0])



































// let nestedData = [
//     {
//         category: "Electronics",
//         subcategories: [
//             {
//                 name: "Smartphones",
//                 products: [
//                     { brand: "Apple", model: "iPhone 13", price: 999 },
//                     { brand: "Samsung", model: "Galaxy S21", price: 799 },
//                     { brand: "Google", model: "Pixel 6", price: 699 }
//                 ]
//             },
//             {
//                 name: "Laptops",
//                 products: [
//                     { brand: "Apple", model: "MacBook Pro", price: 1499 },
//                     { brand: "Dell", model: "XPS 13", price: 1299 },
//                     { brand: "HP", model: "Spectre x360", price: 1199 }
//                 ]
//             }
//         ]
//     },
//     {
//         category: "Clothing",
//         subcategories: [
//             {
//                 name: "Men's",
//                 products: [
//                     { brand: "Nike", item: "T-shirt", price: 25 },
//                     { brand: "Adidas", item: "Joggers", price: 40 }
//                 ]
//             },
//             {
//                 name: "Women's",
//                 products: [
//                     { brand: "Zara", item: "Dress", price: 50 },
//                     { brand: "H&M", item: "Jeans", price: 30 }
//                 ]
//             }
//         ]
//     }
// ];
// console.log(nestedData[0].subcategories[1].products[2].model);
// console.log(nestedData[0].subcategories[0].products[0].model)































// const users = [
//     {
//         name: "Alice",
//         age: 25,
//         hobbies: ["Reading", "Painting"]
//     },
//     {
//         name: "Bob",
//         age: 30,
//         hobbies: ["Playing guitar", "Cooking"]
//     },
//     {
//         name: "Charlie",
//         age: 22,
//         hobbies: ["Hiking", "Photography"]
//     },
//     {
//         name: "David",
//         age: 28,
//         hobbies: ["Running", "Watching movies"]
//     },
//     {
//         name: "Ella",
//         age: 35,
//         hobbies: ["Traveling", "Knitting"]
//     },
//     {
//         name: "Frank",
//         age: 20,
//         hobbies: ["Gaming", "Drawing"]
//     },
//     {
//         name: "Grace",
//         age: 27,
//         hobbies: ["Singing", "Dancing"]
//     },
//     {
//         name: "Hannah",
//         age: 32,
//         hobbies: ["Cooking", "Yoga"]
//     },
//     {
//         name: "Ian",
//         age: 24,
//         hobbies: ["Playing football", "Reading" ,'a' , 'b' , 'c']
//     },
//     {
//         name: "Jessica",
//         age: 29,
//         hobbies: ["Writing", "Cycling", 'swimming']
//     }
// ];

// console.log(users);

const div = document.querySelector('#users');

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     let hobbiesList = '';
//     for (let j = 0; j < users[i].hobbies.length; j++) {
//         hobbiesList += `<li>${users[i].hobbies[j]}</li>`;
//     }
//     div.innerHTML += `
//     <h1>Name: ${users[i].name}</h1>
//     <h2>Age: ${users[i].age}</h2>
//     <ul>
//     ${hobbiesList}
//     </ul>
//     <hr/>
//     `
// }




// for(let i = 0; i < users.length; i++){
//     let hobbies = ''
//     for(let j = 0; j < users[i].hobbies.length; j++){
//         // console.log(users[i].hobbies[j])
//         hobbies +=`<li>${users[i].hobbies[j]}</li>`
//     }
//     div.innerHTML += `
//     <h1>Name: ${users[i].name}</h1>
//     <h1>Age: ${users[i].age}</h1>
//     <h1>Hobbies</h1>
//     <ul>${hobbies}</ul>
//     <hr/>
//     `
// }

























const products = [
    {
        name: "Laptop",
        price: 999.99,
        description: "Powerful laptop for all your computing needs."
    },
    {
        name: "Headphones",
        price: 79.99,
        description: "High-quality headphones for immersive audio experience."
    },
    {
        name: "Smartphone",
        price: 699.99,
        description: "Advanced smartphone with cutting-edge features."
    },
    {
        name: "Tablet",
        price: 449.99,
        description: "Portable tablet for entertainment and productivity."
    },
    {
        name: "Smartwatch",
        price: 249.99,
        description: "Stay connected and track your fitness with this smartwatch."
    },
    {
        name: "Gaming Console",
        price: 399.99,
        description: "Experience the thrill of gaming with this powerful console."
    },
    {
        name: "Camera",
        price: 599.99,
        description: "Capture life's moments with stunning clarity and detail."
    },
    {
        name: "Wireless Speaker",
        price: 129.99,
        description: "Enjoy your favorite music wirelessly with this speaker."
    },
    {
        name: "External Hard Drive",
        price: 129.99,
        description: "Expand your storage and backup your files with ease."
    },
    {
        name: "Wireless Mouse",
        price: 29.99,
        description: "Navigate your computer with precision and comfort."
    },
    {
        name: "Printer",
        price: 199.99,
        description: "Print documents and photos with exceptional quality."
    },
    {
        name: "Desk Lamp",
        price: 49.99,
        description: "Illuminate your workspace with adjustable brightness."
    },
    {
        name: "Fitness Tracker",
        price: 79.99,
        description: "Monitor your health and track your workouts."
    },
    {
        name: "Bluetooth Earbuds",
        price: 99.99,
        description: "Wireless earbuds for on-the-go audio enjoyment."
    },
    {
        name: "Portable Charger",
        price: 39.99,
        description: "Charge your devices anywhere, anytime."
    },
    {
        name: "USB Flash Drive",
        price: 19.99,
        description: "Store and transfer your files conveniently."
    },
    {
        name: "Monitor",
        price: 299.99,
        description: "Upgrade your display for enhanced productivity."
    },
    {
        name: "Keyboard",
        price: 49.99,
        description: "Type comfortably with this reliable keyboard."
    },
    {
        name: "Computer Mousepad",
        price: 9.99,
        description: "Enhance your mouse precision with this smooth pad."
    },
    {
        name: "Graphic Tablet",
        price: 199.99,
        description: "Express your creativity with this digital drawing tablet."
    },
    {
        name: "Wireless Router",
        price: 79.99,
        description: "Fast and reliable internet connection for your home network."
    }
];

console.log(products);


for (let index = 0; index < products.length; index++) {
    div.innerHTML += `<div style="width:47%;border: 1px solid black;padding: 10px;text-align: center;"><h1>Name: ${products[index].name}</h1>
    <h2>Price: ${products[index].price}</h2>
    <p>${products[index].description}</p></div>`
}




































