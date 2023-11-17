/* const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
  let isAnimating = false;

  function handleClick() {
    if (!isAnimating) {
      isAnimating = true;

      const iconClone = icon.cloneNode(true);
      iconClone.classList.add("clicked");
      icon.parentNode.replaceChild(iconClone, icon);

      setTimeout(() => {
        iconClone.classList.remove("clicked");
        iconClone.parentNode.replaceChild(icon, iconClone);
        isAnimating = false;
      }, 2000);
    }
  }

  icon.addEventListener("click", handleClick);
}); */
