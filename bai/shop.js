const courseList = document.querySelector('#add')
courseList.addEventListener('click', Add)
function Add(){
    var pname = from.product.value;
    var img = from.img.value;
    var price = from.price.value;
    var image = img.slice(12);
    var html = `    
                   <div class="card">
                    <img class="card-img-top" scr="./img/${image}" alt ="card image cap" >
                    <div class="card-body">
                    <h5 class="card-title">${pname}</h5>
                    <p class="card-text">${price}</p>
                    <button class="btn btn-primary">Buy</button>                   
                    </div>
                    </div>
                 `;
var app =document.querySelector('.row')
app.innerHTML += html;
    



}