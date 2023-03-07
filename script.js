const cells = document.querySelectorAll(".grid-item");
const container = document.getElementById("gridcontainer");
var lista = []

var list = new Array(
    [],
    [],
    []
);

for (i = 0; i < 3; i++){
    for (j = 0; j < 3; j++){
        list[i][j] = "-";
    }
}

for (i = 0; i < 9; i++){
    lista.push("-");
}

contador = 0;
i = 0;

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (cell.innerHTML === ""){
        if (contador%2 == 0){
            cell.innerHTML = "X";
            document.getElementById(cell.id).style.color = "red";
            document.getElementById(cell.id).style.border = "2px solid #ff5555"
        }
        else{
            cell.innerHTML = "O";
            document.getElementById(cell.id).style.color = "blue";
            document.getElementById(cell.id).style.border = "2px solid #5555ff"
        }
        pass();
        contador++;
    };
  });
});



function pass(){
    cells.forEach(cell =>{
        if (cell.innerHTML == "X"){
            lista[i] = "X";
        }
        else if (cell.innerHTML == "O"){
            lista[i] = "O";
        }
        i++;
    })
    i = 0;
    clean()
}

function clean(){
    let fila = 0;
    let columna = 0;

    lista.forEach(cell =>{
        list[fila][columna] = cell;

        if (columna === 2){
            fila++;
            columna = 0;
        }
        else{
            columna++;
        }
    })
    check();
}

function check() {
    list.forEach(fila =>{
        let cX = 0;
        let cO = 0;
        fila.forEach(columna =>{
            if (columna === "X"){
                cX++;
            }
            else if (columna === "O"){
                cO++;
            }
        })
        if (cX === 3){
            finish(1);
        }
        else if (cO === 3){
            finish(0);
        }
    })

    for(c = 0; c < 3; c++){
        let cX = 0;
        let cO = 0;

        for(f = 0; f < 3; f++){
            if (list[f][c] === "X"){
                cX++;
            }
            else if (list[f][c] === "O"){
                cO++;
            }
        }

        if (cX === 3){
            finish(1);
        }
        else if (cO === 3){
            finish(0);
        }
    }

    if ((list[0][0] === "X" && list[1][1] === "X" && list[2][2] === "X") || (list[0][2] === "X" && list[1][1] === "X" && list[2][0] === "X")){
        finish(1);
    }
    else if ((list[0][0] === "O" && list[1][1] === "O" && list[2][2] === "O") || (list[0][2] === "O" && list[1][1] === "O" && list[2][0] === "O")){
        finish(0);
    }

    if (!lista.includes("-")){
        finish(2)
    }
}

function finish(d){
    if (d === 1){
        setTimeout(() => {alert("GANA X");}, 50);
    }
    else if (d === 0){
        setTimeout(() => {alert("GANA O");}, 50);
    }
    else{
        setTimeout(() => {alert("EMPATE");}, 50);
    }
}

function a() {
    let alto = document.documentElement.scrollHeight;
    let alpha = 1;
    let r = alto/alpha;
    console.log(alto + "px", r);
    container.style.marginTop = (r - 21) + "px";
    console.log(container.offsetTop);
}

function b() {
    console.log(container.offsetTop);
}

function c() {
    container.style.marginTop = container.offsetTop; 
}

function down(x) {
    container.style.marginTop = container.offsetTop + x + "px";
    b();
}

function up(x) {
    container.style.marginTop = container.offsetTop - x + "px";
    b();
}
