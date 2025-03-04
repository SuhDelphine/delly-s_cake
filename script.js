
// Cake data
const cakes = [
    {
        id: 1,
        name: "Chocolate Delight Cake",
        price: 49.99,
        description: "Rich and moist chocolate cake layered with chocolate ganache and decorated with chocolate shavings.",
        categories: ["bestseller", "birthday", "anniversary"],
        flavors: ["chocolate"],
        dietary: [],
        images: [
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        sizes: [
            { name: "6 inch (serves 8)", price: 49.99 },
            { name: "8 inch (serves 12)", price: 69.99 },
            { name: "10 inch (serves 16)", price: 89.99 }
        ],
        flavorOptions: ["Dark Chocolate", "Milk Chocolate", "White Chocolate"]
    },
    {
        id: 2,
        name: "Vanilla Berry Bliss",
        price: 44.99,
        description: "Light vanilla sponge cake with layers of mixed berry compote and whipped cream frosting.",
        categories: ["bestseller", "birthday", "anniversary"],
        flavors: ["vanilla", "fruit"],
        dietary: ["vegan"],
        images: [
            "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1534766438357-2b270dbd1b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        sizes: [
            { name: "6 inch (serves 8)", price: 44.99 },
            { name: "8 inch (serves 12)", price: 64.99 },
            { name: "10 inch (serves 16)", price: 84.99 }
        ],
        flavorOptions: ["Classic Vanilla", "French Vanilla", "Vanilla Bean"]
    },
    {
        id: 3,
        name: "Red Velvet Dream",
        price: 54.99,
        description: "Classic red velvet cake with cream cheese frosting, perfect for any special occasion.",
        categories: ["bestseller", "birthday", "anniversary"],
        flavors: ["red-velvet"],
        dietary: [],
        images: [
            "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1605291525447-846d45341dcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        sizes: [
            { name: "6 inch (serves 8)", price: 54.99 },
            { name: "8 inch (serves 12)", price: 74.99 },
            { name: "10 inch (serves 16)", price: 94.99 }
        ],
        flavorOptions: ["Classic Red Velvet", "Double Red Velvet"]
    },
    {
        id: 4,
        name: "Lemon Raspberry Cake",
        price: 47.99,
        description: "Tangy lemon cake with layers of raspberry filling and lemon buttercream frosting.",
        categories: ["birthday", "anniversary", "custom"],
        flavors: ["fruit"],
        dietary: [],
        images: [
            "https://images.unsplash.com/photo-1532117892228-a2c8c14b1f78?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        sizes: [
            { name: "6 inch (serves 8)", price: 47.99 },
            { name: "8 inch (serves 12)", price: 67.99 },
            { name: "10 inch (serves 16)", price: 87.99 }
        ],
        flavorOptions: ["Lemon", "Lemon Raspberry", "Lemon Blueberry"]
    },
    {
        id: 5,
        name: "Classic Cheesecake",
        price: 42.99,
        description: "Creamy, smooth cheesecake with a graham cracker crust, topped with fresh berries.",
        categories: ["birthday", "anniversary"],
        flavors: ["cheesecake"],
        dietary: [],
        images: [
            "https://images.unsplash.com/photo-1567171466295-4afa63d45416?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        sizes: [
            { name: "6 inch (serves 8)", price: 42.99 },
            { name: "8 inch (serves 12)", price: 62.99 },
            { name: "10 inch (serves 16)", price: 82.99 }
        ],
        flavorOptions: ["Classic", "Strawberry", "Blueberry", "Chocolate"]
    },
    {
        id: 6,
        name: "Elegant Wedding Cake",
        price: 299.99,
        description: "Multi-tiered wedding cake with elegant decorations, customizable to match your wedding theme.",
        categories: ["wedding", "custom"],
        flavors: ["vanilla", "chocolate"],
        dietary: [],
        images: [
            "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1602262083359-83cdbc3c5996?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        sizes: [
            { name: "2 Tier (serves 30)", price: 299.99 },
            { name: "3 Tier (serves 50)", price: 399.99 },
            { name: "4 Tier (serves 100)", price: 599.99 }
        ],
        flavorOptions: ["Vanilla", "Chocolate", "Red Velvet", "Lemon", "Marble"]
    },
    {
        id: 7,
        name: "Carrot Cake",
        price: 46.99,
        description: "Moist carrot cake with walnuts, spices, and cream cheese frosting.",
        categories: ["birthday", "custom"],
        flavors: ["vanilla"],
        dietary: ["nut-free"],
        images: [
            "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        sizes: [
            { name: "6 inch (serves 8)", price: 46.99 },
            { name: "8 inch (serves 12)", price: 66.99 },
            { name: "10 inch (serves 16)", price: 86.99 }
        ],
        flavorOptions: ["Classic Carrot", "Carrot with Raisins", "Carrot with Pineapple"]
    },
    {
        id: 8,
        name: "Chocolate Mousse Cake",
        price: 52.99,
        description: "Decadent chocolate cake with layers of rich chocolate mousse, covered in ganache.",
        categories: ["birthday", "anniversary", "custom"],
        flavors: ["chocolate"],
        dietary: [],
        images: [
            "https://images.unsplash.com/photo-1560180474-e8563fd75bab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        sizes: [
            { name: "6 inch (serves 8)", price: 52.99 },
            { name: "8 inch (serves 12)", price: 72.99 },
            { name: "10 inch (serves 16)", price: 92.99 }
        ],
        flavorOptions: ["Dark Chocolate", "Milk Chocolate", "White Chocolate"]
    },
    {
        id: 9,
        name: "Gluten-Free Coconut Cake",
        price: 49.99,
        description: "Fluffy coconut cake made with gluten-free flour, filled with coconut cream and topped with coconut flakes.",
        categories: ["birthday", "custom"],
        flavors: ["vanilla"],
        dietary: ["gluten-free"],
        images: [
            "https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1618426703623-c1b335bf5969?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        sizes: [
            { name: "6 inch (serves 8)", price: 49.99 },
            { name: "8 inch (serves 12)", price: 69.99 },
            { name: "10 inch (serves 16)", price: 89.99 }
        ],
        flavorOptions: ["Coconut", "Coconut Lime", "Coconut Mango"]
    },
    {
        id: 10,
        name: "Corporate Logo Cake",
        price: 79.99,
        description: "Customized cake featuring your company logo, perfect for corporate events and celebrations.",
        categories: ["corporate", "custom"],
        flavors: ["vanilla", "chocolate"],
        dietary: [],
        images: [
            "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1563778084459-859099e48677?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        sizes: [
            { name: "Quarter Sheet (serves 20)", price: 79.99 },
            { name: "Half Sheet (serves 40)", price: 129.99 },
            { name: "Full Sheet (serves 80)", price: 199.99 }
        ],
        flavorOptions: ["Vanilla", "Chocolate", "Marble", "Red Velvet"]
    },
    {
        id: 11,
        name: "Tiramisu Cake",
        price: 53.99,
        description: "Delicate layers of coffee-soaked sponge cake with mascarpone cream and dusted with cocoa powder.",
        categories: ["anniversary", "birthday"],
        flavors: ["chocolate"],
        dietary: [],
        images: [
            "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1608830597604-619220679440?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        sizes: [
            { name: "6 inch (serves 8)", price: 53.99 },
            { name: "8 inch (serves 12)", price: 73.99 },
            { name: "10 inch (serves 16)", price: 93.99 }
        ],
        flavorOptions: ["Classic Tiramisu", "Chocolate Tiramisu", "Bailey's Tiramisu"]
    },
    {
        id: 12,
        name: "Fruit Tart Cake",
        price: 48.99,
        description: "Buttery tart crust filled with vanilla custard and topped with an arrangement of fresh seasonal fruits.",
        categories: ["birthday", "anniversary"],
        flavors: ["fruit", "vanilla"],
        dietary: [],
        images: [
            "https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1467940943413-649b8257db7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1484632105053-8662f381fb8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        sizes: [
            { name: "6 inch (serves 8)", price: 48.99 },
            { name: "8 inch (serves 12)", price: 68.99 },
            { name: "10 inch (serves 16)", price: 88.99 }
        ],
        flavorOptions: ["Mixed Fruit", "Berry Medley", "Tropical Fruits"]
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const overlay = document.getElementById('overlay');
const themeToggle = document.getElementById('themeToggle');
const darkIcon = document.querySelector('.dark-icon');
const lightIcon = document.querySelector('.light-icon');

// App State
let currentPage = 'home';
let filters = {
    category: ['all'],
    flavor: [],
    dietary: [],
    maxPrice: 200
};
let currentCake = null;
let currentQuantity = 1;
let selectedSize = 0;
let selectedFlavor = 0;

// Navigation & Theme initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();

    // Initialize page based on URL
    const path = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);

    if (path.includes('cake-detail.html')) {
        const cakeId = searchParams.get('id');
        if (cakeId) {
            showCakeDetail(parseInt(cakeId));
        } else {
            navigateTo('home');
        }
    } else if (path.includes('cakes.html')) {
        navigateTo('cakes');

        // Apply URL filters if any
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            filters.category = [categoryParam];
            document.querySelectorAll('input[name="category"]').forEach(input => {
                input.checked = input.value === categoryParam;
            });
            filterProducts();
        }
    } else if (path.includes('about.html')) {
        navigateTo('about');
    } else if (path.includes('contact.html')) {
        navigateTo('contact');
    } else {
        navigateTo('home');
    }

    // Initialize products if on cakes page
    if (currentPage === 'cakes') {
        initProductsPage();
    }

    // Add page-specific event listeners
    addEventListeners();
});

// Theme Management
function initTheme() {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark');
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'block';
    } else {
        document.body.classList.remove('dark');
        darkIcon.style.display = 'block';
        lightIcon.style.display = 'none';
    }

    // Set up theme toggle
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        darkIcon.style.display = 'block';
        lightIcon.style.display = 'none';
    } else {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'block';
    }
}

// Navigation Functions
function navigateTo(page) {
    const appElement = document.getElementById('app');
    const cakesPage = document.getElementById('cakesPage');
    const cakeDetailPage = document.getElementById('cakeDetailPage');
    const aboutPage = document.getElementById('aboutPage');
    const contactPage = document.getElementById('contactPage');

    // Hide all pages
    appElement.style.display = 'none';
    cakesPage.style.display = 'none';
    cakeDetailPage.style.display = 'none';
    aboutPage.style.display = 'none';
    contactPage.style.display = 'none';

    // Show selected page
    switch (page) {
        case 'home':
            appElement.style.display = 'block';
            document.title = 'Sweet Delights | Artisan Cakes For Every Occasion';
            break;
        case 'cakes':
            cakesPage.style.display = 'block';
            document.title = 'Our Cakes | Sweet Delights';
            break;
        case 'cake-detail':
            cakeDetailPage.style.display = 'block';
            document.title = `${currentCake.name} | Sweet Delights`;
            break;
        case 'about':
            aboutPage.style.display = 'block';
            document.title = 'About Us | Sweet Delights';
            break;
        case 'contact':
            contactPage.style.display = 'block';
            document.title = 'Contact Us | Sweet Delights';
            break;
    }

    currentPage = page;
    closeMobileMenu();

    // Update active link in navigation
    updateActiveNavLink();
}

function updateActiveNavLink() {
    // Remove active class from all links
    document.querySelectorAll('.nav-link, .mobile-menu-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to current page links
    let selector;
    switch (currentPage) {
        case 'home':
            selector = 'a[href="index.html"]';
            break;
        case 'cakes':
        case 'cake-detail':
            selector = 'a[href="cakes.html"]';
            break;
        case 'about':
            selector = 'a[href="about.html"]';
            break;
        case 'contact':
            selector = 'a[href="contact.html"]';
            break;
    }

    document.querySelectorAll(selector).forEach(link => {
        link.classList.add('active');
    });
}

// Mobile Menu Functions
function openMobileMenu() {
    mobileMenu.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}

// Products Page Functions
function initProductsPage() {
    renderProducts();

    // Set up filter event listeners
    document.querySelectorAll('input[name="category"]').forEach(input => {
        input.addEventListener('change', () => {
            handleCategoryFilter(input);
        });
    });

    document.querySelectorAll('input[name="flavor"]').forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) {
                if (!filters.flavor.includes(input.value)) {
                    filters.flavor.push(input.value);
                }
            } else {
                filters.flavor = filters.flavor.filter(f => f !== input.value);
            }
            filterProducts();
        });
    });

    document.querySelectorAll('input[name="dietary"]').forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) {
                if (!filters.dietary.includes(input.value)) {
                    filters.dietary.push(input.value);
                }
            } else {
                filters.dietary = filters.dietary.filter(d => d !== input.value);
            }
            filterProducts();
        });
    });

    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');

    priceRange.addEventListener('input', () => {
        const value = priceRange.value;
        priceValue.textContent = value >= 200 ? '$200+' : `$${value}`;
        filters.maxPrice = parseInt(value);
        filterProducts();
    });

    document.getElementById('clearFilters').addEventListener('click', clearFilters);
    document.getElementById('resetFilters').addEventListener('click', clearFilters);

    document.getElementById('sortOrder').addEventListener('change', () => {
        filterProducts();
    });

    document.getElementById('searchInput').addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim().toLowerCase();
        filterProductsBySearch(searchTerm);
    });
}

function handleCategoryFilter(input) {
    if (input.value === 'all') {
        // If "All Cakes" is checked, uncheck all other categories
        if (input.checked) {
            document.querySelectorAll('input[name="category"]').forEach(cb => {
                if (cb.value !== 'all') {
                    cb.checked = false;
                }
            });
            filters.category = ['all'];
        } else {
            // If "All Cakes" is unchecked, check the first non-all category
            const firstCategory = document.querySelector('input[name="category"]:not([value="all"])');
            if (firstCategory) {
                firstCategory.checked = true;
                filters.category = [firstCategory.value];
            }
        }
    } else {
        // If a specific category is checked
        if (input.checked) {
            // Uncheck "All Cakes"
            document.querySelector('input[name="category"][value="all"]').checked = false;

            // Add to filters if not already there
            if (!filters.category.includes(input.value)) {
                filters.category.push(input.value);
            }

            // Remove 'all' from filters if it's there
            filters.category = filters.category.filter(c => c !== 'all');
        } else {
            // Remove from filters
            filters.category = filters.category.filter(c => c !== input.value);

            // If no categories are selected, check "All Cakes"
            if (filters.category.length === 0) {
                document.querySelector('input[name="category"][value="all"]').checked = true;
                filters.category = ['all'];
            }
        }
    }

    filterProducts();
}

function renderProducts(filteredCakes = cakes) {
    const productsGrid = document.getElementById('productsGrid');
    const emptyState = document.getElementById('emptyState');

    // Clear current products
    productsGrid.innerHTML = '';

    if (filteredCakes.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    // Update filter info text
    updateFilterInfo(filteredCakes.length);

    // Render products
    filteredCakes.forEach(cake => {
        const productCard = document.createElement('div');
        productCard.className = 'card product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${cake.images[0]}" alt="${cake.name}">
                <div class="product-tags">
                    ${cake.categories.includes('bestseller') ? '<span class="badge badge-primary">Bestseller</span>' : ''}
                    ${cake.dietary.includes('vegan') ? '<span class="badge badge-secondary">Vegan</span>' : ''}
                    ${cake.dietary.includes('gluten-free') ? '<span class="badge badge-secondary">Gluten-Free</span>' : ''}
                </div>
            </div>
            <div class="product-content">
                <h3 class="product-title">${cake.name}</h3>
                <p class="product-description">${cake.description}</p>
                <div class="product-footer">
                    <div class="product-price">$${cake.price.toFixed(2)}</div>
                    <a href="cake-detail.html?id=${cake.id}" class="btn btn-primary btn-sm">View Details</a>
                </div>
            </div>
        `;

        // Add click event to navigate to cake detail
        productCard.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            showCakeDetail(cake.id);
        });

        productsGrid.appendChild(productCard);
    });

    // Render pagination if needed
    renderPagination(filteredCakes.length);
}

function updateFilterInfo(count) {
    const filterInfo = document.getElementById('filterInfo');
    let infoText = '';

    if (filters.category.includes('all') && filters.flavor.length === 0 && filters.dietary.length === 0 && filters.maxPrice >= 200) {
        infoText = `Showing all cakes (${count})`;
    } else {
        const parts = [];

        if (!filters.category.includes('all')) {
            parts.push(filters.category.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', '));
        }

        if (filters.flavor.length > 0) {
            parts.push(`Flavors: ${filters.flavor.map(f => f.charAt(0).toUpperCase() + f.slice(1)).join(', ')}`);
        }

        if (filters.dietary.length > 0) {
            parts.push(`Dietary: ${filters.dietary.map(d => d.charAt(0).toUpperCase() + d.slice(1)).join(', ')}`);
        }

        if (filters.maxPrice < 200) {
            parts.push(`Max $${filters.maxPrice}`);
        }

        infoText = `Filtered by ${parts.join(' | ')} (${count})`;
    }

    filterInfo.textContent = infoText;
}

function renderPagination(totalCount) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    // Mock pagination for demo purposes
    if (totalCount > 0) {
        const paginationItem1 = document.createElement('div');
        paginationItem1.className = 'pagination-item active';
        paginationItem1.textContent = '1';

        const paginationItem2 = document.createElement('div');
        paginationItem2.className = 'pagination-item';
        paginationItem2.textContent = '2';

        const paginationItem3 = document.createElement('div');
        paginationItem3.className = 'pagination-item';
        paginationItem3.textContent = '3';

        pagination.appendChild(paginationItem1);
        pagination.appendChild(paginationItem2);
        pagination.appendChild(paginationItem3);
    }
}

function filterProducts() {
    let filtered = [...cakes];

    // Filter by category
    if (!filters.category.includes('all')) {
        filtered = filtered.filter(cake =>
            filters.category.some(category => cake.categories.includes(category))
        );
    }

    // Filter by flavor
    if (filters.flavor.length > 0) {
        filtered = filtered.filter(cake =>
            filters.flavor.some(flavor => cake.flavors.includes(flavor))
        );
    }

    // Filter by dietary options
    if (filters.dietary.length > 0) {
        filtered = filtered.filter(cake =>
            filters.dietary.every(option => cake.dietary.includes(option))
        );
    }

    // Filter by price
    filtered = filtered.filter(cake => cake.price <= filters.maxPrice);

    // Sort results
    const sortOrder = document.getElementById('sortOrder').value;
    sortProducts(filtered, sortOrder);

    // Render the filtered products
    renderProducts(filtered);
}

function filterProductsBySearch(searchTerm) {
    if (!searchTerm) {
        filterProducts(); // Reset to regular filters
        return;
    }

    let filtered = cakes.filter(cake =>
        cake.name.toLowerCase().includes(searchTerm) ||
        cake.description.toLowerCase().includes(searchTerm)
    );

    // Apply other filters
    // Filter by category
    if (!filters.category.includes('all')) {
        filtered = filtered.filter(cake =>
            filters.category.some(category => cake.categories.includes(category))
        );
    }

    // Filter by flavor
    if (filters.flavor.length > 0) {
        filtered = filtered.filter(cake =>
            filters.flavor.some(flavor => cake.flavors.includes(flavor))
        );
    }

    // Filter by dietary options
    if (filters.dietary.length > 0) {
        filtered = filtered.filter(cake =>
            filters.dietary.every(option => cake.dietary.includes(option))
        );
    }

    // Filter by price
    filtered = filtered.filter(cake => cake.price <= filters.maxPrice);

    // Sort results
    const sortOrder = document.getElementById('sortOrder').value;
    sortProducts(filtered, sortOrder);

    // Render the filtered products
    renderProducts(filtered);
}

function sortProducts(products, sortOrder) {
    switch (sortOrder) {
        case 'price-low':
            products.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            products.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            products.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            products.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default: // 'featured'
            products.sort((a, b) => {
                // Sort bestsellers first
                const aIsBestseller = a.categories.includes('bestseller');
                const bIsBestseller = b.categories.includes('bestseller');

                if (aIsBestseller && !bIsBestseller) return -1;
                if (!aIsBestseller && bIsBestseller) return 1;

                return 0;
            });
    }
}

function clearFilters() {
    // Reset all filter inputs
    document.querySelectorAll('input[name="category"]').forEach(input => {
        input.checked = input.value === 'all';
    });

    document.querySelectorAll('input[name="flavor"]').forEach(input => {
        input.checked = false;
    });

    document.querySelectorAll('input[name="dietary"]').forEach(input => {
        input.checked = false;
    });

    // Reset price range
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    priceRange.value = 200;
    priceValue.textContent = '$200+';

    // Reset search
    document.getElementById('searchInput').value = '';

    // Reset sort order
    document.getElementById('sortOrder').value = 'default';

    // Reset filters object
    filters = {
        category: ['all'],
        flavor: [],
        dietary: [],
        maxPrice: 200
    };

    // Re-render products
    filterProducts();
}

// Cake Detail Functions
function showCakeDetail(cakeId) {
    const cake = cakes.find(c => c.id === cakeId);

    if (!cake) {
        navigateTo('cakes');
        return;
    }

    currentCake = cake;
    currentQuantity = 1;
    selectedSize = 0;
    selectedFlavor = 0;

    // Update breadcrumbs
    document.getElementById('detailBreadcrumbs').innerHTML = `
        <div class="breadcrumb-item">
            <a href="index.html">Home</a>
            <span class="breadcrumb-separator">
                <i class="fas fa-chevron-right text-xs"></i>
            </span>
        </div>
        <div class="breadcrumb-item">
            <a href="cakes.html">Cakes</a>
            <span class="breadcrumb-separator">
                <i class="fas fa-chevron-right text-xs"></i>
            </span>
        </div>
        <div class="breadcrumb-item active">${cake.name}</div>
    `;

    // Update page title
    document.title = `${cake.name} | Sweet Delights`;

    // Update gallery
    const mainImage = document.getElementById('mainImage');
    mainImage.innerHTML = `<img src="${cake.images[0]}" alt="${cake.name}">`;

    const thumbnails = document.getElementById('thumbnails');
    thumbnails.innerHTML = '';

    cake.images.forEach((image, index) => {
        const thumb = document.createElement('div');
        thumb.className = `gallery-thumb ${index === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${image}" alt="${cake.name} ${index + 1}">`;

        thumb.addEventListener('click', () => {
            // Update main image
            mainImage.innerHTML = `<img src="${image}" alt="${cake.name}">`;

            // Update active thumbnail
            document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });

        thumbnails.appendChild(thumb);
    });

    // Update cake details
    document.getElementById('cakeTitle').textContent = cake.name;
    document.getElementById('cakePrice').textContent = `$${cake.sizes[selectedSize].price.toFixed(2)}`;
    document.getElementById('cakeDescription').textContent = cake.description;

    // Update flavor options
    const flavorSelect = document.getElementById('flavorSelect');
    flavorSelect.innerHTML = '';

    cake.flavorOptions.forEach((flavor, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = flavor;
        flavorSelect.appendChild(option);
    });

    // Update size options
    const sizeSelect = document.getElementById('sizeSelect');
    sizeSelect.innerHTML = '';

    cake.sizes.forEach((size, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${size.name} - $${size.price.toFixed(2)}`;
        sizeSelect.appendChild(option);
    });

    // Update quantity
    document.getElementById('quantity').value = currentQuantity;

    // Add related products
    renderRelatedProducts(cake);

    // Navigate to cake detail page
    navigateTo('cake-detail');

    // Set up event listeners for cake detail
    setupCakeDetailListeners();
}

function setupCakeDetailListeners() {
    // Size selector change
    document.getElementById('sizeSelect').addEventListener('change', (e) => {
        selectedSize = parseInt(e.target.value);
        updateCakePrice();
    });

    // Flavor selector change
    document.getElementById('flavorSelect').addEventListener('change', (e) => {
        selectedFlavor = parseInt(e.target.value);
    });

    // Quantity buttons
    document.getElementById('decreaseQuantity').addEventListener('click', () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            document.getElementById('quantity').value = currentQuantity;
        }
    });

    document.getElementById('increaseQuantity').addEventListener('click', () => {
        if (currentQuantity < 10) {
            currentQuantity++;
            document.getElementById('quantity').value = currentQuantity;
        }
    });

    document.getElementById('quantity').addEventListener('change', (e) => {
        const value = parseInt(e.target.value);
        if (value >= 1 && value <= 10) {
            currentQuantity = value;
        } else if (value < 1) {
            currentQuantity = 1;
            e.target.value = 1;
        } else if (value > 10) {
            currentQuantity = 10;
            e.target.value = 10;
        }
    });

    // Order button
    document.getElementById('orderNowBtn').addEventListener('click', openOrderModal);

    // Favorites button
    document.getElementById('addToFavoritesBtn').addEventListener('click', toggleFavorite);

    // Tabs
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            // Update active tab
            document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show selected tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tabId}Tab`).classList.add('active');
        });
    });
}

function updateCakePrice() {
    if (!currentCake) return;

    const price = currentCake.sizes[selectedSize].price;
    document.getElementById('cakePrice').textContent = `$${price.toFixed(2)}`;
}

function renderRelatedProducts(currentCake) {
    const relatedProductsContainer = document.getElementById('relatedProducts');
    relatedProductsContainer.innerHTML = '';

    // Find related products based on categories and flavors
    const related = cakes
        .filter(cake =>
            cake.id !== currentCake.id && // Not the current cake
            (
                // Same category or flavor
                cake.categories.some(cat => currentCake.categories.includes(cat)) ||
                cake.flavors.some(flavor => currentCake.flavors.includes(flavor))
            )
        )
        .slice(0, 3); // Limit to 3 related products

    related.forEach(cake => {
        const productCard = document.createElement('div');
        productCard.className = 'card product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${cake.images[0]}" alt="${cake.name}">
                <div class="product-tags">
                    ${cake.categories.includes('bestseller') ? '<span class="badge badge-primary">Bestseller</span>' : ''}
                    ${cake.dietary.includes('vegan') ? '<span class="badge badge-secondary">Vegan</span>' : ''}
                    ${cake.dietary.includes('gluten-free') ? '<span class="badge badge-secondary">Gluten-Free</span>' : ''}
                </div>
            </div>
            <div class="product-content">
                <h3 class="product-title">${cake.name}</h3>
                <p class="product-description">${cake.description}</p>
                <div class="product-footer">
                    <div class="product-price">$${cake.price.toFixed(2)}</div>
                    <a href="cake-detail.html?id=${cake.id}" class="btn btn-primary btn-sm">View Details</a>
                </div>
            </div>
        `;

        // Add click event to navigate to cake detail
        productCard.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            showCakeDetail(cake.id);
        });

        relatedProductsContainer.appendChild(productCard);
    });
}

function toggleFavorite() {
    const button = document.getElementById('addToFavoritesBtn');
    const icon = button.querySelector('i');

    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        button.innerHTML = `<i class="fas fa-heart mr-2"></i> Added to Favorites`;
        showToast('Added to favorites!');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        button.innerHTML = `<i class="far fa-heart mr-2"></i> Add to Favorites`;
        showToast('Removed from favorites!');
    }
}

// Order Modal Functions
function openOrderModal() {
    if (!currentCake) return;

    const orderModal = document.getElementById('orderModal');
    const orderCakeName = document.getElementById('orderCakeName');
    const orderDetails = document.getElementById('orderDetails');
    const orderPrice = document.getElementById('orderPrice');

    // Set cake details
    orderCakeName.textContent = currentCake.name;

    const size = currentCake.sizes[selectedSize].name;
    const flavor = currentCake.flavorOptions[selectedFlavor];
    const totalPrice = (currentCake.sizes[selectedSize].price * currentQuantity).toFixed(2);

    orderDetails.innerHTML = `
        <p>${size}, ${flavor}</p>
        <p>Quantity: ${currentQuantity}</p>
    `;

    orderPrice.textContent = `$${totalPrice}`;

    // Clear form
    document.getElementById('orderForm').reset();
    document.getElementById('orderResult').classList.add('hidden');

    // Show modal
    orderModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
    const orderModal = document.getElementById('orderModal');
    orderModal.classList.remove('open');
    document.body.style.overflow = '';
}

function submitOrder() {
    const form = document.getElementById('orderForm');
    const orderResult = document.getElementById('orderResult');

    // Validate form
    if (!validateOrderForm()) {
        return;
    }

    // Show loading state
    const submitBtn = document.getElementById('submitOrderBtn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="spinner mr-2"></div> Processing...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Success state
        orderResult.innerHTML = `
            <div class="alert alert-success">
                <div class="alert-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div class="alert-content">
                    <div class="alert-title">Order Submitted Successfully!</div>
                    <p>Thank you for your order. We'll contact you shortly to confirm the details.</p>
                </div>
            </div>
        `;
        orderResult.classList.remove('hidden');

        // Reset button
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;

        // Close modal after delay
        setTimeout(() => {
            closeOrderModal();
            showToast('Order placed successfully!');
        }, 3000);
    }, 1500);
}

function validateOrderForm() {
    let isValid = true;

    // Get form fields
    const name = document.getElementById('orderName');
    const email = document.getElementById('orderEmail');
    const phone = document.getElementById('orderPhone');
    const date = document.getElementById('orderDate');
    const address = document.getElementById('orderAddress');

    // Get error elements
    const nameError = document.getElementById('orderNameError');
    const emailError = document.getElementById('orderEmailError');
    const phoneError = document.getElementById('orderPhoneError');
    const dateError = document.getElementById('orderDateError');
    const addressError = document.getElementById('orderAddressError');

    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    dateError.textContent = '';
    addressError.textContent = '';

    // Remove error class
    name.classList.remove('input-error');
    email.classList.remove('input-error');
    phone.classList.remove('input-error');
    date.classList.remove('input-error');
    address.classList.remove('input-error');

    // Validate name
    if (!name.value.trim()) {
        nameError.textContent = 'Please enter your name';
        name.classList.add('input-error');
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        emailError.textContent = 'Please enter your email';
        email.classList.add('input-error');
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email';
        email.classList.add('input-error');
        isValid = false;
    }

    // Validate phone
    if (!phone.value.trim()) {
        phoneError.textContent = 'Please enter your phone number';
        phone.classList.add('input-error');
        isValid = false;
    }

    // Validate date
    if (!date.value.trim()) {
        dateError.textContent = 'Please select a delivery date';
        date.classList.add('input-error');
        isValid = false;
    } else {
        const selectedDate = new Date(date.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            dateError.textContent = 'Delivery date cannot be in the past';
            date.classList.add('input-error');
            isValid = false;
        }
    }

    // Validate address
    if (!address.value.trim()) {
        addressError.textContent = 'Please enter your delivery address';
        address.classList.add('input-error');
        isValid = false;
    }

    return isValid;
}

// Contact Form Functions
function validateContactForm() {
    let isValid = true;

    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const consent = document.getElementById('consent');

    // Get error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const consentError = document.getElementById('consentError');

    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';
    consentError.textContent = '';

    // Remove error class
    name.classList.remove('input-error');
    email.classList.remove('input-error');
    phone.classList.remove('input-error');
    subject.classList.remove('input-error');
    message.classList.remove('input-error');

    // Validate name
    if (!name.value.trim()) {
        nameError.textContent = 'Please enter your name';
        name.classList.add('input-error');
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        emailError.textContent = 'Please enter your email';
        email.classList.add('input-error');
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email';
        email.classList.add('input-error');
        isValid = false;
    }

    // Validate phone (optional)
    if (phone.value.trim() && !/^[0-9+\-\s()]*$/.test(phone.value.trim())) {
        phoneError.textContent = 'Please enter a valid phone number';
        phone.classList.add('input-error');
        isValid = false;
    }

    // Validate subject
    if (!subject.value.trim()) {
        subjectError.textContent = 'Please enter a subject';
        subject.classList.add('input-error');
        isValid = false;
    }

    // Validate message
    if (!message.value.trim()) {
        messageError.textContent = 'Please enter your message';
        message.classList.add('input-error');
        isValid = false;
    }

    // Validate consent
    if (!consent.checked) {
        consentError.textContent = 'You must agree to the terms';
        isValid = false;
    }

    return isValid;
}

function submitContactForm() {
    const form = document.getElementById('contactForm');
    const formResult = document.getElementById('formResult');

    // Validate form
    if (!validateContactForm()) {
        return;
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="spinner mr-2"></div> Sending...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Success state
        formResult.innerHTML = `
            <div class="alert alert-success">
                <div class="alert-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div class="alert-content">
                    <div class="alert-title">Message Sent Successfully!</div>
                    <p>Thank you for your message. We'll get back to you as soon as possible.</p>
                </div>
            </div>
        `;
        formResult.classList.remove('hidden');

        // Reset form
        form.reset();

        // Reset button
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;

        // Hide success message after delay
        setTimeout(() => {
            formResult.classList.add('hidden');
        }, 5000);
    }, 1500);
}

// Utilities
function showToast(message) {
    // Create toast element if it doesn't exist
    let toast = document.getElementById('toast');

    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-50 transform translate-y-20 opacity-0 transition-all duration-300';
        document.body.appendChild(toast);
    }

    // Set message
    toast.textContent = message;

    // Show toast
    setTimeout(() => {
        toast.classList.remove('translate-y-20', 'opacity-0');
    }, 100);

    // Hide toast after delay
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// Add all event listeners
function addEventListeners() {
    // Scroll event for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu
    mobileMenuButton.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);

    // Navigation links
    document.querySelectorAll('a[href="index.html"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('home');
        });
    });

    document.querySelectorAll('a[href="cakes.html"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('cakes');
        });
    });

    document.querySelectorAll('a[href="about.html"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('about');
        });
    });

    document.querySelectorAll('a[href="contact.html"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('contact');
        });
    });

    // Order Modal
    document.getElementById('closeOrderModal').addEventListener('click', closeOrderModal);
    document.getElementById('cancelOrderBtn').addEventListener('click', closeOrderModal);
    document.getElementById('submitOrderBtn').addEventListener('click', submitOrder);

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitContactForm();
        });
    }

    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();

            if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                emailInput.value = '';
                showToast('Thank you for subscribing to our newsletter!');
            } else {
                showToast('Please enter a valid email address.');
            }
        });
    }
}
