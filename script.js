function handleYesClick() {
    const response = document.getElementById('response');
    response.textContent = "Yay! You've made me the happiest person alive! ❤️";
  }
  
  function handleNoHover() {
    const noButton = document.querySelector('.no-button');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  }