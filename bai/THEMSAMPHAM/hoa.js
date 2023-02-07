var product = [
    {							
    id: 'SP1',							
    name: 'Áo dài thêu họa tiết 111111',							
    img:'https://aodaiviet.net/wp-content/uploads/2021/01/ao-dai-truyen-thong-mau-do1-scaled.jpg',							
    price: 122000,							
    },							
    {							
    id: 'SP2',							
    name: 'Áo dài truyền thống',							
    img: 'https://aodaiviet.net/wp-content/uploads/2021/01/ao-dai-truyen-thong-mau-do1-scaled.jpg',							
    price: 400000,							
    },							
    {							
    id: 'SP3',							
    name: 'Áo dài',							
    img: 'https://aodaiviet.net/wp-content/uploads/2021/01/ao-dai-truyen-thong-mau-do1-scaled.jpg',							
    price: 350000,							
    },							
    {							
    id: 'SP4',							
    name: 'Áo dài hiện đại',							
    img: 'https://aodaiviet.net/wp-content/uploads/2021/01/ao-dai-truyen-thong-mau-do1-scaled.jpg',							
    price: 564000,							
    },							
    {							
    id: 'SP5',							
    name: 'Áo dài hiện đại',							
    img: 'https://aodaiviet.net/wp-content/uploads/2021/01/ao-dai-truyen-thong-mau-do1-scaled.jpg',							
    price: 654000,							
    },							
    {							
    id: 'SP6',							
    name: 'Áo dài hiện đại',							
    img: 'https://aodaiviet.net/wp-content/uploads/2021/01/ao-dai-truyen-thong-mau-do1-scaled.jpg',							
    price: 123000,							
    },							
    {							
    id: 'SP7',							
    name: 'Áo dài hiện đại',							
    img: 'https://aodaiviet.net/wp-content/uploads/2021/01/ao-dai-truyen-thong-mau-do1-scaled.jpg',							
    price: 345000,							
    },							
    {							
    id: 'SP8',							
    name: 'Áo dài hiện đại',							
    img: '',							
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
    listproduct +='<img class="card-img-top" src="'+ data.img + '" alt="...">';						
    listproduct +='<div class="card-title product-title text-center h5" >' +data.name +'</div>';						
    listproduct +='<div class="price text-center h6">' + data.price + '₫</div>';						
    listproduct +='<span style="width:50px" class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' +						
    data.id + '" data-name="'+ data.name +'" data-img="' +data.img + '" data-price="'+ data.price +'" onclick="tks()">';							
    listproduct += '<a>';						
    listproduct += '<i class="fas fa-cart-plus"></i>';						
    listproduct += '</a>';
    listproduct += '</span>';
    listproduct +='<button style="width:80px;position:relative;bottom:38px;left:100px" class="btn btn-secondary" data-toggle="modal" data-target="#proDetails" onclick="proDetail"('+i+')">Detail</button>';
    listproduct += '</div>';						
    listproduct += '</div>';						
                            
    document.getElementById('banchay').innerHTML += listproduct;						
    }						
    Save();	
    showadmim();

};						
    listLocal();						
    localStorage.clear();						


    function showadmim(){
            var listproduct1='';
            for (var i in product){
                var data=JSON.parse(JSON.stringify(product[i]));
                var listproduct1='<tr style="margin:100px">';
                listproduct1+='<td>'+(data.id)+'</td>';
                listproduct1+='<td>'+(data.name)+'</td>';
                listproduct1+='<td><img src="../img/'+(data.img)+'" alt="" style=width:50px"+</td>';
                listproduct1+='<td>'+(data.price)+'</td>';
                //lisproduct1+='';
                listproduct1+=
                    '<td><button onclick="updateProduct('+ i +')"class="btn btn-outline-danger" date-toggle="modal" data-target="#updateProduct">Update</button></td>';
                listproduct1+=
                    '<td><button onclick="deletProduct('+i +')"class="btn ml-1 btn-outline-warning">Delete</button></td>';
                listproduct1 +='</tr>';
                document.getElementById('pradmin').innerHTML += listproduct1;
            }
     }
        function addpr(){
            var Product={
                id:'SP'+parseInt(product.length+1),
                name:document.getElementById('name').value,
                img:document.getElementById('hinh').value,
                price:document.getElementById('gia').value
            };
            product.push(Product);
            localStorage.setItem('listProduct',JSON.stringify(product));
            //save
            window.location.reload;
        };

    function sua(index){
            var array=localStorage.getItem("listproduct1")?JSON.parse(localStorage.getItem("listproduct1")):[]
            var index=document.getElementById("idex").value=inde
            document.getElementById("Id_pro").value=array[index].i
            document.getElementById("Name_pro").value=array[index].na
            document.getElementById("Quan_pro").value=array[index].q
            document.getElementById("Pri_pro").value=array[index].p
        }

function proDetail(i){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
var pDetail='';
for (var key in product){
    if(key==i){
        var data=product[i];
        pDetail+='<form class="form-row">';
        pDetail='<div class="card" style="width:auto">';
        pDetail+='<div class="card-img-to" src="img/'+data.img+ ' ">';
        pDetail+='<div class="card-body">';
        pDetail+='<div class="card-title">'+data.name+'</div';
        pDetail+='<div class="card-text">';
        pDetail+=data.descript+'<br>';
        pDetail+=data.price+'/div';
        pDetail+='<span class="text-center add-to-cart btn">';
        pDetail+='<button class="btn btn-success">'+'<i class="fa fa-cart-plus mt-3"></i>'+'</button></span>';
        pDetail+='</form>';
        break;
    }
}
    document.getElementById('proDetail').innerHTML=pDetail;
};
var deletProduct=function(i){
product.splice(i,1);
localStorage.setItem('listProduct',JSON.stringify(product));
window.location.reload();
}
