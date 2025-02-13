document.addEventListener('mousemove', (e)=>{
    document.body.style.setProperty('--x', e.clientX/window.innerWidth);
    document.body.style.setProperty('--y', e.clientY/window.innerHeight);
})

document.addEventListener('touchmove', (e) => {
    // Prevent default scrolling behavior
    e.preventDefault();

    // Access the first touch
    const touch = e.touches[0];
    
    // Check if the touch exists and is valid
    if (touch) {
        document.body.style.setProperty('--x', touch.clientX / window.innerWidth);
        document.body.style.setProperty('--y', touch.clientY / window.innerHeight);
    }
});

