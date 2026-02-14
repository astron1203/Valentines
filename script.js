window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('bloom') === 'true' && typeof bloom === 'function') {
        bloom();
    }
});
// Configuration
const flowerEmojis = ['🌸', '🌹', '🌻', '🌷', '🌺', '💐'];
const butterflyEmojis = ['🦋', '✨']; 
const totalFlowers = 60; 
const totalButterflies = 20; 

// ---------------------------------------------

function bloom() {
    // Hide the start button
    const startContainer = document.getElementById('start-container');
    if (startContainer) {
        startContainer.style.display = 'none';
    }
    
    // Show the message and links
    const messageDiv = document.getElementById('message');
    if (messageDiv) {
        messageDiv.classList.remove('hidden');
        messageDiv.classList.add('visible');
    }
}

// AUTOMATICALLY BLOOM IF RETURNING
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('bloom') === 'true') {
        bloom();
    }
});

// Download function for the Picture page
function downloadAll() {
    const captureElement = document.getElementById('capture-area');
    const btn = document.querySelector('.download-btn');
    if(btn) btn.innerText = "Processing...";
    
    if (typeof html2canvas !== 'undefined') {
        html2canvas(captureElement, {
            scale: 2,
            backgroundColor: null,
            useCORS: true
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'our-memories.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            btn.innerText = "⬇ Save Collection";
        }).catch(err => {
            console.error(err);
            btn.innerText = "Error :(";
        });
    }
}
// Pic Javascript
// Wait for the page to load
ddocument.addEventListener("DOMContentLoaded", function() {
    // Set Date for all strips automatically
    const dateElements = document.querySelectorAll(".date");
    const today = new Date();
    // You can customize the date format here if you want
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-US', options).toUpperCase();
    
    dateElements.forEach(el => {
        el.innerText = dateString;
    });
});

// Download All Strips (Optional, keep it if you like)
function downloadAll() {
    const gallery = document.getElementById("capture-area");
    
    // Temporarily reset transform for a clean screenshot
    const strips = document.querySelectorAll('.photo-strip');
    strips.forEach(strip => strip.style.transform = "none");

    html2canvas(gallery, {
        scale: 2, // High resolution
        backgroundColor: "#222", // Dark background for the screenshot
        useCORS: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'our-memories-gallery.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}
// garden page
document.addEventListener("DOMContentLoaded", function() {
    
    const garden = document.getElementById('garden-ground');
    const flowers = ['🌻', '🌹', '🌷', '🌼', '🌸', '🌺', '🪷'];
    const numberOfFlowers = 50; // How many flowers you want

    for (let i = 0; i < numberOfFlowers; i++) {
        createFlower(garden, flowers);
    }
});

function createFlower(container, flowerList) {
    const el = document.createElement('div');
    el.classList.add('planted-flower');
    
    // Pick random flower
    el.innerText = flowerList[Math.floor(Math.random() * flowerList.length)];
    
    // Random Horizontal Position (0% to 100% of screen width)
    const randomLeft = Math.random() * 100;
    el.style.left = `${randomLeft}%`;

    // Random Size (Depth effect: smaller ones look further away)
    const scale = (Math.random() * 0.8) + 0.5; // Scale between 0.5 and 1.3
    el.style.transform = `scale(${scale})`;
    
    // Random Bottom position (Stagger them for depth)
    // The further back (smaller), the higher up on the grass block they should be
    const randomBottom = Math.random() * 15; // 0 to 15% up the grass
    el.style.bottom = `${randomBottom}%`;

    // Random Sway Speed (So they don't all move in sync)
    const randomSpeed = (Math.random() * 2) + 2; // 2s to 4s
    const randomDelay = Math.random() * 2;
    el.style.animationDuration = `${randomSpeed}s`;
    el.style.animationDelay = `${randomDelay}s`;
    
    // Dynamic Z-Index: Lower items should be in front
    el.style.zIndex = Math.floor(randomBottom * 10);

    container.appendChild(el);
}
function bloom() {
    // Hide the start button
    document.getElementById('start-container').style.display = 'none';
    
    // Show the message and links
    const messageDiv = document.getElementById('message');
    messageDiv.classList.remove('hidden');
    messageDiv.classList.add('visible');
}

// Optional: If you want a specific back function logic
function goBack() {
    window.history.back();
}

function bloom() {
    document.getElementById('start-container').style.display = 'none';
    const messageDiv = document.getElementById('message');
    messageDiv.classList.remove('hidden');
    messageDiv.classList.add('visible');
}

/* --- EXISTING BLOOM CODE (Keep this) --- */
function bloom() {
    const startContainer = document.getElementById('start-container');
    if(startContainer) startContainer.style.display = 'none';
    
    const messageDiv = document.getElementById('message');
    if(messageDiv) {
        messageDiv.classList.remove('hidden');
        messageDiv.classList.add('visible');
    }
}

/* --- NEW DOWNLOAD FUNCTION --- */
function downloadAll() {
    const captureElement = document.getElementById('capture-area');
    const btn = document.querySelector('.download-btn');
    
    // Change button text while processing
    btn.innerText = "Processing...";
    
    html2canvas(captureElement, {
        scale: 2, // Better quality
        backgroundColor: null, // Transparent background check
        useCORS: true // Helps with images
    }).then(canvas => {
        // Create an invisible link to trigger download
        const link = document.createElement('a');
        link.download = 'our-memories.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        // Reset button
        btn.innerText = "⬇ Save Collection";
    }).catch(err => {
        console.error("Error saving:", err);
        btn.innerText = "Error :(";
    });
}

// 1. MAIN BUTTON: Downloads the entire board
function downloadAll() {
    const captureElement = document.getElementById('capture-area');
    const btn = document.querySelector('.download-btn');
    const originalText = btn.innerText;

    btn.innerText = "📸 Processing...";

    html2canvas(captureElement, {
        scale: 2,              // High quality
        useCORS: true,         // Handles images better
        backgroundColor: null  // Transparent background
    }).then(canvas => {
        saveCanvas(canvas, 'our-memories-collection.png');
        btn.innerText = "✅ Saved!";
        setTimeout(() => btn.innerText = originalText, 2000);
    }).catch(err => {
        console.error("Error:", err);
        btn.innerText = "Error :(";
    });
}

// 2. INDIVIDUAL STRIPS: Click a strip to download just that one
document.addEventListener('DOMContentLoaded', () => {
    const strips = document.querySelectorAll('.photo-strip');
    
    strips.forEach((strip, index) => {
        // Add visual cue
        strip.style.cursor = "pointer";
        strip.title = "Click to download this strip!";

        strip.addEventListener('click', () => {
            html2canvas(strip, {
                scale: 3, // Super high quality for individual strips
                backgroundColor: null
            }).then(canvas => {
                saveCanvas(canvas, `memory-strip-${index + 1}.png`);
            });
        });
    });
});

// Helper function to trigger the download
function saveCanvas(canvas, filename) {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// 3. BLOOM LOGIC (Keep this for the back button to work)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('bloom') === 'true') {
    // If you have the bloom function in index.html, this triggers it.
    // If this script is only for pic.html, you can ignore this part.
}