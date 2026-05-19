/* ===== PLANNER.JS ===== */

document.addEventListener('DOMContentLoaded', () => {
    const plannerForm = document.getElementById('plannerForm');
    const plannerResults = document.getElementById('plannerResults');
    const alertMsg = document.getElementById('alertMsg');
    
    // Result elements
    const hotelCostEl = document.getElementById('hotelCost');
    const transportCostEl = document.getElementById('transportCost');
    const foodCostEl = document.getElementById('foodCost');
    const totalCostEl = document.getElementById('totalCost');

    if (plannerForm) {
        plannerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get values
            const type = document.getElementById('destinationType').value;
            const budget = parseFloat(document.getElementById('budget').value);
            const days = parseInt(document.getElementById('days').value);
            const travelers = parseInt(document.getElementById('travelers').value);
            
            // Base daily costs per person based on type
            let baseHotel = 50;
            let baseFood = 30;
            let baseTransport = 20; // local transport + base flight factor later
            let baseFlight = 200;

            if (type === 'international') {
                baseHotel = 100;
                baseFood = 60;
                baseFlight = 800;
            } else if (type === 'luxury') {
                baseHotel = 250;
                baseFood = 120;
                baseFlight = 1000;
            }

            // Calculations
            // Hotel is per room, assume 2 people per room
            const rooms = Math.ceil(travelers / 2);
            const hotelCost = baseHotel * rooms * days;
            
            const foodCost = baseFood * travelers * days;
            
            // Transport: Flight/Train (one time) + local transport per day
            const transportCost = (baseFlight * travelers) + (baseTransport * travelers * days);
            
            const estimatedTotal = hotelCost + foodCost + transportCost;

            // Update UI
            hotelCostEl.textContent = `$${hotelCost.toLocaleString()}`;
            foodCostEl.textContent = `$${foodCost.toLocaleString()}`;
            transportCostEl.textContent = `$${transportCost.toLocaleString()}`;
            totalCostEl.textContent = `$${estimatedTotal.toLocaleString()}`;

            // Check Budget
            alertMsg.style.display = 'block';
            if (estimatedTotal > budget) {
                alertMsg.className = 'alert-message alert-warning';
                alertMsg.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Estimated cost exceeds your budget by $${(estimatedTotal - budget).toLocaleString()}. Consider adjusting your trip length or destination type.`;
            } else {
                alertMsg.className = 'alert-message alert-success';
                alertMsg.innerHTML = `<i class="fas fa-check-circle"></i> Great! The estimated cost is within your budget. You have $${(budget - estimatedTotal).toLocaleString()} to spare for shopping or emergencies!`;
            }

            // Show results
            plannerResults.classList.remove('active');
            // Trigger reflow
            void plannerResults.offsetWidth;
            plannerResults.classList.add('active');
        });
    }
});
