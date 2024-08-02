document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.querySelector('.items-container');
    const paginationContainer = document.querySelector('.pagination');
    const itemsPerPage = 6;
    let currentPage = 1;
    let totalPages = 1;

    const items = [
        { name: "JORDAN 5 RETRO ANTRACIT", price: "199 $", discount: "-33%", type: "SHOES",img2: "./back3.webp", img: "./antracit.webp", id: "product12" },
        { name: "JORDAN 5 RETRO WHAT THE", price: "199 $", discount: "-33%", type: "SHOES", img2: "./back2.webp", img: "./what.webp", id: "product1" },
        { name: "TRAVIS SCOTT X JORDAN PAISLEY SHORTS", price: "199 $", discount: "-33%", type: "SHORTS", img2: "./back4.webp", img: "./tr-shorts.webp", id: "product2" },
        { name: "JORDAN 5 RETRO LOW WINGS", price: "219 $", discount: "-25%", type: "SHOES", img2: "./back-1.webp", img: "./wings.webp", id: "product3" },
        { name: "NIKE AIR MAX 1 TRAVIS SCOTT ", price: "159 $", discount: "-50%", type: "SHOES", img2: "./back5.webp", img: "./travis-low.webp", id: "product4" },
        { name: "OLIVE SWEATSHIRT STONE ISLAND LOGO PATCH", price: "189 $", discount: "-25%", type: "SWEATERS", img2: "./back6.webp", img: "./corteiz.webp", id: "product5" },


        { name: "NEW BALANCE 2002R DARK MOSS", price: "259 $", discount: "-10%", type: "SHOES", img2: "./back7.webp", img: "./nb-cross.webp", id: "product6" },
        { name: "ASICS GEL-NYC IVORY CLAY GREY", price: "199 $", discount: "-33%", type: "SHOES", img2: "./back8.webp", img: "./asics-cross.webp", id: "product7" },
        { name: "THE NORTH FACE NUPT'S", price: "200 $", discount: "-20%", type: "OUTERWEAR", img2: "./tnf.webp", img: "./tnf.webp", id: "product8" },
        { name: "PALM ANGELS CLASSIC", price: "120 $", discount: "-10%", type: "PANTS", img2: "./back10.webp", img: "./pants.webp", id: "product9" },
        { name: "NIKE DUNK LOW IRONSTONE", price: "189 $", discount: "-50%", type: "SHOES", img2: "./back11.webp", img: "./sb-iron.webp", id: "product10" },
        { name: "YZY X GAP HOODIE", price: "150 $", discount: "-30%", type: "SWEATERS", img2: "./back12.webp", img: "./gap-coat.jpg", id: "product11" },


        { name: "NEW BALANCE 9060 BLACKTOP DARK MOSS", price: "199 $", discount: "-33%", type: "SHOES", img2: "./back13.webp", img: "./nb-dark.webp", id: "product14" },
        { name: "JORDAN 5 RETRO UNC UNIVERSITY BLUE", price: "199 $", discount: "-33%", type: "SHOES", img2: "./back14.webp", img: "./prod-pic1.jpg", id: "product15" },
        { name: "PALACE TRI-RIPPER HOODIE GREY MARL", price: "129 $", discount: "-25%", type: "SWEATERS", img2: "./back15.webp", img: "./palace.webp", id: "product16" },
        { name: "STONE ISLAND BERMUDA", price: "80 $", discount: "-15%", type: "SHORTS", img2: "./back16.webp", img: "./stone.webp", id: "product17" },
        { name: "STONE ISLAND GARMENT DYED FLEECE PANTS", price: "139 $", discount: "-25%",  type: "PANTS", img2: "./back17.webp", img: "./sp.webp", id: "product18" },
        { name: "TRAPSTAR PUFFER JACKET BLACKOUT EDITION", price: "199 $", discount: "-33%", type: "OUTERWEAR", img2: "./trap.webp", img: "./trap.webp", id: "product13" }
    ];

    totalPages = Math.ceil(items.length / itemsPerPage);

    function displayItems(page) {
        itemsContainer.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = items.slice(start, end);

        paginatedItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('whole-card');
            itemDiv.innerHTML = `
                <div class="top-of-card">
                    <div class="discount">${item.discount}</div>
                    <div class="type">${item.type}</div>
                </div>
                <div class="pics">
                    <img class="pic-of-card" src="${item.img}" alt="">
                    <img src="${item.img2}" alt="" class="back-of-pic">
                </div>    
                <div class="mid-of-card">
                    <div class="name-of">${item.name}</div>
                </div>
                <div class="bottom-of-card">
                    <div class="price">${item.price}</div>
                    <div class="edit-delete">
                    </div>
                </div>
            `;
            itemsContainer.appendChild(itemDiv);
        });
    }

    function setupPagination() {
        paginationContainer.innerHTML = '';
        paginationContainer.innerHTML += `<p href=".section2" data-page="prev">&laquo;</p>`;
        for (let i = 1; i <= totalPages; i++) {
            paginationContainer.innerHTML += `<p href="#" data-page="${i}">${i}</p>`;
        }
        paginationContainer.innerHTML += `<p href="#" data-page="next">&raquo;</p>`;
    }

    paginationContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'P') {
            const page = e.target.getAttribute('data-page');
            if (page === 'prev' && currentPage > 1) {
                currentPage--;
            } else if (page === 'next' && currentPage < totalPages) {
                currentPage++;
            } else if (!isNaN(page)) {
                currentPage = parseInt(page);
            }
            loadItems();
        }
    });

    function loadItems() {
        displayItems(currentPage);
        updateActivePage();
    }

    function updateActivePage() {
        const paginationLinks = paginationContainer.querySelectorAll('p');
        paginationLinks.forEach(link => link.classList.remove('active'));
        paginationLinks.forEach(link => {
            if (parseInt(link.getAttribute('data-page')) === currentPage) {
                link.classList.add('active');
            }
        });
    }

    setupPagination();
    loadItems();
});







const items = [
    { name: "JORDAN 5 RETRO ANTRACIT", price: "199 $", discount: "-33%", type: "SHOES",img2: "./back3.webp", img: "./antracit.webp", id: "product12" },
    { name: "JORDAN 5 RETRO WHAT THE", price: "199 $", discount: "-33%", type: "SHOES", img2: "./back2.webp", img: "./what.webp", id: "product1" },
    { name: "TRAVIS SCOTT X JORDAN PAISLEY SHORTS", price: "199 $", discount: "-33%", type: "SHORTS", img2: "./back4.webp", img: "./tr-shorts.webp", id: "product2" },
    { name: "JORDAN 5 RETRO LOW WINGS", price: "219 $", discount: "-25%", type: "SHOES", img2: "./back-1.webp", img: "./wings.webp", id: "product3" },
    { name: "NIKE AIR MAX 1 TRAVIS SCOTT ", price: "159 $", discount: "-50%", type: "SHOES", img2: "./back5.webp", img: "./travis-low.webp", id: "product4" },
    { name: "OLIVE SWEATSHIRT STONE ISLAND LOGO PATCH", price: "189 $", discount: "-25%", type: "SWEATERS", img2: "./back6.webp", img: "./corteiz.webp", id: "product5" },


    { name: "NEW BALANCE 2002R DARK MOSS", price: "259 $", discount: "-10%", type: "SHOES", img2: "./back7.webp", img: "./nb-cross.webp", id: "product6" },
    { name: "ASICS GEL-NYC IVORY CLAY GREY", price: "199 $", discount: "-33%", type: "SHOES", img2: "./back8.webp", img: "./asics-cross.webp", id: "product7" },
    { name: "THE NORTH FACE NUPT'S", price: "200 $", discount: "-20%", type: "OUTERWEAR", img2: "./tnf.webp", img: "./tnf.webp", id: "product8" },
    { name: "PALM ANGELS CLASSIC", price: "120 $", discount: "-10%", type: "PANTS", img2: "./back10.webp", img: "./pants.webp", id: "product9" },
    { name: "NIKE DUNK LOW IRONSTONE", price: "189 $", discount: "-50%", type: "SHOES", img2: "./back11.webp", img: "./sb-iron.webp", id: "product10" },
    { name: "YZY X GAP HOODIE", price: "150 $", discount: "-30%", type: "SWEATERS", img2: "./back12.webp", img: "./gap-coat.jpg", id: "product11" },


    { name: "NEW BALANCE 9060 BLACKTOP DARK MOSS", price: "199 $", discount: "-33%", type: "SHOES", img2: "./back13.webp", img: "./nb-dark.webp", id: "product14" },
    { name: "JORDAN 5 RETRO UNC UNIVERSITY BLUE", price: "199 $", discount: "-33%", type: "SHOES", img2: "./back14.webp", img: "./prod-pic1.jpg", id: "product15" },
    { name: "PALACE TRI-RIPPER HOODIE GREY MARL", price: "129 $", discount: "-25%", type: "SWEATERS", img2: "./back15.webp", img: "./palace.webp", id: "product16" },
    { name: "STONE ISLAND BERMUDA", price: "80 $", discount: "-15%", type: "SHORTS", img2: "./back16.webp", img: "./stone.webp", id: "product17" },
    { name: "STONE ISLAND GARMENT DYED FLEECE PANTS", price: "139 $", discount: "-25%",  type: "PANTS", img2: "./back17.webp", img: "./sp.webp", id: "product18" },
    { name: "TRAPSTAR PUFFER JACKET BLACKOUT EDITION", price: "199 $", discount: "-33%", type: "OUTERWEAR", img2: "./trap.webp", img: "./trap.webp", id: "product13" }
];

document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('items-container');
    const filters = document.querySelectorAll('.filters input[type="checkbox"]');
    const sortSelect = document.getElementById('sort');

    const renderItems = (items) => {
        itemsContainer.innerHTML = '';
        items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'whole-card';
            itemCard.innerHTML = `
            <div class="top-of-card">
            <div class="discount">${item.discount}</div>
            <div class="type">${item.type}</div>
        </div>
        <div class="pics">
            <img class="pic-of-card" src="${item.img}" alt="">
            <img src="${item.img2}" alt="" class="back-of-pic">
        </div>    
        <div class="mid-of-card">
            <div class="name-of">${item.name}</div>
        </div>
        <div class="bottom-of-card">
            <div class="price">${item.price}</div>
            <div class="edit-delete">
            </div>
        </div>
            `;
            itemsContainer.appendChild(itemCard);
        });
    };

    const filterItems = () => {
        let selectedDiscounts = Array.from(document.querySelectorAll('input[name="discount"]:checked')).map(checkbox => checkbox.value);
        let selectedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(checkbox => checkbox.value);
        
        let filteredItems = items.filter(item => {
            let discountMatch = selectedDiscounts.length === 0 || selectedDiscounts.includes(item.discount);
            let typeMatch = selectedTypes.length === 0 || selectedTypes.includes(item.type);
            return discountMatch && typeMatch;
        });

        let sortValue = sortSelect.value;
        if (sortValue === 'price-low-high') {
            filteredItems.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
        } else if (sortValue === 'price-high-low') {
            filteredItems.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
        }

        renderItems(filteredItems);
    };

    filters.forEach(filter => filter.addEventListener('change', filterItems));
    sortSelect.addEventListener('change', filterItems);

    renderItems(items);
});







document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const closeModalBtn = document.getElementsByClassName('close-btn')[0];
    const goToProduct = document.querySelector('.goto-product-btn');

    const items = [
        { name: "JORDAN 5 RETRO ANTRACIT", price: "199 $", discount: "-33%", type: "SHOES",img2: "./back3.webp", img: "./antracit.webp", id: "product12" },
        { name: "JORDAN 5 RETRO WHAT THE", price: "199 $", discount: "-33%", type: "SHOES", img2: "./back2.webp", img: "./what.webp", id: "product1" },
        { name: "TRAVIS SCOTT X JORDAN PAISLEY SHORTS", price: "199 $", discount: "-33%", type: "SHORTS", img2: "./back4.webp", img: "./tr-shorts.webp", id: "product2" },
        { name: "JORDAN 5 RETRO LOW WINGS", price: "219 $", discount: "-25%", type: "SHOES", img2: "./back-1.webp", img: "./wings.webp", id: "product3" },
        { name: "NIKE AIR MAX 1 TRAVIS SCOTT ", price: "159 $", discount: "-50%", type: "SHOES", img2: "./back5.webp", img: "./travis-low.webp", id: "product4" },
        { name: "OLIVE SWEATSHIRT STONE ISLAND LOGO PATCH", price: "189 $", discount: "-25%", type: "SWEATERS", img2: "./back6.webp", img: "./corteiz.webp", id: "product5" },


        { name: "NEW BALANCE 2002R DARK MOSS", price: "259 $", discount: "-10%", type: "SHOES", img2: "./back7.webp", img: "./nb-cross.webp", id: "product6" },
        { name: "ASICS GEL-NYC IVORY CLAY GREY", price: "199 $", discount: "-33%", type: "SHOES", img2: "./back8.webp", img: "./asics-cross.webp", id: "product7" },
        { name: "THE NORTH FACE NUPT'S", price: "200 $", discount: "-20%", type: "OUTERWEAR", img2: "./tnf.webp", img: "./tnf.webp", id: "product8" },
        { name: "PALM ANGELS CLASSIC", price: "120 $", discount: "-10%", type: "PANTS", img2: "./back10.webp", img: "./pants.webp", id: "product9" },
        { name: "NIKE DUNK LOW IRONSTONE", price: "189 $", discount: "-50%", type: "SHOES", img2: "./back11.webp", img: "./sb-iron.webp", id: "product10" },
        { name: "YZY X GAP HOODIE", price: "150 $", discount: "-30%", type: "SWEATERS", img2: "./back12.webp", img: "./gap-coat.jpg", id: "product11" },


        { name: "NEW BALANCE 9060 BLACKTOP DARK MOSS", price: "199 $", discount: "-33%", type: "SHOES", img2: "./back13.webp", img: "./nb-dark.webp", id: "product14" },
        { name: "JORDAN 5 RETRO UNC UNIVERSITY BLUE", price: "199 $", discount: "-33%", type: "SHOES", img2: "./back14.webp", img: "./prod-pic1.jpg", id: "product15" },
        { name: "PALACE TRI-RIPPER HOODIE GREY MARL", price: "129 $", discount: "-25%", type: "SWEATERS", img2: "./back15.webp", img: "./palace.webp", id: "product16" },
        { name: "STONE ISLAND BERMUDA", price: "80 $", discount: "-15%", type: "SHORTS", img2: "./back16.webp", img: "./stone.webp", id: "product17" },
        { name: "STONE ISLAND GARMENT DYED FLEECE PANTS", price: "139 $", discount: "-25%",  type: "PANTS", img2: "./back17.webp", img: "./sp.webp", id: "product18" },
        { name: "TRAPSTAR PUFFER JACKET BLACKOUT EDITION", price: "199 $", discount: "-33%", type: "OUTERWEAR", img2: "./trap.webp", img: "./trap.webp", id: "product13" }
    ];

    openModalBtn.onclick = function() {
        modal.style.display = 'block';
    };

    closeModalBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';
        
        if (query) {
            const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
            filteredItems.forEach(item => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                div.innerHTML = `
                    <span>${item.name} - ${item.price}</span>
                    
                `;
                searchResults.appendChild(div);
            });
        }
    });
});





