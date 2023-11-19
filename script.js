   // Selecting elements
const info = document.querySelector(".info");
    // Selecting classList btns
const btns = document.querySelectorAll(".tab-btn");
    // Selecting classList articles
    const articles = document.querySelectorAll(".content");

     // Add event listener - button click
    info.addEventListener("click", function (e) {
        const id = e.target.dataset.id;
        if (id) {
          // remove "active" class from other buttons
          btns.forEach(function (btn) {
            btn.classList.remove("active");
          });
             // add "active" class to the clicked button
          e.target.classList.add("active");
          // hide other articles
          articles.forEach(function (article) {
            article.classList.remove("active");
          });
             // show the selected article
          const element = document.getElementById(id);
          element.classList.add("active");
        }
      });

  
  
