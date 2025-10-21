// Navigation Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.');
    contactForm.reset();
});

// Counter Animation
function animateCounter() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounter, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Trigger counter animation for stats
            if (entry.target.classList.contains('about-stats')) {
                setTimeout(animateCounter, 300);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .about-text, .about-image, .about-stats, .contact-info-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Create floating particles
    createParticles();
});

// Create floating particles for hero section
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size, position and animation
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const animationDuration = Math.random() * 30 + 20;
        const animationDelay = Math.random() * 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${animationDuration}s`;
        particle.style.animationDelay = `${animationDelay}s`;
        
        particlesContainer.appendChild(particle);
    }
}












//paling fix contact supaya masuk pesan nya ke wa ADMIN
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form dikirim secara default
    
    // Ambil nilai dari input form
    var name = document.querySelector('.form-group input[placeholder="Nama Lengkap"]').value;
    var email = document.querySelector('.form-group input[placeholder="Alamat Email"]').value;
    var subject = document.querySelector('.form-group input[placeholder="Subjek"]').value;
    var message = document.querySelector('.form-group textarea').value;
    
    // Nomor WhatsApp Anda (ganti dengan nomor Anda, contoh: 628123456789)
    var yourPhoneNumber = '6281226804248';  // Tanpa tanda +
    
    // Buat teks pesan
    var text = `Pesan/Saran dari Website NEXONUS Teknologi Digital:\nNama: ${name}\nEmail: ${email}\nSubjek: ${subject}\nPesan: ${message}`;
    
    // Buat URL WhatsApp
    var whatsappURL = `https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent(text)}`;
    
    // Buka URL di tab baru
    window.open(whatsappURL, '_blank');
});