/* ===== RECOMMENDATION.JS ===== */

const destinationsData = [
    {
        id: 1,
        title: 'Bali, Indonesia',
        category: 'honeymoon',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: '$1200',
        rating: 4.8
    },
    {
        id: 2,
        title: 'Manali, India',
        category: 'adventure',
        image: 'https://images.unsplash.com/photo-1605649487212-4d74eeaabcac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: '$450',
        rating: 4.6
    },
    {
        id: 3,
        title: 'Goa, India',
        category: 'low budget',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: '$300',
        rating: 4.5
    },
    {
        id: 4,
        title: 'Dubai, UAE',
        category: 'luxury',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: '$2500',
        rating: 4.9
    },
    {
        id: 5,
        title: 'Paris, France',
        category: 'honeymoon',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: '$1800',
        rating: 4.7
    },
    {
        id: 6,
        title: 'Swiss Alps, Switzerland',
        category: 'luxury',
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a458b07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: '$3200',
        rating: 4.9
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('recommendation-grid');
    const filters = document.querySelectorAll('.filter-btn');

    if (!grid) return;

    // Load Wishlist to check if item is liked
    const getWishlist = () => JSON.parse(localStorage.getItem('travel_wishlist')) || [];

    const renderDestinations = (category) => {
        grid.innerHTML = '';
        const wishlist = getWishlist();
        
        let filtered = destinationsData;
        if (category !== 'all') {
            filtered = destinationsData.filter(d => d.category === category);
        }

        if (filtered.length === 0) {
            grid.innerHTML = '<p style="text-align: center; width: 100%; grid-column: 1 / -1;">No recommendations found for this category.</p>';
            return;
        }

        filtered.forEach(dest => {
            const isLiked = wishlist.some(item => item.id === dest.id);
            const card = document.createElement('div');
            card.className = 'dest-card';
            card.innerHTML = `
                <div class="dest-img-container">
                    <span class="dest-badge">${dest.category.charAt(0).toUpperCase() + dest.category.slice(1)}</span>
                    <div class="dest-heart ${isLiked ? 'active' : ''}" data-id="${dest.id}">
                        <i class="fas fa-heart"></i>
                    </div>
                    <img src="${dest.image}" alt="${dest.title}" class="dest-img">
                </div>
                <div class="dest-info">
                    <h3 class="dest-title">${dest.title}</h3>
                    <div class="dest-location"><i class="fas fa-map-marker-alt"></i> ${dest.title}</div>
                    <div class="dest-price-row">
                        <span class="dest-price">${dest.price}</span>
                        <span><i class="fas fa-star" style="color: #fbbf24;"></i> ${dest.rating}</span>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        // Add event listeners to hearts
        const hearts = grid.querySelectorAll('.dest-heart');
        hearts.forEach(heart => {
            heart.addEventListener('click', (e) => {
                const id = parseInt(heart.getAttribute('data-id'));
                const dest = destinationsData.find(d => d.id === id);
                if (typeof toggleWishlist === 'function') {
                    toggleWishlist(dest, heart);
                } else {
                    console.warn('wishlist.js not loaded');
                }
            });
        });
    };

    // Initial render
    renderDestinations('all');

    // Filter Logic
    if (filters) {
        filters.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class
                filters.forEach(f => f.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                renderDestinations(filterValue);
            });
        });
    }
});
