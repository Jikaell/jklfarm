document.addEventListener("DOMContentLoaded", function() {
    
    // Fungsi untuk menu Hamburger di mobile
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }

    // Fungsi untuk tombol Scroll to Top
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (scrollTopBtn) {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        }
    }

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

});