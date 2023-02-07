var product = [{							
    id: 'SP1',							
    name: 'Áo dài thêu họa tiết 111111',							
    img:'https://aodaineo.vn/wp-content/uploads/2022/05/ao-dai-lua-tay-thi-hong-phan-vai-bong-hoa-tiet-theu-hoa-3D-nguc-NAD-205-1.jpg',							
    price: 122000,							
    },							
    {							
    id: 'SP2',							
    name: 'Áo dài truyền thống',							
    img: 'https://aodaiovera.com/img/image/%C3%A1o%20d%C3%A0i%20tr%E1%BA%AFng%20(21).jpg',							
    price: 400000,							
    },							
    {							
    id: 'SP3',							
    name: 'Áo dài',							
    img: 'https://kenh14cdn.com/203336854389633024/2022/8/28/photo-1-1661654730503752805363.jpg',							
    price: 350000,							
    },							
    {							
    id: 'SP4',							
    name: 'Áo dài hiện đại',							
    img: 'https://heritagevietnamairlines.cdn.vccloud.vn/wp-content/uploads/2020/08/139.%C3%81o-d%C3%A0i-Vi%E1%BB%87t-Nam-2-Mai-Xu%C3%A2n-L%E1%BB%A3i.jpg',							
    price: 564000,							
    },							
    {							
    id: 'SP5',							
    name: 'Áo dài hiện đại',							
    img: 'https://anv.vn/wp-content/uploads/2020/11/ao-dai-trang-huong-giang.jpg',							
    price: 654000,							
    },							
    {							
    id: 'SP6',							
    name: 'Áo dài hiện đại',							
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehvCqfCqah2-XKnnActyFsrt9lybtPMJv1A&usqp=CAU',							
    price: 123000,							
    },							
    {							
    id: 'SP7',							
    name: 'Áo dài hiện đại',							
    img: 'https://tailocwedding.vn/wp-content/uploads/2022/11/Anh-Ao-dai-00001.jpg',							
    price: 345000,							
    },							
    {							
    id: 'SP8',							
    name: 'Áo dài hiện đại',							
    img: 'https://lzd-img-global.slatic.net/g/p/4d90e647cf9521885295c99cfcdb0d05.jpg_720x720q80.jpg_.webp',							
    price: 258000,							
    },							
    ];	
    						
// đẩy mảng product vào local						
function Save() {						
    localStorage.setItem('listProduct', JSON.stringify(product));						
}						
//lấy sản phẩm						
function load() {						
    product = JSON.parse(localStorage.getItem('listProduct'));						
}						
//xuất sản phẩm ra html						
if (localStorage.getItem('listProduct') != null) {						
    load();						
}						
var listLocal = function() {						
    var listproduct = '';						
    for (var i in product) {						
        var data = JSON.parse(JSON.stringify(product[i]));							
        var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';						
        listproduct += '<div class="card product p-2" styte="width:auto">';						
        listproduct +='<img class="card-img-top" src="' + data.img + '" alt="...">';						
        listproduct +='<div class="card-title product-title text-center h5">'+ data.name +'</div>';						
        listproduct +='<div class="price text-center h6">' + data.price + '₫</div>';						
        listproduct +='<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' +
        data.id +'" data-name="' +data.name +'" data-img="' + data.img +'" data-price="' +data.price +
        '" onclick="tks()">';						
    listproduct += '<a>';						
    listproduct += '<i class="fas fa-cart-plus"></i>';						
    listproduct += '</a>';						
    listproduct += '</span>';						
    listproduct += '</div>';						
    listproduct += '</div>';						
                            
    document.getElementById('banchay').innerHTML +=listproduct;						
    }						
    Save();						
};						
listLocal();						
localStorage.clear();
var productAdmin =function () {
    var listproduct1='';
    for (var i in product) {
        var data=JSON.parse(JSON.stringify(product[i]));
        var listproduct1 ='</tr>';
        listproduct1 ='<td>' +data.id +'</td>';
        listproduct1 ='<td>' +data.name +'</td>';
        listproduct1 ='<td><img src="../img"'+data.img+'"alt=" " style=width:50px" + </td>';
        listproduct1 ='<td>' +data.price +'</td>';
        listproduct1 ='<td> <button onclick="updateProductc (' + i+') " class="btn btn-outline-danger" date-toggle="modal" data-target="#updateProduct">' + '</td>';
        listproduct1+='<td><button onclick="deleteProduct" (' + i + ') " class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
        listproduct1+='</tr>';
        document.getElementById('product-admin').innerHTML+=listproduct1;
        }
    }

// Xoa
var deleteProduct=function(i){
    product.splice(i, 1);
    localStorage.setItem('listProduct', JSON.stringify(product));
    window.localtion.reload();
};
// Update;
var updateProduct= function(i){
    var k=product[i];
    document.getElementById('idd').value=k.id;
    document.getElementById('named').value= k.name;
    document.getElementById('imgd').value=k.img;
    document.getElementById('priced').value= k.price;
    document.getElementById('idd').setAttribute('disabled', 'disabled');
    document.getElementById('submitUpdate').innerHTML= 
    '<button class= "btn btn-outline- danget mt-3" onclick="submitUpdate('+ i+')"> Dong Y </button>';
};


function themSp(){
    var Product={
        id:'SP'+ parseInt(product.length+1),
        name:document.getElementById('name').value,
        img:document.getElementById('img').value,
        price: document.getElementById('price').value,
    };
    product.push(Product);
    localStorage.setItem('listProduct',JSON.stringify(product));
    listLocal();
}