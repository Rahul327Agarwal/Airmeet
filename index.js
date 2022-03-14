async function get_meme(){
    const response=await fetch("https://www.reddit.com/r/memes.json");
    const body=await response.json();

    for(let i=0;i<body.data.children.length;i++){
        if(body.data.children[i].data.post_hint==='image'){
            let div=document.createElement('div');
            let img=document.createElement('img'); 

            img.src=body.data.children[i].data.url_overridden_by_dest;
            
            img.className = "image";
            let parent=document.getElementById("parent");
            parent.appendChild(div);
            div.className = "my_div";

            let br=document.createElement("br");
            
            let input = document.createElement('input');
            input.type = 'checkbox'
            input.id = "my_input"

            div.append(img,br,input);

            input.addEventListener('click',function(){
                if(this.checked){
                    this.parentElement.style.backgroundColor = "blue";
               
                    // Delete button 
                    let btn_1=document.createElement("button");
                    btn_1.className="delete";
                    btn_1.innerHTML="Delete";
                    div.appendChild(btn_1);
                    btn_1.addEventListener('click',function(){
                        this.parentElement.style.display = 'none';;
                    }) 
                    
                    // Favourite button
                    let btn_2=document.createElement("button");
                    btn_2.innerHTML="Favourite";
                    btn_1.className="favourite";
                    div.appendChild(btn_2);

        
                    span.addEventListener('click',function(){
                        this.parentElement.style.display = 'none';;
                    })   
                }
                
                else{
                    this.parentElement.style.backgroundColor = "white"
                }
            })
        } 
    }
}

get_meme();