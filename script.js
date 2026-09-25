document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const startBtn = document.getElementById('start-btn');
    const portfolioContent = document.getElementById('portfolio-content');

    // Tampilkan tombol "MULAI" setelah animasi pedang selesai (1.5 detik)
    setTimeout(() => {
        startBtn.classList.remove('hidden');
    }, 1500);

    // Hilangkan splash screen dan masuk ke portofolio saat tombol ditekan
    startBtn.addEventListener('click', () => {
        splashScreen.classList.add('hidden');
        portfolioContent.classList.remove('hidden');
    });

    // Smooth Scrolling untuk link navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
