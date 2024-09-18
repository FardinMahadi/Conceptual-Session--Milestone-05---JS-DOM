const ulTag = document.getElementById("nav-container");

const listItem = ulTag.getElementsByTagName("li");

let lastClicked = null;

for (let singleListItem of listItem) {
  singleListItem.addEventListener("click", function () {
    if (lastClicked == null) {
      singleListItem.style.backgroundColor = "red";
      singleListItem.style.color = "white";
      lastClicked = singleListItem;
    } else {
      lastClicked.style.backgroundColor = "transparent";
      singleListItem.style.color = "#eee";

      singleListItem.style.backgroundColor = "red";
      singleListItem.style.color = "white";
      lastClicked = singleListItem;
    }
  });
}
