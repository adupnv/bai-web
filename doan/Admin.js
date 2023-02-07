var  productAdmin = function(){
    var listproduct1 = '';
    for (var i in product){
        var data =JSON.parse(JSON.stringify(product[i]));
        var listproduct1 = '<tr>';
            listproduct1 += '<td>' + data.id + '</dt>';
            listproduct1 += '<td>' + data.name + '</td>';
            listproduct1 += '<td><img scr="../img' + data.img + '" alt="" style = width:50px;"+</td>';
            listproduct1 += '<td>' + data.price + '</td>';
            listproduct1 += '</td><button onclick="updateProduct('+i+')"class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct"></button></td>';
            listproduct1 += '</td><button onclick="deleteProduct('+i+')"class="btn ml-l btn-outline-warning><i class="fa fa-trash></i></button></td>';
            listproduct1 += '</tr>'
            document.getElementById('produtc-admin').innerHTML += listproduct1;
    
}
    function adProduct() {
        var Product = {
            id: 'SP' + parseInt(product.lenth + 1),
            name: document.getElementById('name').value,
            img: document.getElementById('img').value,
            price: document.getElementById('price').value,
        };
        Product.push(product);
        localStorage.setItem('listproduct', JSON.stringify(product));
        window.location.reload();
    }

}