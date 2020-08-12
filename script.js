
class person {
    constructor(first, last, gen, phone, mail, ar, hob, des) {
        this.firstName = first;
        this.lastName = last;
        this.gender = gen;
        this.telephone = phone;
        this.email = mail;
        this.area = ar;
        this.hobbies = hob;
        this.description = des;
    }
}
var list =[];
var p1 = new person("Tien","Nguyen","male","0384194762","tiennp5@gmail.com","Asia","swim","moqoqoqla");
var p2 = new person("John","Maix","male","0333342762","tjohn5@gmail.com","Europe","swim","moqoqoqla"); 
list.push(p1);
list.push(p2);
var storage = window.localStorage;

// Add Function 
function add(){
    //var check = true;
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var e = document.getElementById("gender");
    var gender = e.options[e.selectedIndex].value;
    var phoneRegex = "^[0-9]{1,}$";
    var phone = document.getElementById("phone").value; 
    var emailRegex = "^[a-z][a-z0-9]{5,}@[a-z0-9]{2,}(.[a-z0-9]{2,4})$";
    var email = document.getElementById("email").value;
    var area =  "";
    var radios = document.getElementsByName('area');
        for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            area += radios[i].value+"";
            break;
        }
        }
    var checkbox = document.getElementsByName('hobbies');
    var hobbies = "";
    
         for (let i = 0; i < checkbox.length; i++){
            if (checkbox[i].checked === true){
                hobbies +=checkbox[i].value + ', ';
             }
            }   
    
    var description = document.getElementById("des").value;
    
   if(first != "" || last !=""){
    var p = new person(first,last,gender,phone,email,area,hobbies,description);
    list.push(p);
    storage.setItem("localList",JSON.stringify(list));
    list = (storage.getItem("localList"));
    list = JSON.parse(list);
   }
   
}
    
    list = (storage.getItem("localList"));
    list = JSON.parse(list);
    
//Search Function
function showPerson(){
    var listSearch=[];
    list = (storage.getItem("localList"));
    list = JSON.parse(list);
    var s="";
    var searchValue = document.getElementById("search").value;
    for(var i=0;i<list.length;i++){
       s=Object.values(list[i])+"";
        if(s.includes(searchValue)){
            listSearch.push(list[i]);
        }
    } 
    var k = "<tbody>";
    for(var i = 0;i < listSearch.length; i++){
        k+= '<tr>';
        k+= '<td>' + listSearch[i].firstName + '</td>';
        k+= '<td>' + listSearch[i].lastName + '</td>';
        k+= '<td>' + listSearch[i].gender + '</td>';
        k+= '<td>' + listSearch[i].telephone + '</td>';
        k+= '<td>' + listSearch[i].email + '</td>';
        k+= '<td>' + listSearch[i].area + '</td>';
        k+= '<td>' + listSearch[i].hobbies + '</td>';
        k+= '<td>' + listSearch[i].description + '</td>';
        k+= '</tr>';
    }
    k+="</tbody>";
    document.getElementById('tableData').innerHTML = k;
}




