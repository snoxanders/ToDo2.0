let btn = document.querySelector('button.add-btn')
let lista = document.querySelector('ul.main-list');
let novoItem = document.querySelector('div.novo-item')
let arrayLista = []



btn.addEventListener("click", (e) => {
    e.preventDefault();
    let newDiv = document.createElement('div');
    let newList = document.createElement('ul');
    let newItem = document.createElement('li');
    let newBtn = document.createElement('button');
    let input = document.querySelector('input.main-input');
    let valor = input.value;
    

    novoItem.appendChild(newDiv);
    newDiv.appendChild(newList)
    newList.appendChild(newItem);
    newDiv.appendChild(newBtn);
    newItem.innerHTML = valor;
    newBtn.innerHTML = 'REMOVER';
    arrayLista.push(valor);
    console.log(arrayLista);

    newList.style.marginRight = '10px'
    newDiv.style.display = 'flex'
    newDiv.style.justifyContent = 'space-between'
    newDiv.style.marginBottom = '20px'
    
    newBtn.style.background = '#576F72'
    newBtn.style.color = '#ffff'
    newBtn.style.paddingLeft = '3px'
    newBtn.style.paddingRight = '3px'
    input.value = ""
    


    newBtn.onclick = () =>{
        newItem.remove();
        newBtn.remove();
        newDiv.remove();
        newList.remove();

    }

    newItem.onclick = function () {
        newItem.style.textDecoration = ' line-through'
    }


});



       var element = document.querySelector('input.main-input')
       element.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                let newDiv = document.createElement('div');
                let newList = document.createElement('ul');
                let newItem = document.createElement('li');
                let newBtn = document.createElement('button');
                let input = document.querySelector('input.main-input');
                let valor = input.value;
                

                novoItem.appendChild(newDiv);
                newDiv.appendChild(newList)
                newList.appendChild(newItem);
                newDiv.appendChild(newBtn);
                newItem.innerHTML = valor;
                newBtn.innerHTML = 'REMOVER';
                arrayLista.push(valor);
                console.log(arrayLista);

                newList.style.marginRight = '10px'
                newDiv.style.display = 'flex'
                newDiv.style.justifyContent = 'space-between'
                newDiv.style.marginBottom = '20px'
                
                newBtn.style.background = '#576F72'
                newBtn.style.color = '#ffff'
                newBtn.style.paddingLeft = '3px'
                newBtn.style.paddingRight = '3px'
                input.value = ""


                newBtn.onclick = () =>{
                    newItem.remove();
                    newBtn.remove();
                    newDiv.remove();
                    newList.remove();

                }

                newItem.onclick = function () {
                    newItem.style.textDecoration = ' line-through'
                    
                }
            }
       });