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

const workers = document.querySelectorAll(".team__item");

workers.forEach((e) => {
  const videoSrc = e.dataset.videoSrc;

  const video = document.createElement("video");
  video.src = videoSrc;
  video.loop = true;
  video.muted = true;
  video.style.width = "100%";
  video.style.height = "100%";
  video.style.objectFit = "cover";
  video.style.position = "absolute";
  video.style.top = "0";
  video.style.left = "0";
  video.style.opacity = "0";

  e.appendChild(video);

  e.addEventListener("mouseover", () => {
    video.play();
    e.classList.add("active");
    video.style.opacity = "1";
    video.style.borderRadius = "10px";
  });

  e.addEventListener("mouseleave", () => {
    e.classList.remove("active");
    video.style.opacity = "0";
  });
});
