const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },
]
let div = document.querySelector('.div');

function renderProducts() {
    for (let i = 0; i < phones.length; i++) {
        div.innerHTML += `
        <div class="card bg-dark text-white border border-secondary" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${phones[i].brand} ${phones[i].model}</h5>
                  <H6 class="fw-medium">${phones[i].ram} GB Ram</H6>
                  <H6 class="fw-medium">${phones[i].rom} GB Rom</H6>
                  <H6 class="fw-medium">${phones[i].camera} camera</H6>
                  <p class="card-text fw-medium">300000 PKR.</p>
                  <a href="#" class="btn btn-primary" onclick="addToCart(${i})">Add to Cart</a>
                </div>
              </div>
        `
    }
}
renderProducts();
let checkOutList = [];
function addToCart(index) {
    if (checkOutList.includes(phones[index])) {
        phones[index].quantity += 1;
    }else{
        phones[index].quantity = 1;
        checkOutList.push(phones[index]);
    }
    console.log(checkOutList);
}