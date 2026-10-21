// Menu toggle
      const menuToggle = document.querySelector('.menu-toggle');
      const navLinks = document.querySelector('.nav-links');
      menuToggle.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
        navLinks.classList.toggle('open');
      });

      // Accordion
      document.querySelectorAll('.acc-item button').forEach(button => {
        button.addEventListener('click', () => {
          const parent = button.parentElement;
          const isOpen = parent.classList.contains('open');
          document.querySelectorAll('.acc-item').forEach(item => item.classList.remove('open'));
          if (!isOpen) parent.classList.add('open');
          button.setAttribute('aria-expanded', !isOpen);
        });
      });

      // Chat button
      const chatButton = document.querySelector('.chat-button');
      const chatPanel = document.querySelector('.chat-panel');
      const closeChat = chatPanel.querySelector('button');
      chatButton.addEventListener('click', () => {
        chatPanel.classList.toggle('show');
        chatPanel.setAttribute('aria-hidden', chatPanel.classList.contains('show') ? 'false' : 'true');
      });
      closeChat.addEventListener('click', () => {
        chatPanel.classList.remove('show');
        chatPanel.setAttribute('aria-hidden', 'true');
      });

      // Modal
      const modal = document.querySelector('.article-modal');
      const closeModal = modal.querySelector('.close-modal');
      document.querySelectorAll('.article-button').forEach(button => {
        button.addEventListener('click', () => {
          modal.querySelector('h2').textContent = button.getAttribute('data-title');
          modal.showModal();
        });
      });
      closeModal.addEventListener('click', () => modal.close());
      modal.querySelector('.modal-contact').addEventListener('click', () => {
        modal.close();
        document.getElementById('hubungi').scrollIntoView({ behavior: 'smooth' });
      });

      // Form submission
      const form = document.querySelector('.contact-form');
      const successMsg = form.querySelector('.form-success');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        successMsg.textContent = '✓ Pesan Anda telah dikirim! Tim kami akan menghubungi segera.';
        form.reset();
        setTimeout(() => {
          successMsg.textContent = '';
        }, 3000);
      });

      // Nav link active state
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
          link.classList.add('active');
          navLinks.classList.remove('open');
        });
      });
