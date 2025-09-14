// main.js - Main application file following MVC architecture and SOLID principles
// Ask Appliance Repairs Ltd

// Model - Data management and business logic
class AppModel {
    constructor() {
        this.services = [];
        this.postcodes = [];
        this.features = [];
        this.cookieConsent = null;
        this.quoteData = {
            message: '',
            timestamp: null
        };
    }

    // Single Responsibility: Load services data
    loadServices() {
        this.services = [
            {
                id: 'washing-machine',
                title: AppConstants.SERVICES.WASHING_MACHINE,
                description: 'Professional washing machine repairs and maintenance',
                icon: AppConstants.IMAGES.SERVICE_ICONS.WASHING_MACHINE
            },
            {
                id: 'dishwasher',
                title: AppConstants.SERVICES.DISHWASHER,
                description: 'Expert dishwasher repair services',
                icon: AppConstants.IMAGES.SERVICE_ICONS.DISHWASHER
            },
            {
                id: 'oven',
                title: AppConstants.SERVICES.OVEN,
                description: 'Oven and cooker repair specialists',
                icon: AppConstants.IMAGES.SERVICE_ICONS.OVEN
            },
            {
                id: 'fridge',
                title: AppConstants.SERVICES.FRIDGE,
                description: 'Fridge and freezer repair services',
                icon: AppConstants.IMAGES.SERVICE_ICONS.FRIDGE
            },
            {
                id: 'tumble-dryer',
                title: AppConstants.SERVICES.TUMBLE_DRYER,
                description: 'Tumble dryer repair and maintenance',
                icon: AppConstants.IMAGES.SERVICE_ICONS.TUMBLE_DRYER
            },
            {
                id: 'microwave',
                title: AppConstants.SERVICES.MICROWAVE,
                description: 'Microwave repair specialists',
                icon: AppConstants.IMAGES.SERVICE_ICONS.MICROWAVE
            },
            {
                id: 'hob',
                title: AppConstants.SERVICES.HOB,
                description: 'Hob and cooktop repair services',
                icon: AppConstants.IMAGES.SERVICE_ICONS.HOB
            }
        ];
    }

    // Single Responsibility: Load postcodes data
    loadPostcodes() {
        this.postcodes = AppConstants.LONDON_POSTCODES;
    }

    // Single Responsibility: Load features data
    loadFeatures() {
        this.features = AppConstants.ABOUT.FEATURES;
    }

    // Single Responsibility: Handle cookie consent
    setCookieConsent(consent) {
        this.cookieConsent = consent;
        localStorage.setItem('cookieConsent', JSON.stringify(consent));
    }

    // Single Responsibility: Get cookie consent
    getCookieConsent() {
        const stored = localStorage.getItem('cookieConsent');
        return stored ? JSON.parse(stored) : null;
    }

    // Single Responsibility: Save quote data
    saveQuoteData(message) {
        this.quoteData = {
            message: message,
            timestamp: new Date().toISOString()
        };
    }

    // Single Responsibility: Get quote data
    getQuoteData() {
        return this.quoteData;
    }
}

// View - UI rendering and user interaction
class AppView {
    constructor() {
        this.model = null;
        this.controller = null;
    }

    // Dependency Injection
    setModel(model) {
        this.model = model;
    }

    setController(controller) {
        this.controller = controller;
    }

    // Single Responsibility: Initialize UI elements
    initializeUI() {
        this.setupEventListeners();
        this.renderServices();
        this.renderPostcodes();
        this.renderFeatures();
        this.setupCookieBanner();
        this.setupQuoteModal();
        this.setupNavigation();
        this.setupScrollAnimations();
    }

    // Single Responsibility: Setup event listeners
    setupEventListeners() {
        // Navigation toggle
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        });

        // Hero CTA button
        const heroCta = document.getElementById('hero-cta');
        if (heroCta) {
            heroCta.addEventListener('click', () => {
                this.controller.openQuoteModal();
            });
        }

        // Floating quote button
        const floatingBtn = document.getElementById('floating-quote-btn');
        if (floatingBtn) {
            floatingBtn.addEventListener('click', () => {
                this.controller.openQuoteModal();
            });
        }
    }

    // Single Responsibility: Render services
    renderServices() {
        const servicesGrid = document.getElementById('services-grid');
        if (!servicesGrid || !this.model) return;

        servicesGrid.innerHTML = '';
        this.model.services.forEach(service => {
            const serviceCard = this.createServiceCard(service);
            servicesGrid.appendChild(serviceCard);
        });
    }

    // Single Responsibility: Create service card element
    createServiceCard(service) {
        const card = document.createElement('div');
        card.className = 'service-card fade-in';
        card.innerHTML = `
            <div class="service-icon">
                <img src="${service.icon}" alt="${service.title}" style="width: 40px; height: 40px;">
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        `;
        return card;
    }

    // Single Responsibility: Render postcodes
    renderPostcodes() {
        const postcodesGrid = document.getElementById('postcodes-grid');
        if (!postcodesGrid || !this.model) return;

        postcodesGrid.innerHTML = '';
        this.model.postcodes.forEach(postcode => {
            const postcodeItem = this.createPostcodeItem(postcode);
            postcodesGrid.appendChild(postcodeItem);
        });
    }

    // Single Responsibility: Create postcode item element
    createPostcodeItem(postcode) {
        const item = document.createElement('div');
        item.className = 'postcode-item fade-in';
        item.textContent = postcode;
        return item;
    }

    // Single Responsibility: Render features
    renderFeatures() {
        const featuresList = document.getElementById('features-list');
        if (!featuresList || !this.model) return;

        featuresList.innerHTML = '';
        this.model.features.forEach(feature => {
            const featureItem = this.createFeatureItem(feature);
            featuresList.appendChild(featureItem);
        });
    }

    // Single Responsibility: Create feature item element
    createFeatureItem(feature) {
        const item = document.createElement('li');
        item.className = 'feature-item fade-in';
        item.textContent = feature;
        return item;
    }

    // Single Responsibility: Setup cookie banner
    setupCookieBanner() {
        const cookieBanner = document.getElementById('cookie-banner');
        const cookieMessage = document.getElementById('cookie-message');
        const acceptBtn = document.getElementById('accept-cookies');
        const declineBtn = document.getElementById('decline-cookies');

        if (!cookieBanner || !this.model) return;

        // Check if consent already given
        const consent = this.model.getCookieConsent();
        if (consent) {
            cookieBanner.style.display = 'none';
            return;
        }

        // Show banner
        cookieMessage.textContent = AppConstants.COOKIES.MESSAGE;
        cookieBanner.style.display = 'block';

        // Event listeners
        acceptBtn.addEventListener('click', () => {
            this.controller.acceptCookies();
        });

        declineBtn.addEventListener('click', () => {
            this.controller.declineCookies();
        });
    }

    // Single Responsibility: Setup quote modal
    setupQuoteModal() {
        const modal = document.getElementById('quote-modal');
        const closeBtn = document.getElementById('close-modal');
        const cancelBtn = document.getElementById('cancel-quote');
        const sendBtn = document.getElementById('send-quote');
        const textarea = document.getElementById('quote-textarea');

        if (!modal) return;

        // Event listeners
        closeBtn.addEventListener('click', () => {
            this.controller.closeQuoteModal();
        });

        cancelBtn.addEventListener('click', () => {
            this.controller.closeQuoteModal();
        });

        sendBtn.addEventListener('click', () => {
            this.controller.sendQuote();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.controller.closeQuoteModal();
            }
        });

        // Textarea validation
        textarea.addEventListener('input', () => {
            this.controller.validateQuoteText();
        });
    }

    // Single Responsibility: Setup navigation
    setupNavigation() {
        // Update active nav link on scroll
        window.addEventListener('scroll', () => {
            this.updateActiveNavLink();
        });
    }

    // Single Responsibility: Update active navigation link
    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Single Responsibility: Setup scroll animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    // Single Responsibility: Show quote modal
    showQuoteModal() {
        const modal = document.getElementById('quote-modal');
        const textarea = document.getElementById('quote-textarea');
        if (modal) {
            modal.style.display = 'block';
            textarea.focus();
        }
    }

    // Single Responsibility: Hide quote modal
    hideQuoteModal() {
        const modal = document.getElementById('quote-modal');
        const textarea = document.getElementById('quote-textarea');
        if (modal) {
            modal.style.display = 'none';
            textarea.value = '';
            this.updateSendButton(false);
        }
    }

    // Single Responsibility: Update send button state
    updateSendButton(enabled) {
        const sendBtn = document.getElementById('send-quote');
        if (sendBtn) {
            sendBtn.disabled = !enabled;
        }
    }

    // Single Responsibility: Hide cookie banner
    hideCookieBanner() {
        const cookieBanner = document.getElementById('cookie-banner');
        if (cookieBanner) {
            cookieBanner.style.display = 'none';
        }
    }
}

// Controller - Business logic and coordination
class AppController {
    constructor() {
        this.model = new AppModel();
        this.view = new AppView();
        
        // Dependency Injection
        this.view.setModel(this.model);
        this.view.setController(this);
    }

    // Single Responsibility: Initialize application
    initialize() {
        this.loadData();
        this.view.initializeUI();
        this.setupGlobalEventListeners();
    }

    // Single Responsibility: Load all data
    loadData() {
        this.model.loadServices();
        this.model.loadPostcodes();
        this.model.loadFeatures();
    }

    // Single Responsibility: Setup global event listeners
    setupGlobalEventListeners() {
        // Handle page visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.handlePageHidden();
            } else {
                this.handlePageVisible();
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            this.handleWindowResize();
        });
    }

    // Single Responsibility: Handle page hidden
    handlePageHidden() {
        // Save any pending data
        this.savePendingData();
    }

    // Single Responsibility: Handle page visible
    handlePageVisible() {
        // Refresh data if needed
        this.refreshDataIfNeeded();
    }

    // Single Responsibility: Handle window resize
    handleWindowResize() {
        // Update UI for new viewport
        this.updateResponsiveUI();
    }

    // Single Responsibility: Save pending data
    savePendingData() {
        // Implementation for saving any pending data
    }

    // Single Responsibility: Refresh data if needed
    refreshDataIfNeeded() {
        // Implementation for refreshing data
    }

    // Single Responsibility: Update responsive UI
    updateResponsiveUI() {
        // Implementation for responsive updates
    }

    // Single Responsibility: Open quote modal
    openQuoteModal() {
        this.view.showQuoteModal();
    }

    // Single Responsibility: Close quote modal
    closeQuoteModal() {
        this.view.hideQuoteModal();
    }

    // Single Responsibility: Validate quote text
    validateQuoteText() {
        const textarea = document.getElementById('quote-textarea');
        const hasText = textarea.value.trim().length > 0;
        this.view.updateSendButton(hasText);
    }

    // Single Responsibility: Send quote
    sendQuote() {
        const textarea = document.getElementById('quote-textarea');
        const message = textarea.value.trim();

        if (!message) {
            alert('Please describe the problem you are facing.');
            return;
        }

        // Save quote data
        this.model.saveQuoteData(message);

        // Open WhatsApp
        this.openWhatsApp(message);
    }

    // Single Responsibility: Open WhatsApp with message
    openWhatsApp(message) {
        const phoneNumber = AppConstants.WHATSAPP_NUMBER;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
        
        // Close modal
        this.closeQuoteModal();
    }

    // Single Responsibility: Accept cookies
    acceptCookies() {
        this.model.setCookieConsent({
            accepted: true,
            timestamp: new Date().toISOString()
        });
        this.view.hideCookieBanner();
    }

    // Single Responsibility: Decline cookies
    declineCookies() {
        this.model.setCookieConsent({
            accepted: false,
            timestamp: new Date().toISOString()
        });
        this.view.hideCookieBanner();
    }
}

// Utility Functions - Helper functions following Single Responsibility Principle
class AppUtils {
    // Single Responsibility: Format phone number
    static formatPhoneNumber(phoneNumber) {
        return phoneNumber.replace(/[^0-9]/g, '');
    }

    // Single Responsibility: Validate email
    static validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Single Responsibility: Debounce function
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Single Responsibility: Throttle function
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Error Handling - Centralized error management
class AppErrorHandler {
    // Single Responsibility: Handle application errors
    static handleError(error, context = '') {
        console.error(`Error in ${context}:`, error);
        
        // In production, you might want to send errors to a logging service
        // this.logToService(error, context);
    }

    // Single Responsibility: Log to external service
    static logToService(error, context) {
        // Implementation for logging to external service
        // e.g., Sentry, LogRocket, etc.
    }
}

// Application Initialization
document.addEventListener('DOMContentLoaded', () => {
    try {
        const app = new AppController();
        app.initialize();
    } catch (error) {
        AppErrorHandler.handleError(error, 'Application Initialization');
    }
});

// Global error handler
window.addEventListener('error', (event) => {
    AppErrorHandler.handleError(event.error, 'Global Error Handler');
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
    AppErrorHandler.handleError(event.reason, 'Unhandled Promise Rejection');
});
