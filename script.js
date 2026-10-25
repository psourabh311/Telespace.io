// =============================================
// TeleSpace.io - Interactive JavaScript
// =============================================

// Space-Themed Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 2500); // Show for 2.5 seconds
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Mobile Dropdown Toggle
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown && window.innerWidth <= 768) {
        dropdown.addEventListener('click', (e) => {
            if (e.target.classList.contains('dropbtn')) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    }
});

// =============================================
// Smooth Scrolling for Navigation Links
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // navbar height + padding
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =============================================
// Navbar Scroll Effect
// =============================================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// =============================================
// Contact Form Handling
// =============================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        query: document.getElementById('query').value,
        timestamp: new Date().toISOString()
    };

    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;

    // Simulate form submission (In production, this would send to a backend)
    try {
        // This is where you would typically send data to your backend
        // For now, we'll simulate a successful submission
        
        await simulateFormSubmission(formData);
        
        // Show success message
        formMessage.className = 'form-message success';
        formMessage.textContent = '✓ Thank you! Your query has been submitted successfully. We will contact you within 24 hours.';
        formMessage.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 8 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 8000);
        
    } catch (error) {
        // Show error message
        formMessage.className = 'form-message error';
        formMessage.textContent = '✗ Something went wrong. Please try again or contact us directly.';
        formMessage.style.display = 'block';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    } finally {
        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
});

// Simulate form submission (replace with actual backend call)
function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        // Simulate network delay
        setTimeout(() => {
            // Log to console (in production, this would send email to owner)
            console.log('='.repeat(50));
            console.log('NEW QUERY SUBMISSION');
            console.log('='.repeat(50));
            console.log('Name:', data.name);
            console.log('Mobile:', data.mobile);
            console.log('Email:', data.email || 'Not provided');
            console.log('Address:', data.address);
            console.log('Query:', data.query);
            console.log('Timestamp:', data.timestamp);
            console.log('='.repeat(50));
            
            // For production, send email notification to owner:
            // Email subject: "New Query from TeleSpace.io Website"
            // Email body: Include all form data
            
            resolve();
        }, 1500);
    });
}

// =============================================
// Form Validation Enhancement
// =============================================
const nameInput = document.getElementById('name');
const mobileInput = document.getElementById('mobile');
const addressInput = document.getElementById('address');
const queryInput = document.getElementById('query');

// Name validation (only letters and spaces)
nameInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
});

// Mobile validation (only numbers, max 10 digits)
mobileInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
});

// Add character counter for query
queryInput.addEventListener('input', (e) => {
    const charCount = e.target.value.length;
    const maxChars = 500;
    
    // Create or update counter
    let counter = queryInput.parentElement.querySelector('.char-counter');
    if (!counter) {
        counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.style.cssText = 'font-size: 0.85rem; color: #999; text-align: right; margin-top: 5px;';
        queryInput.parentElement.appendChild(counter);
    }
    
    counter.textContent = `${charCount} / ${maxChars} characters`;
    
    if (charCount > maxChars) {
        counter.style.color = '#ff0000';
        e.target.value = e.target.value.slice(0, maxChars);
    } else if (charCount > maxChars * 0.9) {
        counter.style.color = '#ff8800';
    } else {
        counter.style.color = '#999';
    }
});

// =============================================
// Scroll Animations
// =============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .timeline-item, .highlight-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// =============================================
// Page Load Animation
// =============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// =============================================
// Back to Top Button (Optional Enhancement)
// =============================================
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
    
    document.body.appendChild(button);
}

// Initialize back to top button
createBackToTopButton();

// =============================================
// Active Nav Link Highlighting
// =============================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// =============================================
// Console Welcome Message
// =============================================
console.log('%c TeleSpace.io ', 'background: #0066cc; color: white; font-size: 20px; padding: 10px;');
console.log('%c YOUR ICT PARTNER ', 'background: #00a3e0; color: white; font-size: 14px; padding: 5px;');
console.log('%c Professional ICT Consulting Services ', 'color: #666; font-size: 12px;');
console.log('%c Website developed with ❤️ ', 'color: #999; font-size: 10px;');
