function initFooter() {
  const wrapper = document.getElementById("footer-wrapper");
  return (wrapper.innerHTML = `<footer class="bg-dark-bg">
      <div
        class="sm:grid sm:grid-cols-[2fr_1fr_1fr] flex flex-col text-text-muted mt-60"
      >
        <div class="p-8">
          <h3 class="font-heading text-2xl text-white">GAVEL AUCTION HOUSE</h3>
          <p class="mt-4 font-light text-sm">
            Every student's premier destination for rare and valuable
            collectibles. Trusted by students worldwide since 2026.
          </p>
          <div class="flex gap-4 mt-10 text-teal-600 text-2xl">
            <a href="facebook.com"
              ><i class="fa-brands fa-facebook" aria-label="Facebook"></i
            ></a>
            <a href="twitter.com"
              ><i class="fa-brands fa-twitter" aria-label="twitter"></i
            ></a>
            <a href="instagram.com"
              ><i
                class="fa-brands fa-square-instagram"
                aria-label="instagram"
              ></i
            ></a>
            <a href="linkedin.com"
              ><i class="fa-brands fa-square-linkedin" aria-label="linkedin"></i
            ></a>
          </div>
        </div>
        <div class="p-8 flex flex-col gap-2 font-light">
          <h3 class="text-white font-heading text-xl mb-4">Company</h3>
          <a href="#" class="hover:text-white">How it works</a>
          <a href="#" class="hover:text-white">My Bids</a>
          <a href="#" class="hover:text-white">About Us</a>
          <a href="#" class="hover:text-white">Carreers</a>
          <a href="#" class="hover:text-white">Press</a>
          <a href="#" class="hover:text-white">Blog</a>
        </div>
        <div class="p-8 flex flex-col gap-2 font-light">
          <h3 class="text-white font-heading text-xl mb-4">Support</h3>
          <a href="#" class="hover:text-white">Help Center</a>
          <a href="#" class="hover:text-white">Buyer Protection</a>
          <a href="#" class="hover:text-white">Seller Guide</a>
          <a href="#" class="hover:text-white">Contact Us</a>
        </div>
      </div>
      <div
        class="mx-12 border-t border-teal-600 text-text-muted flex gap-4 justify-center sm:justify-end font-light"
      >
        <a href="#" class="mt-6 hover:text-white">Terms</a>
        <a href="#" class="mt-6 hover:text-white">Privacy</a>
        <a href="#" class="mt-6 hover:text-white">Cookies</a>
      </div>
      <p class="text-text-secondary text-center mt-8 text-sm p-2 font-light">
        &copy;2026 Gavel. All rights reserved
      </p>
    </footer>`);
}

initFooter();
