document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling untuk link navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Simulasi pengiriman form (Karena GitHub Pages statis)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil data
            const name = document.getElementById('name').value;
            const btn = document.querySelector('.btn-submit');
            
            // Animasi tombol saat ditekan
            btn.textContent = 'MENGIRIM...';
            btn.style.backgroundColor = 'var(--color-green)';
            
            setTimeout(() => {
                alert(`Pesan diterima, ${name}! (Ini adalah demo statis).`);
                contactForm.reset();
                btn.textContent = 'KIRIM PESAN';
                btn.style.backgroundColor = 'var(--color-blue)';
            }, 1000);
        });
    }
});
