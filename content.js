window.addEventListener('load', function () {
  const paywalls = document.querySelectorAll('.cleanslate');
  if (paywalls.length > 0) {
    paywalls.forEach((paywall) => {
      paywall.remove();
    });    
  }
});
