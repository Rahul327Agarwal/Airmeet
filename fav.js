const root = document.getElementById("root");
function renderData() {
  const data = JSON.parse(localStorage.getItem("data"));
  if (data === null) {
    root.innerHTML = "No Data Avalable";
  } else {
    data.forEach((element) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<img class="image" src="${element.img}" alt="">`;
      root.appendChild(div);
    });
  }
}
renderData();