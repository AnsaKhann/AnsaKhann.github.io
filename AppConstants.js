// AppConstants.js - Central configuration file for Ask Appliance Repairs Ltd
// Contains all strings, colors, image paths, and configuration values

const AppConstants = {
    // Company Information
    COMPANY_NAME: "Ask Appliance Repairs Ltd",
    COMPANY_REGISTRATION: "16560507",
    WHATSAPP_NUMBER: "+44 7340 002079",
    
    // Primary Colors
    PRIMARY_COLOR: "#000066",
    SECONDARY_COLOR: "#ffffff",
    ACCENT_COLOR: "#ff6600",
    TEXT_COLOR: "#333333",
    LIGHT_GRAY: "#f8f9fa",
    DARK_GRAY: "#666666",
    
    // SEO Meta Tags
    SEO: {
        TITLE: "Professional Appliance Repairs London | Ask Appliance Repairs Ltd",
        DESCRIPTION: "Expert appliance repair services across London. Fast, reliable repairs for washing machines, dishwashers, ovens, and more. Same-day service available.",
        KEYWORDS: "appliance repairs London, washing machine repair, dishwasher repair, oven repair, same day repair, London postcodes",
        AUTHOR: "Ask Appliance Repairs Ltd",
        OG_TITLE: "Professional Appliance Repairs London | Ask Appliance Repairs Ltd",
        OG_DESCRIPTION: "Expert appliance repair services across London. Fast, reliable repairs for washing machines, dishwashers, ovens, and more.",
        OG_IMAGE: "https://askappliancerepairs.com/images/og-image.jpg"
    },
    
    // Navigation Menu
    NAVIGATION: {
        HOME: "Home",
        SERVICES: "Services",
        AREAS: "Areas We Cover",
        ABOUT: "About Us",
        CONTACT: "Contact",
        PRIVACY: "Privacy Policy",
        TERMS: "Terms of Service"
    },
    
    // Homepage Content
    HOMEPAGE: {
        HERO_TITLE: "Professional Appliance Repairs in London",
        HERO_SUBTITLE: "Fast, reliable, and affordable repair services for all your home appliances",
        HERO_CTA: "Book a Repair",
        SERVICES_TITLE: "Our Services",
        SERVICES_SUBTITLE: "We repair all major household appliances",
        ABOUT_TITLE: "Why Choose Us?",
        ABOUT_SUBTITLE: "Professional service you can trust",
        AREAS_TITLE: "Areas We Cover in London",
        AREAS_SUBTITLE: "We provide services across all London postcodes"
    },
    
    // Services
    SERVICES: {
        WASHING_MACHINE: "Washing Machine Repairs",
        DISHWASHER: "Dishwasher Repairs",
        OVEN: "Oven & Cooker Repairs",
        FRIDGE: "Fridge & Freezer Repairs",
        TUMBLE_DRYER: "Tumble Dryer Repairs",
        MICROWAVE: "Microwave Repairs",
        HOB: "Hob & Cooktop Repairs"
    },
    
    // London Postcodes (within 20 miles radius of TW19 7NG)
    LONDON_POSTCODES: [
        // TW (Twickenham/Richmond/West London)
        "TW1", "TW2", "TW3", "TW4", "TW5", "TW6", "TW7", "TW8", "TW9", "TW10", "TW11", "TW12", "TW13", "TW14", "TW15", "TW16", "TW17", "TW18", "TW19", "TW20",
        
        // UB (Southall/Uxbridge/West London)
        "UB1", "UB2", "UB3", "UB4", "UB5", "UB6", "UB7", "UB8", "UB9", "UB10", "UB11",
        
        // HA (Harrow/North West London)
        "HA1", "HA2", "HA3", "HA4", "HA5", "HA6", "HA7", "HA8", "HA9",
        
        // SL (Slough/Berkshire)
        "SL1", "SL2", "SL3", "SL4", "SL5", "SL6", "SL7", "SL8", "SL9",
        
        // KT (Kingston/South West London)
        "KT1", "KT2", "KT3", "KT4", "KT5", "KT6", "KT7", "KT8", "KT9", "KT10", "KT11", "KT12", "KT13", "KT14", "KT15", "KT16", "KT17", "KT18", "KT19", "KT20", "KT21", "KT22", "KT23", "KT24",
        
        // GU (Guildford/Surrey)
        "GU1", "GU2", "GU3", "GU4", "GU5", "GU6", "GU7", "GU8", "GU9", "GU10", "GU11", "GU12", "GU13", "GU14", "GU15", "GU16", "GU17", "GU18", "GU19", "GU20", "GU21", "GU22", "GU23", "GU24", "GU25", "GU26", "GU27", "GU28", "GU29", "GU30", "GU31", "GU32", "GU33", "GU34", "GU35",
        
        // SW (South West London)
        "SW1", "SW2", "SW3", "SW4", "SW5", "SW6", "SW7", "SW8", "SW9", "SW10", "SW11", "SW12", "SW13", "SW14", "SW15", "SW16", "SW17", "SW18", "SW19", "SW20",
        
        // W (West London)
        "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12", "W13", "W14",
        
        // NW (North West London)
        "NW1", "NW2", "NW3", "NW4", "NW5", "NW6", "NW7", "NW8", "NW9", "NW10", "NW11",
        
        // N (North London)
        "N1", "N2", "N3", "N4", "N5", "N6", "N7", "N8", "N9", "N10", "N11", "N12", "N13", "N14", "N15", "N16", "N17", "N18", "N19", "N20", "N21", "N22",
        
        // WC (West Central London)
        "WC1", "WC2",
        
        // EC (East Central London)
        "EC1", "EC2", "EC3", "EC4",
        
        // E (East London)
        "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "E11", "E12", "E13", "E14", "E15", "E16", "E17", "E18", "E20",
        
        // SE (South East London)
        "SE1", "SE2", "SE3", "SE4", "SE5", "SE6", "SE7", "SE8", "SE9", "SE10", "SE11", "SE12", "SE13", "SE14", "SE15", "SE16", "SE17", "SE18", "SE19", "SE20", "SE21", "SE22", "SE23", "SE24", "SE25", "SE26", "SE27", "SE28",
        
        // Additional outer London areas within 20 miles
        "EN1", "EN2", "EN3", "EN4", "EN5", "EN6", "EN7", "EN8", "EN9", "EN10", "EN11",
        "IG1", "IG2", "IG3", "IG4", "IG5", "IG6", "IG7", "IG8", "IG9", "IG10", "IG11",
        "RM1", "RM2", "RM3", "RM4", "RM5", "RM6", "RM7", "RM8", "RM9", "RM10", "RM11", "RM12", "RM13", "RM14", "RM15", "RM16", "RM17", "RM18", "RM19", "RM20",
        "SM1", "SM2", "SM3", "SM4", "SM5", "SM6", "SM7",
        "CR0", "CR2", "CR3", "CR4", "CR5", "CR6", "CR7", "CR8", "CR9",
        "BR1", "BR2", "BR3", "BR4", "BR5", "BR6", "BR7", "BR8"
    ],
    

    // About Us Content
    ABOUT: {
        TITLE: "About Ask Appliance Repairs Ltd",
        DESCRIPTION: "We are a professional appliance repair company serving London and surrounding areas. With years of experience, we provide fast, reliable, and affordable repair services for all major household appliances.",
        FEATURES: [
            "Same-day service available",
            "Fully qualified engineers",
            "All work guaranteed",
            "Competitive pricing",
            "No call-out charges for repairs"
        ]
    },
    
    // Contact Information
    CONTACT: {
        PHONE: "+44 7340 002079",
        EMAIL: "info@askappliancerepairs.com",
        ADDRESS: "London, United Kingdom",
        HOURS: "Monday - Friday: 8:00 AM - 6:00 PM<br>Saturday: 9:00 AM - 4:00 PM<br>Sunday: Emergency calls only"
    },
    
    // Quote Modal
    QUOTE_MODAL: {
        TITLE: "Book a Repair",
        DESCRIPTION: "Please explain the problem you are facing",
        PLACEHOLDER: "Describe the issue with your appliance...",
        SEND_BUTTON: "Send via WhatsApp",
        CANCEL_BUTTON: "Cancel"
    },
    
    // Cookie Consent
    COOKIES: {
        TITLE: "Cookie Policy",
        MESSAGE: "We use cookies to enhance your browsing experience and provide personalized content. By continuing to use our website, you consent to our use of cookies.",
        ACCEPT: "Accept All",
        DECLINE: "Decline",
        SETTINGS: "Cookie Settings",
        PRIVACY_LINK: "Privacy Policy"
    },
    
    // Privacy Policy Content
    PRIVACY: {
        TITLE: "Privacy Policy",
        LAST_UPDATED: "Last updated: September 2025",
        SECTIONS: {
            INTRODUCTION: "This Privacy Policy describes how Ask Appliance Repairs Ltd collects, uses, and protects your personal information.",
            DATA_COLLECTION: "We collect information you provide directly to us, such as when you contact us for services.",
            DATA_USAGE: "We use your information to provide our services, communicate with you, and improve our website.",
            DATA_SHARING: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.",
            DATA_SECURITY: "We implement appropriate security measures to protect your personal information.",
            COOKIES: "We use cookies to enhance your experience on our website.",
            YOUR_RIGHTS: "You have the right to access, update, or delete your personal information.",
            CONTACT: "If you have any questions about this Privacy Policy, please contact us."
        }
    },
    
    // Terms of Service Content
    TERMS: {
        TITLE: "Terms of Service",
        LAST_UPDATED: "Last updated: September 2025",
        SECTIONS: {
            ACCEPTANCE: "By using our services, you agree to be bound by these Terms of Service.",
            SERVICES: "We provide appliance repair services as described on our website.",
            BOOKING: "Appointments are subject to availability and confirmation.",
            PAYMENT: "Payment terms will be discussed and agreed upon before work commences.",
            WARRANTY: "We provide warranty on all repair work as specified in our service agreement.",
            LIABILITY: "Our liability is limited to the cost of the repair service provided.",
            CANCELLATION: "Cancellation policies apply as outlined in our service agreement.",
            MODIFICATIONS: "We reserve the right to modify these terms at any time."
        }
    },
    
    // 404 Error Page
    ERROR_404: {
        TITLE: "Page Not Found",
        MESSAGE: "Sorry, the page you are looking for does not exist.",
        SUGGESTIONS: "Here are some helpful links:",
        HOME_LINK: "Go to Homepage",
        CONTACT_LINK: "Contact Us"
    },
    
    // Image Paths
    IMAGES: {
        LOGO: "/images/logo.png",
        HERO_BACKGROUND: "/images/hero-bg.jpg",
        SERVICE_ICONS: {
            WASHING_MACHINE: "/images/washing-machine.png",
            DISHWASHER: "/images/dishwasher.png",
            OVEN: "/images/oven.png",
            FRIDGE: "/images/fridge.png",
            TUMBLE_DRYER: "/images/tumble-dryer.png",
            MICROWAVE: "/images/microwave.png",
            HOB: "/images/hob.png"
        },
        FAVICON: "/images/favicon.ico"
    },
    
    // Animation and UI
    ANIMATIONS: {
        FADE_IN_DURATION: 300,
        SLIDE_DURATION: 500,
        BOUNCE_DURATION: 600
    },
    
    // Breakpoints for responsive design
    BREAKPOINTS: {
        MOBILE: 768,
        TABLET: 1024,
        DESKTOP: 1200
    }
};

// Make AppConstants available globally
window.AppConstants = AppConstants;
