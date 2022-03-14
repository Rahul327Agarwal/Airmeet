async function get_meme() {
    const response = await fetch("https://www.reddit.com/r/memes.json");
    const body = await response.json();
  
    for (let i = 0; i < body.data.children.length; i++) {
      if (body.data.children[i].data.post_hint === "image") {
        let div = document.createElement("div");
        let img = document.createElement("img");
  
        img.src = body.data.children[i].data.url_overridden_by_dest;
  
        img.className = "image";
        let parent = document.getElementById("parent");
        parent.appendChild(div);
        div.className = "my_div";
  
        let br = document.createElement("br");
  
        let input = document.createElement("input");
        input.type = "checkbox";
        input.id = "my_input";
  
        div.append(img, br, input);
  
        input.addEventListener("click", function () {
          if (this.checked) {
            this.parentElement.style.backgroundColor = "blue";
  
            //this.parentElement.getElementsByClassName("delete")[0].style.display="block";
            console.log(this.parentElement.getElementsByClassName("delete")[0]);
            if (
              this.parentElement.getElementsByClassName("delete")[0] === undefined
            ) {
              //Delete button
              let btn_1 = document.createElement("button");
              btn_1.className = "delete";
              btn_1.innerHTML = "Delete";
              div.appendChild(btn_1);
  
              btn_1.addEventListener("click", function () {
                this.parentElement.style.display = "none";
              });
  
              //Favourite button
              let btn_2 = document.createElement("button");
              btn_2.innerText = "Add to Favourite?";
              btn_2.className = "favourite";
              // add a set To LocalStorage funtion with a name of data
              btn_2.addEventListener("click", function () {
                btn_2.style.backgroundColor=btn_2.style.backgroundColor=="yellow"?"white":"yellow";
                btn_2.innerText=btn_2.innerHTML=="Add to Favourite?"?"Added to Favourite":"Add to Favourite?";
                // get data from local storage
                let data = JSON.parse(localStorage.getItem("data"));
                if (data === null) {
                  // add an object to data
                  data = [
                    {
                      img: this.parentElement.getElementsByClassName("image")[0]
                        .src,
                      favourite: true,
                    },
                  ];
                } else {
                  // add an object to data
                  // if data constins an object with the same img src then remove it from favourite
                  let index = data.findIndex(
                    (element) =>
                      element.img ===
                      this.parentElement.getElementsByClassName("image")[0].src
                  );
                  if (index !== -1) {
                    data.splice(index, 1);
                    // set to local storage
                    localStorage.setItem("data", JSON.stringify(data));
                  } else {
                    data.push({
                      img: this.parentElement.getElementsByClassName("image")[0]
                        .src,
                      favourite: true,
                    });
                    // set to local storage
                    localStorage.setItem("data", JSON.stringify(data));
                  }
                }
                // set data to local storage
                localStorage.setItem("data", JSON.stringify(data));
              });
              div.appendChild(btn_2);
            } else {
              this.parentElement.getElementsByClassName(
                "delete"
              )[0].style.display = "inline";
              this.parentElement.getElementsByClassName(
                "favourite"
              )[0].style.display = "inline";
            }
          } else {
            this.parentElement.style.backgroundColor = "white";
            console.log(this.parentElement);
            this.parentElement.getElementsByClassName("delete")[0].style.display =
              "none";
            this.parentElement.getElementsByClassName(
              "favourite"
            )[0].style.display = "none";
          }
        });
      }
    }
  }
  
  get_meme();
  
  let more = document.createElement("button");
  more.innerHTML = "Load More";
  more.className = "load";
  
  document.getElementById("main").appendChild(more);
  more.addEventListener("click", function () {
    get_meme();
  });