setInterval(() => {
    const buttons = document.querySelectorAll('.btn');
  
    buttons.forEach(button => {
      if (button.textContent === 'Continue generating') {
        button.click();
      }
    });
  }, 1000);
  