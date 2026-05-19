/* ===== WISHLIST.JS ===== */

// Global function to toggle wishlist items
function toggleWishlist(destItem, heartElement) {
    let wishlist = JSON.parse(localStorage.getItem('travel_wishlist')) || [];
    
    // Check if item exists
    const existingIndex = wishlist.findIndex(item => item.id === destItem.id);
    
    if (existingIndex !== -1) {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
        heartElement.classList.remove('active');
        showToast('Removed from Wishlist');
    } else {
        // Add to wishlist
        wishlist.push(destItem);
        heartElement.classList.add('active');
        showToast('Added to Wishlist');
    }
    
    localStorage.setItem('travel_wishlist', JSON.stringify(wishlist));
    
    // If on wishlist page, re-render
    if (typeof renderWishlistPage === 'function') {
        renderWishlistPage();
    }
}

// Simple Toast Notification System
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: var(--gradient-1);
            color: white;
            padding: 10px 20px;
            border-radius: 30px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 9999;
            transition: transform 0.3s ease;
            font-weight: 500;
        `;
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.style.transform = 'translateX(-50%) translateY(0)';
    
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(100px)';
    }, 3000);
}
