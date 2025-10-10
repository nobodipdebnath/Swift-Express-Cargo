    const buttons = document.querySelectorAll('.active-btn');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('bg'));
        button.classList.add('bg');
      });
    });