document.getElementById('yesBtn').addEventListener('click', function() {
    const noBtn = document.getElementById('noBtn');
    
    // Make No button bigger
    const noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    noBtn.style.fontSize = `${noSize * 1.2}px`;
    noBtn.style.padding = `${noSize * 1.2 * 0.8}px ${noSize * 1.2 * 1.6}px`;
});

document.getElementById('noBtn').addEventListener('click', function() {
    const buttonsContainer = document.querySelector('.buttons');
    
    // Remove the first h1 element
    const firstH1 = document.querySelector('h1');
    if (firstH1) {
        firstH1.remove();
    }
    
    if (buttonsContainer) {
        // Remove buttons
        buttonsContainer.remove();
        
        // Create a new container for the H1 and GIF
        const newContainer = document.createElement('div');
        newContainer.classList.add('new-container');
        
        // Add new H1 element
        const h1 = document.createElement('h1');
        h1.textContent = 'Το γνωρίζουμε';
        newContainer.appendChild(h1);
        
        // Add GIF
        const gif = document.createElement('img');
        gif.src = 'cat-ha-ha-ha.gif';
        gif.alt = 'Cat laughing';
        gif.style.width = '300px';
        newContainer.appendChild(gif);
        
        // Append the new container to the body
        document.body.appendChild(newContainer);
    }
});
