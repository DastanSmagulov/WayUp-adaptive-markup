let btn = document.getElementById('btn');
// btn.onclick = () => document.getElementById("red").style.color='red'; 

// по кнопке менять градиент
// двигаться к мечте скролл наверх
// animate css

function changeColor(e) {
    e.preventDefault();
    document.getElementById('header').style.background='linear-gradient(90deg, rgba(78,254,178,1) 0%, rgba(134,239,148,1) 100%)';
    document.getElementById('header').style.color='#aaa'
}

btn.addEventListener("click", changeColor);
