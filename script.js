document.getElementById('yesBtn').addEventListener('click', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    // Make Yes button smaller
    const yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${yesSize * 0.8}px`;
    yesBtn.style.padding = `${yesSize * 0.8 * 0.8}px ${yesSize * 0.8 * 1.6}px`;
    
    // Make No button bigger
    const noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    noBtn.style.fontSize = `${noSize * 1.2}px`;
    noBtn.style.padding = `${noSize * 1.2 * 0.8}px ${noSize * 1.2 * 1.6}px`;
    
    // Change No button to Yes
    noBtn.textContent = 'Yes';
});

document.getElementById('noBtn').addEventListener('click', function() {
    const buttonsContainer = document.querySelector('.buttons');
    const body = document.body;
    
    if (buttonsContainer) {
        // Remove buttons
        buttonsContainer.remove();
        
        // Add H1 element
        const h1 = document.createElement('h1');
        h1.textContent = 'Το γνωρίζουμε!!!!';
        body.appendChild(h1);
    }
});
