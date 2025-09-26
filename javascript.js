
document.addEventListener("DOMContentLoaded", () => {
    let enableLog = false;
    
    let debug = false;
    //to set outline if in debug mode
    if (debug) {
        const style = document.createElement("style");
        style.textContent = `*{outline : 1px solid pink}`;
        document.head.appendChild(style);
    }

    /*     // creating containers with different colors to simulate the category cards
        const parentContainer = document.querySelector(".category-scroll");
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
            title: "Popular homes in Bengaluru",
            listings: [
                { img: "assets/avif/000.avif", name: "Flat in Bangalore Urban", price: "₹4,500 for 2 nights", rating: "4.70", isGuestFav: true },
                { img: "assets/avif/001.avif", name: "Apartment in Bangalore Urban", price: "₹5,000 for 2 nights", rating: "4.72", isGuestFav: true },
                { img: "assets/avif/002.avif", name: "Flat in Bangalore Urban", price: "₹7,500 for 2 nights", rating: "4.75", isGuestFav: true },
                { img: "assets/avif/003.avif", name: "Place to stay in Bangalore Urban", price: "₹6,800 for 2 nights", rating: "4.78", isGuestFav: true },
                { img: "assets/avif/072.avif", name: "Flat in Bangalore Urban", price: "₹12,000 for 2 nights", rating: "4.85", isGuestFav: true },
                { img: "assets/avif/005.avif", name: "Room in Bangalore Urban", price: "₹10,000 for 2 nights", rating: "4.90", isGuestFav: true },
                { img: "assets/avif/006.avif", name: "Flat in Koramangala", price: "₹5,000 for 2 nights", rating: "4.80", isGuestFav: true },
                { img: "assets/avif/007.avif", name: "Flat in Bangalore Urban", price: "₹8,000 for 2 nights", rating: "4.85", isGuestFav: true }
            ]
        },
        {
            title: "Available next Month in Pune",
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
            title: "Places to stay in Hyderabad",
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
            title: "Stay in Dehradun",
            listings: [
                { img: "assets/avif/064.avif", name: "Guest house in Mussoorie", price: "₹14,000 for 2 nights", rating: "4.89", isGuestFav: true },
                { img: "assets/avif/065.avif", name: "Flat in Dehradun", price: "₹6,000 for 2 nights", rating: "4.73", isGuestFav: true },
                { img: "assets/avif/066.avif", name: "Flat in Dehradun", price: "₹5,500 for 2 nights", rating: "4.70", isGuestFav: true },
                { img: "assets/avif/067.avif", name: "Villa in Dehradun", price: "₹9,800 for 2 nights", rating: "4.85", isGuestFav: true },
                { img: "assets/avif/068.avif", name: "Home in Dehradun", price: "₹4,900 for 2 nights", rating: "4.67", isGuestFav: true },
                { img: "assets/avif/069.avif", name: "Apartment in Dehradun", price: "₹11,500 for 2 nights", rating: "4.86", isGuestFav: true },
                { img: "assets/avif/070.avif", name: "Apartment in Dehradun", price: "₹5,200 for 2 nights", rating: "4.65", isGuestFav: true },
                { img: "assets/avif/071.avif", name: "Apartment in Dehradun", price: "₹13,200 for 2 nights", rating: "4.87", isGuestFav: true }
            ]
        }
    ];

    const mediaQuerry = window.matchMedia('(min-width:744px)');
    /* querry selectors */
    const searchBar = document.querySelector(".searchbar-desk");
    const searchBubble = document.querySelector(".search-bubble");
    const firstChildren = document.querySelectorAll(".searchbar-desk .first-child");
    const secondChildren = document.querySelectorAll(".searchbar-desk .second-child");
    const navIconsContainerDesk = document.querySelector(".nav-icons-container-desk");
    const headerDesktop = document.querySelector(".header-desktop");



    // scrollListener to activate various functions
    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;
        false && console.log("current scroll : " + currentScroll);
        /* underline position in mobile view */


        if (mediaQuerry.matches) {
            shrinkSearchBarScroll(currentScroll);
        } else {
            /* shrink video in mobile view */
            underlinePositionScrolling(currentScroll);
            shrinkVideoScroll(currentScroll);
            toggleFloatingFooter(currentScroll);
        }
    });



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
            <!-- adding space between items -->
            <div class="spacer"></div>
            
            <!-- right and left arrows for tablet view -->
            <div class="title-arrows-cnt-tab">

                <button href="#" class="tact-disabled tact-arrows" aria-hidden="true">
                    <img src="assets/svg/tablet/cat-left-arrow.svg" alt="">
                </button> 
                <button href="#" class=" tact-arrows" aria-hidden="true">
                    <img src="assets/svg/tablet/cat-right-arrow.svg" alt="">
                </button>
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





    let lastScrolledPosition = 0;
    //function to handle floating bottom nav or floating footer
    function toggleFloatingFooter(currentScroll) {
        const scrollHeight = document.documentElement.scrollHeight;
        const windowInnerHeight = window.innerHeight;
        /* const maxScroll = document.documentElement.scrollHeight - window.innerHeight; */
        const maxScroll = scrollHeight - windowInnerHeight;
        debug && console.log(`maxScroll: ${maxScroll}, scrollHeight: ${scrollHeight} , windowHeight: ${windowInnerHeight} `)

        if (currentScroll === 0 || currentScroll >= maxScroll - 15) {
            floatingFooter.classList.remove("invisible");
        } else if (currentScroll > lastScrolledPosition) {
            floatingFooter.classList.add("invisible");
        } else {
            floatingFooter.classList.remove("invisible");
        }
        lastScrolledPosition = currentScroll;
    }

    // function to reduce the size of the video to 0 when scrolling
    function shrinkVideoScroll(currentScroll) {
        const allNavVids = document.querySelectorAll(".nav-video");
        const navIconsContainer = document.querySelector(".nav-icons-container");


        allNavVids.forEach(navVideo => {

            // //checking for original height if not storing it inititally 
            if (!navVideo.dataset.originalHeight) {
                const vidHeight = navVideo.clientHeight;
                navVideo.dataset.originalHeight = vidHeight;
                debug && console.log("originalHeight - navVid :", vidHeight);

            }
            if (!navIconsContainer.dataset.originalPadding) {
                const containerSyle = window.getComputedStyle(navIconsContainer);
                const paddingtop = parseFloat(containerSyle.paddingTop);
                navIconsContainer.dataset.originalPadding = paddingtop;
            }
            const baseHeight = parseFloat(navVideo.dataset.originalHeight);
            const basePaddingTopCnt = parseFloat(navIconsContainer.dataset.originalPadding);

            let maxScroll = 300;
            let newScale = Math.max(0, 1 - currentScroll / maxScroll);


            /* const vidHeight = navVideo.clientHeight;
            const vidStyle = window.getComputedStyle(navVideo);
            const vidOffsetHeight = navVideo.offsetHeight;
            const vidHeight = 50;
            const vidPaddTop = parseFloat(vidStyle.paddingTop);
            const vidPadBottom = parseFloat(vidStyle.paddingBottom); 
            const totalVidHeight = vidHeight + vidPaddTop + vidPadBottom;
 
            if (debug) {

                console.log("  clientHeight:", vidHeight);
                console.log("  offSetHeight:", vidOffsetHeight);
                console.log("  vidPading top :", vidPaddTop);
                console.log("  vid pad bottom:", vidPadBottom);
                console.log("  total video height:", totalVidHeight);
            } */


            // calculating the new height with respect to scroll
            let newHeight = Math.max(0, baseHeight * (1 - currentScroll / maxScroll));
            //dynamically calculating the padding 
            let newPadding = Math.max(0, basePaddingTopCnt * (1 - currentScroll / maxScroll));

            debug && console.log("new height:", newHeight);
            navVideo.style.transform = `scale(${newScale})`;
            navVideo.style.height = `${newHeight}px`;
            navIconsContainer.style.paddingTop = `${newPadding}px`;


        });



    }

    const underLine = document.querySelector(".moving-underline");
    const navIcons = document.querySelectorAll(".nav-icon");

    //initial section of the nav icon or underline for the first item
    if (navIcons.length > 0) {
        initialNavIconSelection();
    }

    function initialNavIconSelection() {
        const firstNavIcon = navIcons[0];
        firstNavIcon.classList.add("selected");
        const widthFirstIcon = firstNavIcon.querySelector(".nav-title").offsetWidth;
        const positionFirstIcon = firstNavIcon.querySelector(".nav-title").offsetLeft;
        moveTheUnderline(widthFirstIcon, positionFirstIcon);

    }

    //to move the underline below nav icons during selection and change video

    navIcons.forEach((navIcon, index) => {
        navIcon.addEventListener("click", function () {
            navIcons.forEach(icon => {
                icon.classList.remove("selected");
            });
            navIcon.classList.add("selected");
            const widthIcon = navIcon.querySelector(".nav-title").offsetWidth;
            const positionIcon = navIcon.querySelector(".nav-title").offsetLeft;
            const navVideoVid = navIcon.querySelector(".nav-video video");

            /* //calling initial selection 
            initialNavIconSelection() */
            // function to move the underline
            moveTheUnderline(widthIcon, positionIcon);
            // calling function to change video when selected
            changeVideo(navVideoVid, index);
        });
    });


    // function moveTheUnderline(width, positionLeft) {
    function moveTheUnderline(width, postition) {
        const navIconsContainer = document.querySelector(".nav-icons-container");
        const navIconsContainerStyles = window.getComputedStyle(navIconsContainer);
        const paddingLeft = parseFloat(navIconsContainerStyles.paddingLeft);
        underLine.style.width = `${width}px`;
        underLine.style.transform = `translateX(${postition - paddingLeft}px)`;
        // underLine.style.transform = `translateX(${postition - 56}px)`;
        //-56 px because of the padding of the parent container

    }
    //adding margin bottom to the underline while scrolling
    function underlinePositionScrolling(currentScroll) {

        const movingUnderline = document.querySelector(".moving-underline");
        if (currentScroll === 0 || currentScroll < 300) {
            movingUnderline.classList.remove("scrolled");
        } else if (currentScroll >= 300) {
            movingUnderline.classList.add("scrolled");
        }
    }

    /*     // changing video file when selecting item
        function changeVideo(navVideo, index) {
            const videoWebm = navVideo.querySelector("source[type='video/webm']");
            const videoMov = navVideo.querySelector("source[type='video/mp4']");
            if (index == 0) {
                videoWebm.src = "assets/media/house-selected.webm";
                // videoMov.src = "assets/media/mov/house-selected.mov";
    
            } else if (index == 1) {
                videoWebm.src = "assets/media/balloon-selected.webm";
                // videoMov.src = "assets/media/mov/balloon-selected.mov";
    
            } else if (index == 2) {
    
                videoWebm.src = "assets/media/bell-selected.webm";
                // videoMov.src = "assets/media/mov/bell-twirl-selected.mov";
            }
            navVideo.load();
            navVideo.play();
        } */
    // changing video file when selecting item
    function changeVideo(navVideo, index) {
        const videoWebm = navVideo.querySelector("source[type='video/webm']");
        const videoMov = navVideo.querySelector("source[type='video/mp4']");

        // check if browser supports hvc1 (.mov HEVC codec)
        const canPlayMov = navVideo.canPlayType('video/mp4; codecs="hvc1"');
        debug && console.log(`Can browser support mov: ${canPlayMov || "Not supported"}`);

        if (index === 0) {
            if (canPlayMov) {
                videoMov.src = "assets/media/mov/house-selected.mov";
            } else {
                videoWebm.src = "assets/media/house-selected.webm";
            }
        } else if (index === 1) {
            if (canPlayMov) {
                videoMov.src = "assets/media/mov/balloon-selected.mov";
            } else {
                videoWebm.src = "assets/media/balloon-selected.webm";
            }
        } else if (index === 2) {
            if (canPlayMov) {
                videoMov.src = "assets/media/mov/bell-twirl-selected.mov";
            } else {
                videoWebm.src = "assets/media/bell-selected.webm";
            }
        }


        navVideo.load();
        navVideo.play();
    }



    /* Functinos that happen from media querry 744px */

    //function to shrink the size of the searchbar when scrolling
    let isShrunk = false;
    function shrinkSearchBarScroll(currentScroll) {

        let maxScroll = 300;


        if (currentScroll >= maxScroll) {

            /* changing the height is causing a bouncing effect */
            // headerDesktop.classList.add("scrolled");
            /*  setTimeout(() => {
                 headerDesktop.classList.add("scrolled");
             }, 200); */
            headerDesktop.classList.remove("expand"); // reset opposite state
            headerDesktop.classList.add("shrink");
            isShrunk = true;
            searchBar.classList.add("second-child");
            searchBubble.classList.add("sb-second-child");
            navIconsContainerDesk.classList.add("scrolled");
            firstChildren.forEach(fchild => fchild.classList.add("scrolled"));
            secondChildren.forEach(schild => schild.classList.add("scrolled"));
        } else if (currentScroll < maxScroll) {

            // headerDesktop.classList.remove("scrolled");
            /*   setTimeout(() => {
                  headerDesktop.classList.remove("scrolled");
              }, 200); */
            headerDesktop.classList.remove("shrink"); // reset opposite state
            headerDesktop.classList.add("expand");
            isShrunk = false;
            searchBar.classList.remove("second-child");
            searchBubble.classList.remove("sb-second-child");
            navIconsContainerDesk.classList.remove("scrolled");
            firstChildren.forEach(fchild => fchild.classList.remove("scrolled"));
            secondChildren.forEach(schild => schild.classList.remove("scrolled"));
        }

    }

    const navContentDeskAll = document.querySelectorAll(".nav-content-desk");

    navContentDeskAll.forEach((navContentDesk, index) => {
        navContentDesk.addEventListener("click", () => {
            enableLog && console.log("nav content desktop clicked");

            const navVideoDesk_Video = navContentDesk.querySelector(".nav-video-desk video");
            changeNavVideoDesk(navVideoDesk_Video, index);


            moveUnderlineDesk(navContentDesk);


        });

    });

    //funnction to change the video on click of the navcontent
    function changeNavVideoDesk(navVideoDesk_Video, index) {
        const videoWebm = navVideoDesk_Video.querySelector("source[type='video/webm']");
        const videoMp4 = navVideoDesk_Video.querySelector("source[type='video/mp4']");
        const canPlayMp4 = navVideoDesk_Video.canPlayType('video/mp4; codecs="hvc1"');
        disableLog && console.log("can it play mp4 : ", canPlayMp4 || "no it cant");
        if (index === 0) {
            if (canPlayMp4) {
                videoMp4.src = "assets/media/mov/house-selected.mov";
            } else {
                videoWebm.src = "assets/media/house-selected.webm";
            }
        } else if (index === 1) {
            if (canPlayMp4) {
                videoMp4.src = "assets/media/mov/balloon-selected.mov";
            } else {
                videoWebm.src = "assets/media/balloon-selected.webm";
            }
        } else if (index === 2) {
            if (canPlayMp4) {
                videoMp4.src = "assets/media/mov/bell-twirl-selected.mov";
            } else {
                videoWebm.src = "assets/media/bell-selected.webm";
            }
        }
        navVideoDesk_Video.load();
        navVideoDesk_Video.play();
    }
    // function to translate the underline to the desired position
    function moveUnderlineDesk(navContentDesk) {

        const underlineDesk = document.querySelector(".moving-underline-desk");

        const itemBounding = navContentDesk.getBoundingClientRect();
        const itemWidth = itemBounding.width;
        const offsetLeftItem = navContentDesk.offsetLeft;
        const offsetWidthItem = navContentDesk.offsetWidth;
        const itemsPositionLeft = itemBounding.left;

        enableLog && console.log(
            "item width: ", itemWidth, '\n',
            "offsetWidth: ", offsetWidthItem, '\n',
            "offsetLeft: ", offsetLeftItem, '\n',
            "bounding left: ", itemsPositionLeft, '\n',

        );

        underlineDesk.style.width = `${offsetWidthItem}px`;
        underlineDesk.style.transform = `translateX(${offsetLeftItem}px)`;
        disableLog && console.log("paddingleft :", paddingLeftItem, "left offset: ", leftItem, "difference:", leftItem - paddingLeftItem);
    }



    // 
});





