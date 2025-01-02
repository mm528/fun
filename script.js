document.getElementById('noBtn').addEventListener('click', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    // Get current sizes
    const yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    const noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    
    // Increase Yes button size by 20%
    yesBtn.style.fontSize = `${yesSize * 1.2}px`;
    yesBtn.style.padding = `${yesSize * 1.2 * 0.8}px ${yesSize * 1.2 * 1.6}px`;
    
    // Decrease No button size by 20%
    noBtn.style.fontSize = `${noSize * 0.8}px`;
    noBtn.style.padding = `${noSize * 0.8 * 0.8}px ${noSize * 0.8 * 1.6}px`;
});

document.getElementById('yesBtn').addEventListener('click', function() {
    const gifContainer = document.getElementById('gifContainer');
    if (gifContainer) {
        gifContainer.innerHTML = `
            <img src="./bear-kiss-bear-kisses.gif" alt="Heart" style="width: 200px;">
        `;
    } else {
        console.error('gifContainer element not found');
    }
});
