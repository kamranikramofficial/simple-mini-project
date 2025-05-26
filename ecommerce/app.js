class EnhancedECommerceStore {
    constructor() {
        this.products = [];
        this.filteredProducts = [];
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        this.categories = new Set();
        this.currentPage = 1;
        this.productsPerPage = 12;
        this.currentView = 'grid';
        this.currentSort = 'default';
        this.currentCategory = 'all';
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    async init() {
        this.setTheme(this.theme);
        await this.fetchAllProducts();
        this.setupEventListeners();
        this.updateCartUI();
        this.updateStats();
    }

    async fetchAllProducts() {
        try {
            // Fetch all products from different endpoints
            const endpoints = [
                'https://fakestoreapi.com/products',
                'https://fakestoreapi.com/products/category/electronics',
                'https://fakestoreapi.com/products/category/jewelery',
                'https://fakestoreapi.com/products/category/men\'s%20clothing',
                'https://fakestoreapi.com/products/category/women\'s%20clothing'
            ];

            // Use the main endpoint to get all products
            const response = await fetch('https://fakestoreapi.com/products');
            this.products = await response.json();

            // Add some additional mock products to demonstrate full functionality
            const additionalProducts = this.generateAdditionalProducts();
            this.products = [...this.products, ...additionalProducts];

            this.filteredProducts = [...this.products];

            // Extract categories
            this.products.forEach(product => {
                this.categories.add(product.category);
            });

            this.renderCategories();
            this.applyFiltersAndSort();
            document.getElementById('loading').style.display = 'none';
        } catch (error) {
            console.error('Error fetching products:', error);
            document.getElementById('loading').innerHTML = '<p>Error loading products. Please try again later.</p>';
        }
    }

    generateAdditionalProducts() {
        // Generate additional mock products to demonstrate pagination and variety
        const mockProducts = [];
        const categories = ['electronics', 'books', 'home & garden', 'sports', 'beauty'];
        const baseId = 1000;

        for (let i = 0; i < 20; i++) {
            const category = categories[i % categories.length];
            mockProducts.push({
                id: baseId + i,
                title: `Premium ${category.charAt(0).toUpperCase() + category.slice(1)} Product ${i + 1}`,
                price: Math.floor(Math.random() * 200) + 20,
                description: `High-quality ${category} product with excellent features and modern design. Perfect for everyday use.`,
                category: category,
                image: `https://picsum.photos/300/300?random=${baseId + i}`,
                rating: {
                    rate: Math.floor(Math.random() * 2) + 3 + Math.random(),
                    count: Math.floor(Math.random() * 500) + 50
                }
            });
        }

        return mockProducts;
    }

    setTheme(theme) {
        this.theme = theme;
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        const themeIcon = document.querySelector('#themeToggle i');
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    updateStats() {
        document.getElementById('totalProducts').textContent = this.products.length;
        document.getElementById('totalCategories').textContent = this.categories.size;

        const avgRating = this.products.reduce((sum, product) => sum + product.rating.rate, 0) / this.products.length;
        document.getElementById('avgRating').textContent = avgRating.toFixed(1);
    }

    renderCategories() {
        const filterButtons = document.getElementById('filterButtons');

        this.categories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.textContent = category;
            button.dataset.category = category;
            filterButtons.appendChild(button);
        });
    }

    applyFiltersAndSort() {
        let filtered = [...this.products];

        // Apply category filter
        if (this.currentCategory !== 'all') {
            filtered = filtered.filter(product => product.category === this.currentCategory);
        }

        // Apply search filter
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
        }

        // Apply sorting
        switch (this.currentSort) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating.rate - a.rating.rate);
                break;
            case 'name':
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
        }

        this.filteredProducts = filtered;
        this.currentPage = 1;
        this.renderProducts();
        this.renderPagination();
        this.updateProductsCount();
    }

    renderProducts() {
        const productsGrid = document.getElementById('productsGrid');
        productsGrid.innerHTML = '';
        productsGrid.className = `products-grid ${this.currentView === 'list' ? 'list-view' : ''}`;

        const startIndex = (this.currentPage - 1) * this.productsPerPage;
        const endIndex = startIndex + this.productsPerPage;
        const productsToShow = this.filteredProducts.slice(startIndex, endIndex);

        productsToShow.forEach(product => {
            const productCard = this.createProductCard(product);
            productsGrid.appendChild(productCard);
        });

        // Add fade-in animation
        productsGrid.classList.add('fade-in');
        setTimeout(() => productsGrid.classList.remove('fade-in'), 500);
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = `product-card ${this.currentView === 'list' ? 'list-view' : ''} fade-in`;

        const stars = this.generateStars(product.rating.rate);
        const isInWishlist = this.wishlist.includes(product.id);

        card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" class="product-image" crossorigin="anonymous">
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-rating">
                            <span class="stars">${stars}</span>
                            <span class="rating-text">(${product.rating.count})</span>
                        </div>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <div class="product-actions">
                            <button class="add-to-cart" onclick="store.addToCart(${product.id})">
                                <i class="fas fa-cart-plus"></i>
                                Add to Cart
                            </button>
                            <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="store.toggleWishlist(${product.id})">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                `;

        return card;
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }

        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }

        return stars;
    }

    renderPagination() {
        const pagination = document.getElementById('pagination');
        const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);

        if (totalPages <= 1) {
            pagination.innerHTML = '';
            return;
        }

        let paginationHTML = '';

        // Previous button
        paginationHTML += `
                    <button class="pagination-btn" ${this.currentPage === 1 ? 'disabled' : ''} 
                            onclick="store.goToPage(${this.currentPage - 1})">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                `;

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= this.currentPage - 2 && i <= this.currentPage + 2)) {
                paginationHTML += `
                            <button class="pagination-btn ${i === this.currentPage ? 'active' : ''}" 
                                    onclick="store.goToPage(${i})">
                                ${i}
                            </button>
                        `;
            } else if (i === this.currentPage - 3 || i === this.currentPage + 3) {
                paginationHTML += '<span>...</span>';
            }
        }

        // Next button
        paginationHTML += `
                    <button class="pagination-btn" ${this.currentPage === totalPages ? 'disabled' : ''} 
                            onclick="store.goToPage(${this.currentPage + 1})">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                `;

        pagination.innerHTML = paginationHTML;
    }

    goToPage(page) {
        const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
        if (page >= 1 && page <= totalPages) {
            this.currentPage = page;
            this.renderProducts();
            this.renderPagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    updateProductsCount() {
        const count = this.filteredProducts.length;
        const start = (this.currentPage - 1) * this.productsPerPage + 1;
        const end = Math.min(start + this.productsPerPage - 1, count);

        document.getElementById('productsCount').textContent =
            `Showing ${start}-${end} of ${count} products`;
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        const existingItem = this.cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }

        this.saveCart();
        this.updateCartUI();
        this.showCartAnimation();
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartUI();
        this.renderCart();
    }

    updateQuantity(productId, change) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                this.saveCart();
                this.updateCartUI();
                this.renderCart();
            }
        }
    }

    toggleWishlist(productId) {
        const index = this.wishlist.indexOf(productId);
        if (index > -1) {
            this.wishlist.splice(index, 1);
        } else {
            this.wishlist.push(productId);
        }

        localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
        this.renderProducts(); // Re-render to update wishlist buttons
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    updateCartUI() {
        const cartCount = document.getElementById('cartCount');
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        if (totalItems > 0) {
            cartCount.style.display = 'flex';
        } else {
            cartCount.style.display = 'none';
        }
    }

    showCartAnimation() {
        const cartBtn = document.getElementById('cartBtn');
        cartBtn.classList.add('bounce');
        setTimeout(() => cartBtn.classList.remove('bounce'), 500);
    }

    renderCart() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        if (this.cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--text-secondary);">Your cart is empty</p>';
            cartTotal.textContent = 'Total: $0.00';
            return;
        }

        cartItems.innerHTML = '';
        let total = 0;

        this.cart.forEach(item => {
            total += item.price * item.quantity;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                        <img src="${item.image}" alt="${item.title}" crossorigin="anonymous">
                        <div class="cart-item-info">
                            <div class="cart-item-title">${item.title}</div>
                            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="store.updateQuantity(${item.id}, -1)">-</button>
                                <span>Qty: ${item.quantity}</span>
                                <button class="quantity-btn" onclick="store.updateQuantity(${item.id}, 1)">+</button>
                                <button class="quantity-btn" onclick="store.removeFromCart(${item.id})" style="background: #ff4757; margin-left: 1rem;">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    `;
            cartItems.appendChild(cartItem);
        });

        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    setupEventListeners() {
        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Filter buttons
        document.getElementById('filterButtons').addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                this.currentCategory = e.target.dataset.category;
                this.applyFiltersAndSort();
            }
        });

        // Sort select
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.applyFiltersAndSort();
        });

        // View toggle
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentView = e.target.dataset.view;
                this.renderProducts();
            });
        });

        // Search
        document.getElementById('searchInput').addEventListener('input', () => {
            this.applyFiltersAndSort();
        });

        // Cart modal
        document.getElementById('cartBtn').addEventListener('click', () => {
            document.getElementById('cartModal').style.display = 'block';
            this.renderCart();
        });

        document.getElementById('closeCart').addEventListener('click', () => {
            document.getElementById('cartModal').style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === document.getElementById('cartModal')) {
                document.getElementById('cartModal').style.display = 'none';
            }
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = this.theme === 'dark' ?
                    'rgba(45, 55, 72, 0.98)' : 'rgba(255, 255, 255, 0.98)';
            } else {
                header.style.background = this.theme === 'dark' ?
                    'rgba(45, 55, 72, 0.95)' : 'rgba(255, 255, 255, 0.95)';
            }
        });
    }
}

// Initialize the store
const store = new EnhancedECommerceStore();
