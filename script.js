const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click', () => {
    // 1. Change the text
    document.querySelector('#question').innerHTML = "I knew it! ❤️";
    
    // 2. Hide the 'No' button
    noBtn.style.display = 'none';

    // 3. Launch Confetti!
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d4d', '#ff0000', '#ffccd5']
    });
});

// The 'No' button still runs away
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents the actual click/tap
    // Trigger the same movement logic as mouseover here
});
