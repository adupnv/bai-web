function load (){
    order = JSON.parse(localStorage.getItem('order'));			
}

var show = function () {
    load();
        let row = "";
        for(i in order) {	
            var orders =  JSON.parse(JSON.stringify(order[i]));	
            row += "<tr>";
            row += "<td>" + orders.name + "</td>";
            row += "<td>" + orders.sdt + "</td>";
            row += "<td>" + orders.mota + "</td>";
            row += "<td>" + orders.email + "</td>";
            row += "</tr>";
        }
        document.getElementById("tab").innerHTML += row;
    };

function Huy() {
    window.location.href="user.htm";
}

function Dat(){
    alert("Thanh cong");
    window.location.href="user.htm";
}