document.addEventListener('DOMContentLoaded', () => {
    const registerSection = document.getElementById('register');
    const authSection = document.getElementById('auth');

    const toggleLink = document.getElementById('toggle-link');
    const registerToggleLink = document.getElementById('register-toggle-link');

    toggleLink.addEventListener('click', () => {
        authSection.classList.add('hidden');
        registerSection.classList.remove('hidden');
    });

    registerToggleLink.addEventListener('click', () => {
        registerSection.classList.add('hidden');
        authSection.classList.remove('hidden');
    });

    // Example form handling logic
    const registerForm = document.getElementById('register-form');
    const authForm = document.getElementById('auth-form');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        
        // Save the user's data (this would typically be sent to a backend)
        localStorage.setItem('user', JSON.stringify({ email, password }));
        
        alert('Registration successful! Please log in.');
        registerSection.classList.add('hidden');
        authSection.classList.remove('hidden');
    });

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Retrieve the stored user's data
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert('Login successful!');
            // Redirect to home page or load the shop content
            window.location.href = "sneaker.html"; // Replace with your home page
        } else {
            alert('Invalid email or password!');
        }
    });
});


// home page script

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const sneakerItems = document.querySelectorAll('.sneaker-item');

    searchBar.addEventListener('keyup', () => {
        const searchQuery = searchBar.value.toLowerCase();
        console.log('Search Query:', searchQuery);  // Debugging line

        sneakerItems.forEach(item => {
            const brand = item.getAttribute('data-brand').toLowerCase();
            console.log('Brand:', brand);  // Debugging line
            
            if (brand.includes(searchQuery)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Select all buy buttons
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the closest sneaker item
            const sneakerItem = button.closest('.sneaker-item');
            if (sneakerItem) {
                // Find and show the thank-you message
                const thankYouMessage = sneakerItem.querySelector('.thank-you-message');
                if (thankYouMessage) {
                    thankYouMessage.style.display = 'block'; // Show the thank you message
                    button.style.display = 'none'; // Hide the buy button

                    // Hide the thank you message after 3 seconds
                    setTimeout(() => {
                        thankYouMessage.style.display = 'none'; // Hide the thank you message
                        button.style.display = 'inline'; // Show the buy button again
                    }, 3000);
                } else {
                    console.error('The thank-you-message element was not found.');
                }
            } else {
                console.error('The sneaker-item element was not found.');
            }
        });
    });
});

// this is Comment collection 

function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// smooth for scorll

document.querySelectorAll('.navbar-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Logout

document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-button');

    logoutButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Perform any necessary cleanup or session management here

        // Redirect to the registration/login page
        window.location.href = 'index.html'; // Update this path to your actual login/registration page
    });

    // Example: toggle between login and registration forms
    const registerLink = document.getElementById('register-toggle-link');
    const loginLink = document.getElementById('toggle-link');

    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerSection.classList.remove('hidden');
        authSection.classList.add('hidden');
    });

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerSection.classList.add('hidden');
        authSection.classList.remove('hidden');
    });
});


