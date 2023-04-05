let places = document.querySelectorAll(".island-list li");
    let active = "./assets/cebu-island.jpg";

    places.forEach((e) => {
      e.addEventListener("mouseenter", (event) => {
        places.forEach((e) => {
          e.classList.remove("active");
        });

        event.target.classList.add("active");
        active = event.target.getAttribute("data-img");
        let banner = document.querySelector(".banner");
        banner.style.backgroundImage = `url('${active}')`;
      });
    });