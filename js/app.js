// (function () {
const filterBtn = document.querySelectorAll(".btns");

filterBtn.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();

    const value = event.target.dataset.filter;
    const items = document.querySelectorAll(".game");
    const changeValue = document.querySelector(".games");

    items.forEach(function (item) {
      if (value === "all") {
        item.style.cssText = "display: grid;";

        changeValue.style.cssText =
          "display: grid; grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));";
      } else {
        if (item.classList.contains(value)) {
          changeValue.style.cssText =
            "grid-template-columns: display:flex; width: 64%; ";

          item.style.cssText = "display: grid;";
        } else {
          item.style.cssText = "display: none";
        }
      }
    });
  });
});
// })();

// (function () {

const search = document.getElementById("search-game");

search.addEventListener("keyup", function () {
  let value = search.value.toLowerCase().trim();

  const changeValue = document.querySelector(".games");
  const items = document.querySelectorAll(".game");

  items.forEach(function (item) {
    let type = item.dataset.item;

    let lengthValue = value.length;
    let match = type.slice(0, lengthValue);

    console.log(value);
    console.log(match);

    if (value === match) {
      item.style.display = "grid";
      changeValue.style.cssText =
        "grid-template-columns: display:flex; width: 64%; ";

      if (lengthValue === 0) {
        item.style.display = "grid";
        changeValue.style.cssText =
          "grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); ";
      }
    } else {
      item.style.display = "none";
    }
  });
});
// })();

/*

1) css - price on the BUTTON - DONE
2) ICON change with genres - DONE
3) JAVASCRIPT - type search - ???
4) Make a PROJECT with pictures
5) 


*/
