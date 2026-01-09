// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && !mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Simulate form submission
            formMessage.classList.remove('hidden');
            formMessage.classList.remove('bg-red-100', 'text-red-700', 'border-red-300');
            formMessage.classList.add('bg-green-100', 'text-green-700', 'border-green-300', 'border', 'rounded-lg', 'p-4');
            formMessage.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Thank you! Your message has been sent successfully. We\'ll get back to you soon.';
            
            // Reset form
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(function() {
                formMessage.classList.add('hidden');
            }, 5000);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add to cart functionality (placeholder)
    const addToCartButtons = document.querySelectorAll('button:has(.fa-cart-plus), button:contains("Add to Cart")');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Add animation
            this.classList.add('animate-pulse');
            setTimeout(() => {
                this.classList.remove('animate-pulse');
            }, 500);
            
            // Show notification (you can enhance this with a toast library)
            console.log('Item added to cart');
        });
    });

    // Filter buttons functionality (Shop page)
    const filterButtons = document.querySelectorAll('button[class*="rounded-full"]:not([type="submit"])');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active state from siblings
            const siblings = this.parentElement.querySelectorAll('button');
            siblings.forEach(btn => {
                btn.classList.remove('bg-pink-500', 'text-white');
                btn.classList.add('bg-gray-100', 'text-gray-700');
            });
            
            // Add active state to clicked button
            this.classList.remove('bg-gray-100', 'text-gray-700');
            this.classList.add('bg-pink-500', 'text-white');
        });
    });

    // Gallery filter functionality
    const galleryFilters = document.querySelectorAll('section:has(.columns) button');
    galleryFilters.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active state from siblings
            const siblings = this.parentElement.querySelectorAll('button');
            siblings.forEach(btn => {
                btn.classList.remove('bg-pink-500', 'text-white');
                btn.classList.add('bg-gray-800', 'text-gray-300');
            });
            
            // Add active state to clicked button
            this.classList.remove('bg-gray-800', 'text-gray-300');
            this.classList.add('bg-pink-500', 'text-white');
        });
    });

    // Search functionality (Shop page)
    const searchInput = document.querySelector('input[type="text"][placeholder*="Search"]');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            // Filter products based on search term
            // This is a placeholder - implement actual filtering logic
            console.log('Searching for:', searchTerm);
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with fade-in class
    document.querySelectorAll('.animate-fade-in').forEach(el => {
        observer.observe(el);
    });
});

// Scroll to top functionality
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // You can add a scroll-to-top button here if needed
});

