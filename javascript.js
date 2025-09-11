
document.addEventListener("DOMContentLoaded", () => {
    // creating containers with different colors to simulate the category cards

    /* const parentContainer = document.querySelector(".category-scroll");
    const n = 8;
    for (let i = 0; i < n; i++) {
        const categoryCard = document.createElement('div');
        categoryCard.className = "category-card";
        categoryCard.style.backgroundColor = `#${Math.random().toString(16).slice(2, 8)}`;
        const cardImage = document.createElement("img");
        cardImage.style.backgroundColor = `#${Math.random().toString(16).slice(2, 8)}`;
        categoryCard.appendChild(cardImage);
        parentContainer.appendChild(categoryCard);
    } */




    //creating a list of scrolling cards for category list
    /*  const categoriesList = [
         {
             title: "Popular homes in Bengaluru",
             listings: [
                 {
                     img: "https://a0.muscache.com/im/pictures/hosting/Hosting-1096365467309628265/original/aa2f1eed-2157-4932-8be8-ebe60a697732.jpeg?im_w=320",
                     name: "Flat in Bangalore Urban",
                     price: "₹6,391 for 2 nights",
                     rating: "4.88"
                 },
                 {
                     img: "https://a0.muscache.com/im/pictures/hosting/Hosting-1096365467309628265/original/aa2f1eed-2157-4932-8be8-ebe60a697732.jpeg?im_w=320",
                     name: "Flat in   Urban",
                     price: "₹6,391 for 2 nights",
                     rating: "4.88"
                 },
                 {
                     img: "https://a0.muscache.com/im/pictures/hosting/Hosting-1096365467309628265/original/aa2f1eed-2157-4932-8be8-ebe60a697732.jpeg?im_w=320",
                     name: "Flat in Bangalore Urban",
                     price: "₹6,391   2 nights",
                     rating: "4.88"
                 }
             ]
         }
     ]; */

    const categoriesList = [
        {
            title: "Popular Homes in Bengaluru",
            listings: [
                { img: "assets/avif/000.avif", name: "Couple Private Studio, Koramangala", price: "₹4,500 for 2 nights", rating: "4.70", isGuestFav: true },
                { img: "assets/avif/001.avif", name: "Cozy 1BHK, Indiranagar", price: "₹5,000 for 2 nights", rating: "4.72", isGuestFav: true },
                { img: "assets/avif/002.avif", name: "Family Suite near MG Road", price: "₹7,500 for 2 nights", rating: "4.75", isGuestFav: true },
                { img: "assets/avif/003.avif", name: "Stylish 2BHK, Whitefield", price: "₹6,800 for 2 nights", rating: "4.78", isGuestFav: true },
                { img: "assets/avif/004.avif", name: "Luxury 3BHK Villa, JP Nagar", price: "₹12,000 for 2 nights", rating: "4.85", isGuestFav: true },
                { img: "assets/avif/005.avif", name: "Charming Villa, Yelahanka", price: "₹10,000 for 2 nights", rating: "4.90", isGuestFav: true },
                { img: "assets/avif/006.avif", name: "Couples’ Getaway, HSR Layout", price: "₹5,000 for 2 nights", rating: "4.80", isGuestFav: true },
                { img: "assets/avif/007.avif", name: "Stylish 3 Rooms, Koramangala", price: "₹8,000 for 2 nights", rating: "4.85", isGuestFav: true }
            ]
        },
        {
            title: "Available Next Month in Pune",
            listings: [
                { img: "assets/avif/008.avif", name: "Modern Studio, Kalyani Nagar", price: "₹4,800 for 2 nights", rating: "4.68", isGuestFav: true },
                { img: "assets/avif/009.avif", name: "Cozy 1BHK, Hinjewadi", price: "₹5,200 for 2 nights", rating: "4.72", isGuestFav: true },
                { img: "assets/avif/010.avif", name: "Luxury 2BHK, Koregaon Park", price: "₹9,000 for 2 nights", rating: "4.85", isGuestFav: true },
                { img: "assets/avif/011.avif", name: "Compact Studio near Viman Nagar", price: "₹4,200 for 2 nights", rating: "4.65", isGuestFav: true },
                { img: "assets/avif/012.avif", name: "Spacious 3BHK, Baner", price: "₹7,800 for 2 nights", rating: "4.80", isGuestFav: true },
                { img: "assets/avif/013.avif", name: "Affordable Room, Shivajinagar", price: "₹3,500 for 2 nights", rating: "4.55", isGuestFav: true },
                { img: "assets/avif/014.avif", name: "Bright Loft near Camp", price: "₹6,200 for 2 nights", rating: "4.77", isGuestFav: true },
                { img: "assets/avif/015.avif", name: "Penthouse, Wakad", price: "₹11,000 for 2 nights", rating: "4.88", isGuestFav: true }
            ]
        },
        {
            title: "Stay in South Goa",
            listings: [
                { img: "assets/avif/016.avif", name: "Beachfront 1BHK, Colva", price: "₹4,500 for 2 nights", rating: "4.72", isGuestFav: true },
                { img: "assets/avif/017.avif", name: "Luxury Villa with Pool, Palolem", price: "₹12,500 for 2 nights", rating: "4.90", isGuestFav: true },
                { img: "assets/avif/018.avif", name: "Charming Cottage, Benaulim", price: "₹5,200 for 2 nights", rating: "4.75", isGuestFav: true },
                { img: "assets/avif/019.avif", name: "Romantic Studio, Varca Beach", price: "₹4,000 for 2 nights", rating: "4.70", isGuestFav: true },
                { img: "assets/avif/020.avif", name: "Spacious Family Villa, Cavelossim", price: "₹9,800 for 2 nights", rating: "4.82", isGuestFav: true },
                { img: "assets/avif/021.avif", name: "Budget Flat, Margao", price: "₹3,900 for 2 nights", rating: "4.60", isGuestFav: true },
                { img: "assets/avif/022.avif", name: "Stylish Apartment, Agonda", price: "₹6,500 for 2 nights", rating: "4.78", isGuestFav: true },
                { img: "assets/avif/023.avif", name: "Couples’ Suite, Betalbatim", price: "₹4,800 for 2 nights", rating: "4.74", isGuestFav: true }
            ]
        },
        {
            title: "Homes in North Goa",
            listings: [
                { img: "assets/avif/024.avif", name: "Beachside Villa, Calangute", price: "₹9,200 for 2 nights", rating: "4.85", isGuestFav: true },
                { img: "assets/avif/025.avif", name: "Cozy Apartment near Baga Beach", price: "₹5,500 for 2 nights", rating: "4.75", isGuestFav: true },
                { img: "assets/avif/026.avif", name: "Portuguese Villa, Assagao", price: "₹11,000 for 2 nights", rating: "4.90", isGuestFav: true },
                { img: "assets/avif/027.avif", name: "Luxury 3BHK, Candolim", price: "₹13,500 for 2 nights", rating: "4.88", isGuestFav: true },
                { img: "assets/avif/028.avif", name: "Romantic Cottage, Morjim", price: "₹6,200 for 2 nights", rating: "4.78", isGuestFav: true },
                { img: "assets/avif/029.avif", name: "Modern Studio, Vagator", price: "₹5,200 for 2 nights", rating: "4.72", isGuestFav: true },
                { img: "assets/avif/030.avif", name: "Family Suite, Anjuna", price: "₹7,800 for 2 nights", rating: "4.80", isGuestFav: true },
                { img: "assets/avif/031.avif", name: "Private Villa with Pool, Arpora", price: "₹12,000 for 2 nights", rating: "4.87", isGuestFav: true }
            ]
        },
        {
            title: "Available Next Month in Gurgaon District",
            listings: [
                { img: "assets/avif/032.avif", name: "Luxury 4BHK Villa in DLF Phase 3", price: "₹15,000 for 2 nights", rating: "4.80", isGuestFav: true },
                { img: "assets/avif/033.avif", name: "Budget Studio Apartment, Sector 29", price: "₹5,500 for 2 nights", rating: "4.60", isGuestFav: true },
                { img: "assets/avif/034.avif", name: "Modern 1BHK in Cyber City", price: "₹4,800 for 2 nights", rating: "4.68", isGuestFav: true },
                { img: "assets/avif/035.avif", name: "Elegant 2BHK in DLF Phase 2", price: "₹7,200 for 2 nights", rating: "4.82", isGuestFav: true },
                { img: "assets/avif/036.avif", name: "Spacious Loft Apartment Near Golf Course Road", price: "₹6,900 for 2 nights", rating: "4.77", isGuestFav: true },
                { img: "assets/avif/037.avif", name: "Comfortable 1BHK, Sohna Road", price: "₹5,100 for 2 nights", rating: "4.73", isGuestFav: true },
                { img: "assets/avif/038.avif", name: "Bright Studio Near HUDA Metro", price: "₹4,600 for 2 nights", rating: "4.71", isGuestFav: true },
                { img: "assets/avif/039.avif", name: "Penthouse with Terrace, Gurgaon Central", price: "₹13,500 for 2 nights", rating: "4.88", isGuestFav: true }
            ]
        },
        {
            title: "Places to Stay in Hyderabad",
            listings: [
                { img: "assets/avif/040.avif", name: "Compact 1BHK Apartment, Banjara Hills", price: "₹3,800 for 2 nights", rating: "4.65", isGuestFav: true },
                { img: "assets/avif/041.avif", name: "Minimalist Studio Flat, HITEC City", price: "₹4,000 for 2 nights", rating: "4.68", isGuestFav: true },
                { img: "assets/avif/042.avif", name: "Cozy Guesthouse Room, Jubilee Hills", price: "₹3,500 for 2 nights", rating: "4.62", isGuestFav: true },
                { img: "assets/avif/043.avif", name: "Private Suite Near Charminar", price: "₹4,200 for 2 nights", rating: "4.70", isGuestFav: true },
                { img: "assets/avif/044.avif", name: "Comfortable 1BHK Near Gachibowli", price: "₹3,900 for 2 nights", rating: "4.66", isGuestFav: true },
                { img: "assets/avif/045.avif", name: "Charming Studio, Madhapur", price: "₹4,100 for 2 nights", rating: "4.69", isGuestFav: true },
                { img: "assets/avif/046.avif", name: "Modern 1BHK, Kondapur", price: "₹4,300 for 2 nights", rating: "4.72", isGuestFav: true },
                { img: "assets/avif/047.avif", name: "Spacious Loft Apartment, Somajiguda", price: "₹5,200 for 2 nights", rating: "4.75", isGuestFav: true }
            ]
        },
        {
            title: "Check out homes in Jaipur",
            listings: [
                { img: "assets/avif/048.avif", name: "Heritage Haveli Stay Near Amer Fort", price: "₹7,500 for 2 nights", rating: "4.84", isGuestFav: true },
                { img: "assets/avif/049.avif", name: "Modern 2BHK in Civil Lines", price: "₹6,200 for 2 nights", rating: "4.72", isGuestFav: true },
                { img: "assets/avif/050.avif", name: "Traditional Rajasthani Villa, Pink City", price: "₹9,800 for 2 nights", rating: "4.90", isGuestFav: true },
                { img: "assets/avif/051.avif", name: "Compact Studio Near MI Road", price: "₹3,700 for 2 nights", rating: "4.63", isGuestFav: true },
                { img: "assets/avif/052.avif", name: "Royal Stay Near City Palace", price: "₹11,200 for 2 nights", rating: "4.88", isGuestFav: true },
                { img: "assets/avif/053.avif", name: "Comfortable 1BHK Near Railway Station", price: "₹4,800 for 2 nights", rating: "4.69", isGuestFav: true },
                { img: "assets/avif/054.avif", name: "Penthouse with City View, C-Scheme", price: "₹10,500 for 2 nights", rating: "4.85", isGuestFav: true },
                { img: "assets/avif/055.avif", name: "Charming Guest Room in Old Jaipur", price: "₹3,900 for 2 nights", rating: "4.61", isGuestFav: true }
            ]
        },
        {
            title: "Popular homes in Dehradun",
            listings: [
                { img: "assets/avif/056.avif", name: "Mountain View Villa, Rajpur Road", price: "₹8,000 for 2 nights", rating: "4.82", isGuestFav: true },
                { img: "assets/avif/057.avif", name: "Cozy Cottage Near Mussoorie Road", price: "₹6,500 for 2 nights", rating: "4.75", isGuestFav: true },
                { img: "assets/avif/058.avif", name: "Compact Studio in City Center", price: "₹3,600 for 2 nights", rating: "4.64", isGuestFav: true },
                { img: "assets/avif/059.avif", name: "Spacious 3BHK Apartment, Jakhan", price: "₹7,200 for 2 nights", rating: "4.77", isGuestFav: true },
                { img: "assets/avif/060.avif", name: "Elegant Villa with Garden", price: "₹12,500 for 2 nights", rating: "4.91", isGuestFav: true },
                { img: "assets/avif/061.avif", name: "Simple 1BHK, Clement Town", price: "₹4,200 for 2 nights", rating: "4.66", isGuestFav: true },
                { img: "assets/avif/062.avif", name: "Rustic Wooden Cabin, outskirts", price: "₹5,800 for 2 nights", rating: "4.78", isGuestFav: true },
                { img: "assets/avif/063.avif", name: "Bright Studio Near ISBT", price: "₹3,900 for 2 nights", rating: "4.68", isGuestFav: true }
            ]
        },
        {
            title: "Stay in Delhi",
            listings: [
                { img: "assets/avif/064.avif", name: "Luxury Apartment, Connaught Place", price: "₹14,000 for 2 nights", rating: "4.89", isGuestFav: true },
                { img: "assets/avif/065.avif", name: "Cozy 1BHK Near Hauz Khas", price: "₹6,000 for 2 nights", rating: "4.73", isGuestFav: true },
                { img: "assets/avif/066.avif", name: "Modern Studio, South Delhi", price: "₹5,500 for 2 nights", rating: "4.70", isGuestFav: true },
                { img: "assets/avif/067.avif", name: "Elegant 2BHK in Greater Kailash", price: "₹9,800 for 2 nights", rating: "4.85", isGuestFav: true },
                { img: "assets/avif/068.avif", name: "Comfortable Stay, Karol Bagh", price: "₹4,900 for 2 nights", rating: "4.67", isGuestFav: true },
                { img: "assets/avif/069.avif", name: "Heritage Haveli, Old Delhi", price: "₹11,500 for 2 nights", rating: "4.86", isGuestFav: true },
                { img: "assets/avif/070.avif", name: "Minimalist Flat, Dwarka", price: "₹5,200 for 2 nights", rating: "4.65", isGuestFav: true },
                { img: "assets/avif/071.avif", name: "Penthouse with Terrace, Saket", price: "₹13,200 for 2 nights", rating: "4.87", isGuestFav: true }
            ]
        }
    ];





    // function to create cards
    function createEachCategoryRow(CatListItem) {


        // const catSection = document.querySelector(".category-section");
        const catSection = document.createElement("section");
        catSection.className = "category-section";
        catSection.innerHTML = `
    <div class="category-title">
        <span>${CatListItem.title}</span>
        <div  class="ct-right-arrow">
            <img src="assets/svg/mobile/right-arrow-categories.svg" alt="" aria-hidden="true">
        </div>
    </div>
    <div class="scroll-container">
        <div class="category-scroll">
        </div>
    </div>
    `;

        const catScroll = catSection.querySelector(".category-scroll");
        CatListItem.listings.forEach(listings => {
            const catCard = document.createElement('div');
            catCard.className = "category-card";
            catCard.innerHTML = `
    <div class="card-img-div">
        <img class ="card-img" src="${listings.img}" alt="${listings.name}">
        <div class="items-overlay">
            ${listings.isGuestFav ? `<div class="guest-fav-cont">
                    <span class="guest-fav-text">Guest favourite</span>
                </div>` : ""}
            <div class="heart-cont">
                <a href="#">
                    <img class="heart-icon" src="assets/svg/mobile/heart-icon.svg" alt="heart button to like hotel">
                </a>
            </div>
        </div>
    </div>
    <div class="card-details">
        <span class="card-title">
            ${listings.name}
        </span>
        <div class="card-subtitle">
           <span class="sub-style">
                ${listings.price}
           </span> 
           <span class="sub-rating">
                <img class="card-star-icon" src="assets/svg/mobile/rating-star.svg" alt="" aria-hidden="true">
                <span class="sub-style">
                    ${listings.rating}
                </span>
           </span>
        </div>
    </div>
    `;
            catScroll.appendChild(catCard);
        });

        return catSection;
    };




    //appending it to the categories
    const catSection = document.getElementById("categories");
    categoriesList.forEach(categoryListItem => {
        catSection.appendChild(createEachCategoryRow(categoryListItem));
    });



    /*    // for changing the image when selecting bottom nav bar
       const secondImage = document.querySelector("bn2");
       const bottomNavBtn = document.querySelectorAll(".bn-button");
   
   
       bottomNavBtn.forEach(button => {
           button.classList.remove("selected");
   
           button.addEventListener("click", function () {
               button.classList.add("selected");
               const img = button.querySelector(".bn-btn-img"); 
                   img.src = "assets/svg/mobile/floating-wishlists-selected.svg"; 
           });
       }); */

    //change svg color when selected 
    const navBtns = document.querySelectorAll(".bn-button");

    navBtns.forEach(navButton => {
        navButton.addEventListener("click", function () {
            navBtns.forEach(btn => {
                btn.classList.remove("selected");

            });
            navButton.classList.add("selected");
        });
    });


    // to show and hide floating navigation bar
    const floatingFooter = document.querySelector(".floating-footer");
    let lastScroll = 0;
     
    
    window.addEventListener("scroll", function () {
        currentScroll = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        console.log(
            "currentScroll:", currentScroll,
            "maxScroll:", maxScroll,
            "scrollHeight:", document.documentElement.scrollHeight,
            "clientHeight:", document.documentElement.clientHeight,
            "inner height:", window.innerHeight,
        );

        if (currentScroll === 0 || currentScroll >= maxScroll - 5) {
            floatingFooter.classList.remove("invisible");
        } else if (currentScroll > lastScroll) {
            floatingFooter.classList.add("invisible");
        }

        else {
            floatingFooter.classList.remove("invisible");
        }
        lastScroll = currentScroll;
    });







    // 
});



