document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active'); // Optional: for animating hamburger icon
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (header.offsetHeight || 0), // Adjust for fixed header
                    behavior: 'smooth'
                });
                // Close mobile nav if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Simple Form Submission (Example - no backend)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you shortly.');
            contactForm.reset();
            // In a real application, you would send this data to a server
        });
    }

    const newsletterForm = document.querySelector('.newsletter-signup form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
            // In a real application, you would send this email to a mailing list service
        });
    }


    // This is where you would implement more "enhanced" JavaScript features.
    // For an automatic invoice creator, it would be a substantial amount of code
    // involving:
    // 1. User interface for adding items, quantities, prices, client details.
    // 2. JavaScript logic to calculate totals, taxes, and discounts.
    // 3. Dynamic addition/removal of invoice lines.
    // 4. Potentially generating a PDF (client-side libraries like jsPDF or server-side).
    // 5. Storing invoice data (local storage for client-side, database for server-side).
    // This is beyond the scope of a basic example.

});