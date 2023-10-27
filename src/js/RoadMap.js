const divsTree = document.querySelectorAll(".tree div");
const initTree = document.getElementById("pointerInit")
const idsList = ["second", "framework", "linguagem"]
let contFrinst = true;
let db = {};
autoloader()


divsTree.forEach((div) => {
    const img = div.querySelector("img");

    if(img != null){
        div.addEventListener("mouseover", () => {
            img.src = '/imgs/circle_filled_icon.png';
        });

        div.addEventListener("mouseout", () => {
            img.src = '/imgs/circle.png';
        });
    }
});

initTree.addEventListener("click", (e) => {
    if (contFrinst){
        show(0);
        contFrinst = false;
    }
    openPopup("Meu primeiro contato com A programação foi em 2018 com Python ")
});


document.getElementById(idsList[0]).addEventListener("click", () => {
    openPopup(get(idsList[0]))
    show(1)
});

document.getElementById(idsList[1]).addEventListener("click", () => {
    openPopup(get(idsList[1]))
    show(2)
});

document.getElementById(idsList[2]).addEventListener("click", () => {
    openPopup(get(idsList[2]))
    show(3)
});


document.getElementById('voltar').addEventListener("click", () => {
    window.location.href = "/"
})

function show(int){
    if (idsList[int] != null){
        document.getElementById(idsList[int]).style.display = "flex"
    }
}

function openPopup(msg) {
    var popup = document.getElementById("popup");
    var conteudo = document.getElementById('conteudo');
    conteudo.innerHTML = msg;
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function get(element){
    return db[element]
}

function autoloader(){
    fetch("/src/data.json")
        .then(data => data.json())
        .then(data => {
            db = data;
        })
        .catch(err => {
            alert("Ops Erro ao ler o json volte mais tarde");
        })
}


