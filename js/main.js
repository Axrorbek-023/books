//https://65eb425343ce164189339401.mockapi.io/Books


function setBooks(e){
    e.preventDefault()
    let book = {
        title: e.target.title.value,
        img: e.target.img.value,
        price: e.target.price.value,
    }
    fetch('https://65eb425343ce164189339401.mockapi.io/Books',{
        method:'POST',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify(book)
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
}

let elList = document.querySelector('.list')
fetch('https://65eb425343ce164189339401.mockapi.io/Books')
    .then((res)=> res.json())
    .then((data)=> {
        data.forEach(element => {
            let newLi = document.createElement('li')
            newLi.innerHTML = `
            <div class="quti">
            <img src=${element.img} width="${100}px" height="${80}px" alt="">
            <p>${element.price}</p>
            <h1 class="h1 mb-3" onclick="">${element.title}</h1>
            <button onclick="DelBook(${element.id})" class="btn btn-danger mb-3">delete</button>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setId(${element.id})" class="btn btn-info mb-3">edit</button>
            </div>
            `
            elList.appendChild(newLi)
        });
    })



function DelBook(id){
    fetch(`https://65eb425343ce164189339401.mockapi.io/Books/${id}`,{
        method:'DELETE',
        headers:{'content-type': 'application/json'},
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
}

function setId(id){
    window.localStorage.setItem('id', id)
}

function bookEdit(e){
    e.preventDefault()
    let id = window.localStorage.getItem('id')
    let book = {
        title: e.target.title.value,
        img: e.target.img.value,
        price: e.target.price.value,
    }
    fetch(`https://65eb425343ce164189339401.mockapi.io/Books/${id}`,{
        method:'PUT',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify(book)
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
}