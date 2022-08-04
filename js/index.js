 // Load your images on page-load
 function preloader() {
    const imagesList = [
       "./img/facebook.png",
       "./img/insta.png",
       
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);



// references
let buttons = document.querySelectorAll('.controls button');
let dc = document.querySelector('.dynamic-content');

// resources
let stock = {
    c1: {
            heading: 'Bio-Energy',
            bodyText: 'Bioenergy is energy produced from renewable, biological sources such as biomass. Biomass is plant material that can be turned into fuel (also known as biofuel when it is made from biological material) to supply heat and electricity. Bioenergy can be obtained from many forms of biofuels.',
            imageSrc: './img/img-1.jpg',
            imageAlt: 'bio-energy'
        },
    c2: {
        heading: 'Hydro Energy',
        bodyText: 'Hydroelectric energy, also called hydroelectric power or hydroelectricity, is a form of energy that harnesses the power of water in motion—such as water flowing over a waterfall—to generate electricity.',
        imageSrc: './img/img-2.jpg',
        imageAlt: 'water'
    },
    c3: {
        heading: 'Wind energy',
        bodyText: 'Wind energy, or wind power, is created using a wind turbine, a device that channels the power of the wind to generate electricity. The wind blows the blades of the turbine, which are attached to a rotor. The rotor then spins a generator to create electricity.',
        imageSrc: './img/img-3.jpg',
        imageAlt: 'Wind'
    }
}

dc.innerHTML = `<img src="${stock.c1.imageSrc}" alt="${stock.c1.imageAlt}" />
                <div class="grid-item">
                <h2>${stock.c1.heading}</h2>
                <p>${stock.c1.bodyText}</p>
                </div>
                `;


// Function 
function displayContent(ev) {

    
    let currentBtn = ev.target;

    
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute('id')){
              buttons[i].removeAttribute('id');
              
        }
    }

    currentBtn.setAttribute('id','active-button');
    

    if (currentBtn.textContent === 'Bio-Energy') {
        dc.innerHTML = `<img src="${stock.c1.imageSrc}" alt="${stock.c1.imageAlt}" />
                <div class="grid-item">
                <h2>${stock.c1.heading}</h2>
                <p>${stock.c1.bodyText}</p>
                </div>
                `;
    } else if (currentBtn.textContent === 'Hydro') {
        dc.innerHTML = `<img src="${stock.c2.imageSrc}" alt="${stock.c2.imageAlt}" />
                <div class="grid-item">
                <h2>${stock.c2.heading}</h2>
                <p>${stock.c2.bodyText}</p>
                </div>
                `;
    } else {
        dc.innerHTML = `<img src="${stock.c3.imageSrc}" alt="${stock.c3.imageAlt}" />
                <div class="grid-item">
                <h2>${stock.c3.heading}</h2>
                <p>${stock.c3.bodyText}</p>
                </div>
                `;
    }
}


// Activate function

for (let button of buttons) {
    button.addEventListener('click', displayContent);
}
