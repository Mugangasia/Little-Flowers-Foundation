// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (document.querySelector('.nav-links').classList.contains('active')) {
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Mobile dropdown toggle for submenu
const dropdownParents = document.querySelectorAll('.nav-links li.dropdown > a');

dropdownParents.forEach(parentLink => {
    parentLink.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) { // Only apply on mobile
            e.preventDefault();
            const dropdown = this.parentElement;
            dropdown.classList.toggle('active');
        }
    });
});

// Scroll animations
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.mission-card, .value-item, .area-card, .help-card');
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize animation styles
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.mission-card, .value-item, .area-card, .help-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger scroll event to check initial visibility
    window.dispatchEvent(new Event('scroll'));
});

// Blog category filter functionality
const categoryFilters = document.querySelectorAll('.blog-category-filter');
    
categoryFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Remove active class from all filters
        categoryFilters.forEach(f => f.classList.remove('active'));
        
        // Add active class to clicked filter
        filter.classList.add('active');
        
        // Here you would typically filter the blog posts based on category
        // This is a placeholder for that functionality
        const category = filter.textContent.trim();
        console.log(`Filtering by category: ${category}`);
        
        // Simple animation to show filtering action
        const blogCards = document.querySelectorAll('.blog-card, .blog-featured');
        blogCards.forEach(card => {
            card.style.opacity = '0.5';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 300);
        });
    });
});

// Blog search functionality
const searchInput = document.querySelector('.blog-search input');
const searchButton = document.querySelector('.blog-search button');

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    console.log(`Searching for: ${searchTerm}`);
    
    if (searchTerm === '') return;
    
    // Simple animation to show search action
    const blogCards = document.querySelectorAll('.blog-card, .blog-featured');
    blogCards.forEach(card => {
        const title = card.querySelector('.blog-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.blog-excerpt').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'translateY(0)';
            }, 400);
        } else {
            card.style.opacity = '0.5';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 400);
        }
    });
}

// Blog pagination functionality (placeholder)
const paginationButtons = document.querySelectorAll('.blog-navigation-button');

paginationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('active')) return;
        
        paginationButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        
        // Here you would typically load the next page of blog posts
        console.log(`Navigating to page: ${button.textContent.trim()}`);
        
        // Simple animation to show page change
        const blogGrid = document.querySelector('.blog-grid');
        blogGrid.style.opacity = '0.5';
        setTimeout(() => {
            blogGrid.style.opacity = '1';
        }, 300);
    });
});
