document.getElementById('yesBtn').addEventListener('click', function() {
    const noBtn = document.getElementById('noBtn');
    
    // Make No button bigger
    const noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    noBtn.style.fontSize = `${noSize * 1.2}px`;
    noBtn.style.padding = `${noSize * 1.2 * 0.8}px ${noSize * 1.2 * 1.6}px`;
});

document.getElementById('noBtn').addEventListener('click', function() {
    const buttonsContainer = document.querySelector('.buttons');
    const body = document.body;
    
    if (buttonsContainer) {
        // Remove buttons
        buttonsContainer.remove();
        
        // Remove existing H1 if present
        const existingH1 = document.querySelector('h1');
        if (existingH1) {
            existingH1.remove();
        }
        
        // Add new H1 element
        const h1 = document.createElement('h1');
        h1.textContent = 'Το γνωρίζουμε';
        body.appendChild(h1);
    }
});
