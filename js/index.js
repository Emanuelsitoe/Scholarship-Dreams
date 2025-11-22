document.getElementById('hamburger-btn').addEventListener('click', function() {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.toggle('active');
        });
        
        // Fechar o menu ao clicar em um link (opcional, mas melhora a UX móvel)
        document.querySelectorAll('.nav-menu a').forEach(item => {
            item.addEventListener('click', () => {
                document.getElementById('nav-menu').classList.remove('active');
            })
        })