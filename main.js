// main.js - Controller for Ask Appliance Repairs Ltd static site
import AppConstants from './AppConstants.js';

// SEO tags
function setSEOTags() {
  document.title = AppConstants.SEO_TITLE;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', AppConstants.SEO_DESCRIPTION);
  else {
    const m = document.createElement('meta');
    m.name = "description";
    m.content = AppConstants.SEO_DESCRIPTION;
    document.head.appendChild(m);
  }
  // Keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) metaKeywords.setAttribute('content', AppConstants.SEO_KEYWORDS);
  else {
    const m = document.createElement('meta');
    m.name = "keywords";
    m.content = AppConstants.SEO_KEYWORDS;
    document.head.appendChild(m);
  }
  // Canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = "canonical";
    canonical.href = AppConstants.SEO_CANONICAL;
    document.head.appendChild(canonical);
  }
  // Open Graph
  const ogTags = [
    { property: "og:title", content: AppConstants.SEO_TITLE },
    { property: "og:description", content: AppConstants.SEO_DESCRIPTION },
    { property: "og:image", content: AppConstants.SEO_OG_IMAGE },
    { property: "og:url", content: AppConstants.SEO_CANONICAL },
    { property: "og:type", content: "website" }
  ];
  ogTags.forEach(tag => {
    let el = document.querySelector(`meta[property='${tag.property}']`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', tag.property);
      el.content = tag.content;
      document.head.appendChild(el);
    } else {
      el.content = tag.content;
    }
  });
  // Twitter
  const twTags = [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: AppConstants.SEO_TITLE },
    { name: "twitter:description", content: AppConstants.SEO_DESCRIPTION },
    { name: "twitter:image", content: AppConstants.SEO_TWITTER_IMAGE }
  ];
  twTags.forEach(tag => {
    let el = document.querySelector(`meta[name='${tag.name}']`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', tag.name);
      el.content = tag.content;
      document.head.appendChild(el);
    } else {
      el.content = tag.content;
    }
  });
}

// Cookie Consent
function showCookieConsent() {
  const consent = document.querySelector('.cookie-consent');
  if (!consent) return;
  if (!localStorage.getItem('cookieAllowed')) {
    consent.classList.add('active');
    consent.querySelector('button').onclick = () => {
      localStorage.setItem('cookieAllowed', 'true');
      consent.classList.remove('active');
    };
  }
}

// Areas We Cover
function renderAreas() {
  const areasList = document.getElementById('areas-list');
  if (!areasList) return;
  areasList.innerHTML = '';
  AppConstants.POSTCODES.forEach(pc => {
    const span = document.createElement('span');
    span.textContent = pc;
    areasList.appendChild(span);
  });
}

// Floating Quote Button
function setupQuoteButton() {
  const btn = document.querySelector('.floating-quote-btn');
  const modal = document.querySelector('.quote-modal');
  const textarea = modal.querySelector('textarea');
  const sendBtn = modal.querySelector('button');
  btn.onclick = () => {
    modal.classList.toggle('active');
    textarea.value = '';
    sendBtn.disabled = true;
  };
  textarea.oninput = () => {
    sendBtn.disabled = textarea.value.trim().length === 0;
  };
  sendBtn.onclick = () => {
    const msg = encodeURIComponent(textarea.value.trim());
    if (msg) {
      window.open(`https://wa.me/${AppConstants.WHATSAPP_NUMBER}?text=${msg}`,'_blank');
      modal.classList.remove('active');
    }
  };
}

// Company Information
function setCompanyInfo() {
  // Set company name in header if not already set
  const companyNameEl = document.getElementById('company-name');
  if (companyNameEl && !companyNameEl.textContent.trim()) {
    companyNameEl.textContent = AppConstants.COMPANY_NAME;
  }
  
  // Set footer company name if not already set
  const footerCompanyEl = document.getElementById('footer-company-name');
  if (footerCompanyEl && !footerCompanyEl.textContent.trim()) {
    footerCompanyEl.textContent = AppConstants.COMPANY_NAME;
  }
  
  // Set company info link if not already set
  const companyInfoLink = document.getElementById('company-info-link');
  if (companyInfoLink && !companyInfoLink.href.includes(AppConstants.COMPANY_NUMBER)) {
    companyInfoLink.href = AppConstants.COMPANY_INFO_URL;
  }
}

// Set Image Sources from AppConstants
function setImageSources() {
  // Set logo image source
  const logoImage = document.getElementById('logo-image');
  if (logoImage) {
    logoImage.src = AppConstants.LOGO_PATH;
  }
  
  // Set service image source
  const serviceImage = document.getElementById('service-image');
  if (serviceImage) {
    serviceImage.src = AppConstants.SERVICE_IMAGE;
  }
}

// CSS Variables from AppConstants
function setCSSVariables() {
  const root = document.documentElement;
  root.style.setProperty('--primary-color', AppConstants.PRIMARY_COLOR);
  root.style.setProperty('--secondary-color', AppConstants.SECONDARY_COLOR);
  root.style.setProperty('--text-color', AppConstants.TEXT_COLOR);
  root.style.setProperty('--button-color', AppConstants.BUTTON_COLOR);
  root.style.setProperty('--button-text-color', AppConstants.BUTTON_TEXT_COLOR);
  root.style.setProperty('--button-hover-color', AppConstants.BUTTON_HOVER_COLOR);
  root.style.setProperty('--cookie-bg', AppConstants.COOKIE_BG);
  root.style.setProperty('--cookie-text', AppConstants.COOKIE_TEXT);
  root.style.setProperty('--accent-color', AppConstants.ACCENT_COLOR);
  root.style.setProperty('--border-color', AppConstants.BORDER_COLOR);
  root.style.setProperty('--disabled-color', AppConstants.DISABLED_COLOR);
  root.style.setProperty('--link-color', AppConstants.LINK_COLOR);
}

// 404 Page
function setup404() {
  if (document.body.classList.contains('not-found')) {
    document.title = AppConstants.NOT_FOUND_TITLE;
  }
}

// Init
window.addEventListener('DOMContentLoaded', () => {
  setCSSVariables();
  setSEOTags();
  setCompanyInfo();
  setImageSources();
  showCookieConsent();
  renderAreas();
  setupQuoteButton();
  setup404();
});
