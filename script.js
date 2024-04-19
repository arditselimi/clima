const faqs = document.querySelectorAll(".small-faq");

faqs.forEach((faq) => {
  const text = faq.querySelector(".text");
  const icon = faq.querySelector("i");

  faq.addEventListener("click", () => {
    text.classList.toggle("active");

    if (text.classList.contains("active")) {
      icon.style.transform = "rotate(45deg)";
    } else {
      icon.style.transform = "";
    }
  });
});
