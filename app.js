
async function fetchText() {

    let response = await fetch('https://api.imgflip.com/get_memes');

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.json();
        // handle data
displayMemes(data.data.memes)
    }
}


fetchText()
let target = document.getElementById('imageGrid')

const displayMemes = memes =>{
    

    memes.forEach(meme => {
        let html = `
        <div class='img'>
        <img src=${meme.url} alt= ${meme.name} class='img' id=${meme.url}>
       </div>
        <h3>${meme.name}</h3>
        `
        let div = document.createElement('div')
        div.id= meme.id
   
        div.classList.add('meme')
        div.innerHTML = html
        target.appendChild(div)
    });
}


target.addEventListener('click', e=>{
    if(e.target.classList.contains('img')){
        ImageEditor.open(e.target.id)
    }
})

const ImageEditor = new FilerobotImageEditor();


