// Load service data and display it by category
function loadServices() {
  fetch('/api/services')
    .then(res => res.json())
    .then(data => {
      const serviceList = document.getElementById('service-list');
      const serviceSelect = document.getElementById('service_id');

      if (serviceList) {
        serviceList.innerHTML = '';

        // Group services by category
        const grouped = {};
        data.forEach(service => {
          if (!grouped[service.category]) {
            grouped[service.category] = [];
          }
          grouped[service.category].push(service);
        });

        // Render each category
        for (const category in grouped) {
          const catHeader = document.createElement('h3');
          catHeader.textContent = category;
          serviceList.appendChild(catHeader);

          grouped[category].forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = `
              <h4>${service.name}</h4>
              <p>${service.description}</p>
              <p><strong>$${service.price}</strong></p>
              <img src="${service.image_url}" alt="${service.name}" style="max-width: 100%; border-radius: 6px; margin-top: 10px;" />
            `;
            serviceList.appendChild(card);
          });
        }
      }

      // Populate the drop-down box on the booking page
      if (serviceSelect) {
        // Group by category
        const categories = {};
        data.forEach(service => {
          if (!categories[service.category]) {
            categories[service.category] = [];
          }
          categories[service.category].push(service);
        });

        for (const cat in categories) {
          const optgroup = document.createElement('optgroup');
          optgroup.label = cat;
          categories[cat].forEach(service => {
            const option = document.createElement('option');
            option.value = service.id;
            option.textContent = service.name;
            optgroup.appendChild(option);
          });
          serviceSelect.appendChild(optgroup);
        }
      }
    })
    .catch(err => {
      console.error('Error loading services:', err);
      const list = document.getElementById('service-list');
      if (list) list.textContent = 'Failed to load services.';
    });
}

// Initialize loading service data
loadServices();

// Handle booking form submission (triggered only in booking.html)
if (document.getElementById('booking-form')) {
  document.getElementById('booking-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const service_id = document.getElementById('service_id').value;

    fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, date, service_id })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success || data.message === 'Booking successful') {
          alert('Booking successful!');
          document.getElementById('booking-form').reset();
        } else {
          alert('Booking failed: ' + (data.error || 'Unknown error'));
        }
      })
      .catch(err => {
        console.error('Booking request failed:', err);
        alert('Booking request failed: ' + err.message);
      });
  });
}
