var arrProduct=[
]

function save(){
var nameC =frm.txt_nameC.value;
var IdPro= frm.txt_id.value;
var NamePro=frm.txt_nameP.value;
var quantity =frm.txt_quantity.value;
var price =frm.txt_price.value;
    if(nameC=="" || IdPro==""||NamePro==""||quantity==""||price==""){
        alert("You need Enter all the blank !!")
    }
    var a={ 
        nameC:nameC,
        id:IdPro,
        nameP:NamePro,
        Quantity:quantity,
        Price: price,
    };
    console.log(a);
    arrProduct.push(a);
}   

function show(){
    var nameC =frm.txt_nameC.value;
    var IdPro= frm.txt_id.value;
    var NamePro=frm.txt_nameP.value;
    var quantity =frm.txt_quantity.value;
    var price =frm.txt_price.value;
    if(nameC=="" || IdPro==""||NamePro==""||quantity==""||price==""){
        alert(" There isn't any data!!");
    }else{
    for(let i in arrProduct){
    var html= '<tr>';
    html+='<td>'+(i+1)+'</td>';
    html+='<td>'+arrProduct[i].nameC+'</td>';
    html+='<td>'+arrProduct[i].id+'</td>';
    html+='<td>'+arrProduct[i].nameP+'</td>';
    html+='<td>'+(arrProduct[i].Quantity +"")+'</td>';
    html+='<td>'+arrProduct[i].Price+'</td>';
    html+='<td>Unknow</td>';
    html+='<td>Unknow</td>';
    html+='<td>'+((parseFloat(arrProduct[i].Quantity))*(parseFloat(arrProduct[i].Price) ))+'</td> ';
    html+='</tr>';
    console.log(html);
    }
    document.querySelector('#table').innerHTML+= html;
}
}

function reset(){
    window.location.reload();
}