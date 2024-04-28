class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o event listener a todos os links "Descubra mais"
    document.querySelectorAll('.pirate-more').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Previne o comportamento padrão do link
            // Busca o próximo elemento irmão da classe 'pirate-extra-info' e alterna sua exibição
            var extraInfo = this.nextElementSibling;
            if (extraInfo.style.display === 'none' || !extraInfo.style.display) {
                extraInfo.style.display = 'block';
            } else {
                extraInfo.style.display = 'none';
            }
        });
    });
});

