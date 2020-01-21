window.addEventListener('load', function () {
  paywallRemover();
});

const paywallRemover = () => {
  const paywall = document.querySelectorAll('.cleanslate');
  console.log('paywall', paywall);
  if (paywall.length > 0) {
    paywall.forEach(item => {
      item.remove();
    });
  }
};
