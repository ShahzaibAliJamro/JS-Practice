const bulb = document.querySelector('.bulb-img');

bulb.addEventListener('mouseover', function (event){
    event.target.src = 'https://st.depositphotos.com/1020618/2357/i/600/depositphotos_23578147-stock-photo-light-bulb.jpg';
    // event.target.style.width = '350px';
    // event.target.style.height = '480px';
    // event.target.style.marginTop = '25px';
})
bulb.addEventListener('mouseout', function (event){
    event.target.src = "https://st.depositphotos.com/1020618/2357/i/600/depositphotos_23575953-stock-photo-light-bulb.jpg";
    // event.target.style.width = '500px';
    // event.target.style.height = '520px';
    // event.target.style.marginTop = '0px';
})