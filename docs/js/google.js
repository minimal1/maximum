/** @format */

const searchInput = document.querySelector(
  ".google .search-container .search-input"
);
const clearBtn = document.querySelector(
  ".google .search-container .clear-btn "
);

const handleInput = (e) => {
  if (e.target.value !== "") {
    clearBtn.style.visibility = "visible";
  } else {
    clearBtn.style.visibility = "hidden";
  }
};

searchInput.addEventListener("input", handleInput);
