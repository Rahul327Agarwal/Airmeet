const upper=document.getElementById("upper");



async function get_meme()
{
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
            
            let input = document.createElement('input');
            input.type = 'checkbox'
            input.id = "my_input"
            // input.onchange = graduatedFunction();
            // input.addEventListener("onchange", graduatedFunction);

            div.append(img,input);

            // var close_button = document.getElementById('my_input');
            // for(var j=0;j<close_button.length;j++){
            //     close_button[j].onclick = function(){
            //         console.log("sds")
            //         var but = this.parentElement;
            //         but.style.display = 'none';
            //     }
            // }

            // document.getElementById('my_input').change = function(){
            //     console.log("Ina ansd")
            // }

            var span = document.createElement('span');
            var text = document.createTextNode("\u00D7");
            span.className = "close";
            
            span.appendChild(text);
            div.appendChild(span);
        
            
            img.addEventListener('click',function(){
                console.log("Ina ansd")
                if(this.parentElement.style.backgroundColor != "blue"){
                    this.parentElement.style.backgroundColor = "blue"
                }
                else{
                    this.parentElement.style.backgroundColor = "white"
                }
            })


        } 
    }
}

get_meme();