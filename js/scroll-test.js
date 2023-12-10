document.addEventListener("DOMContentLoaded", function () {
    const targetSection = document.getElementById("geradorbotao");
  
    document.body.style.scrollBehavior = "smooth";
    document.body.style.scrollSnapType = "mandatory";
    document.body.style.scrollSnapPointsY = "repeat(100%)";
  
    setTimeout(function () {
      const offset = 11;
      const targetPosition =
        targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }, 2000);
  });