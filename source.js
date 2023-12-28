var productname=document.getElementById("productname");
var productprice=document.getElementById("productprice");
var productcategory=document.getElementById("productcategory");
var productdesc=document.getElementById("productdesc");
var searchproduct=document.getElementById("searchproduct");
var fire=document.getElementById('fire');
var alarm=document.getElementById('alarm');
var bad=document.getElementById('bad');
var watch=document.getElementById('watch');
var productscontainer;
if(localStorage.getItem('productlist')==null){
    productscontainer=[];
}
else{
    productscontainer=JSON.parse(localStorage.getItem('productlist'));
    // here we use (JSON.parse) to convert string to object value
    displayproduct();
}

function addproduct()
{
    if(validateproductn()==true&&
    validateproductd()==true&&
    validateproductc()==true&&
    validateproductp()==true&&
    checkinputs()==true){
    var product={
        name:productname.value,
        price:productprice.value,
        category:productcategory.value,
        desc:productdesc.value
    };
    console.log(product);
    productscontainer.push(product);
localStorage.setItem('productlist',JSON.stringify(productscontainer));
 //here we use (JSON.stringify) to convert object to string value
    displayproduct();
   clearform();
}
else{
return false;
window.alert('sorry all fields are required')
}
  
}
function clearform()
{
    productname.value="";
    productprice.value="";
    productcategory.value="";
    productdesc.value="";
}
function displayproduct()
{
    var cartoona=``;
    for(var i=0;i<productscontainer.length;i++)
    {
    cartoona+=`<tr>
<td>${[i+1]}</td>
<td>${productscontainer[i].name}</td>
<td>${productscontainer[i].price}</td>
<td>${productscontainer[i].category}</td>
<td>${productscontainer[i].desc}</td>
<td><button onclick='updateproduct(${i});'class="btn btn-outline-warning">update</button></td>
<td><button onclick='deleteproduct(${i});' class="btn btn-outline-danger">delete</button></td>
</tr>`;
productdesc.classList.remove('is-valid');
    productdesc.classList.remove('is-invalid');
    productprice.classList.remove('is-valid');
    productprice.classList.remove('is-invalid');
    productcategory.classList.remove('is-valid');
    productcategory.classList.remove('is-invalid');
    productname.classList.remove('is-valid');
    productname.classList.remove('is-invalid');
    }
document.getElementById('tablebody').innerHTML=cartoona;
}
 function checkinputs()
{
    if( productname.value !=""&&
    productprice.value !=""&&
    productcategory.value !=""&&
    productdesc.value!=""){
        return true;
    }
    else{
        return false;
    }
}
function searchproduct(term)
{
    var term=``;
    for(var i=0;i<productscontainer.length;i++)
    {
        if(productscontainer[i].name.tolowercase().includes(term.tolowercase())==true)
        {
            term+=`<tr>
<td>${[i]}</td>
<td>${productscontainer[i].name}</td>
<td>${productscontainer[i].price}</td>
<td>${productscontainer[i].category}</td>
<td>${productscontainer[i].desc}</td>
<td><button class="btn btn-outline-warning">update</button></td>
<td><button class="btn btn-outline-danger">delete</button></td>
</tr>`;
    }
    else{
        console.log(sorry)
    }
}
document.getElementById('tablebody').innerHTML=cartoona;
}
function updateproduct(index)
{
    productname.value = productscontainer[index].name;
    productprice.value = productscontainer[index].price;
    productcategory.value = productscontainer[index].category;
    productdesc.value = productscontainer[index].desc;
}
function deleteproduct(index)
{
    productscontainer.splice(index,1);
    localStorage.setItem('productlist',JSON.stringify(productscontainer));
    displayproduct();
}
function validateproductn()
{
    var regexname = /^[A-Z][a-z]{3,8}$/;
    if(regexname.test(productname.value)==true){
        productname.classList.add('is-valid');
        productname.classList.remove('is-invalid');
       fire.classList.replace('d-block','d-none');
        return true;
    }
    else{
        productname.classList.add('is-invalid');
        productname.classList.remove('is-valid');
       fire.classList.replace('d-none','d-block');
        return false;
    }
}
productname.addEventListener("keyup",validateproductn);

function validateproductc()
{
var regexcategory = /^[A-Z][a-z]{1,}$/;
    if(regexcategory.test(productcategory.value)==true){
        productcategory.classList.add('is-valid');
        productcategory.classList.remove('is-invalid');
       bad.classList.replace('d-block','d-none');
        return true;
    }
    else{
        productcategory.classList.add('is-invalid');
        productcategory.classList.remove('is-valid');
       bad.classList.replace('d-none','d-block');
        return false;
    }
}
productcategory.addEventListener("keyup",validateproductc);
function validateproductp()
{
   
    var regexprice =/^[0-9]{1,}$/;
    if(regexprice.test(productprice.value)==true){
        productprice.classList.add('is-valid');
        productprice.classList.remove('is-invalid');
       alarm.classList.replace('d-block','d-none');
        return true;
    }
    else{
        productprice.classList.add('is-invalid');
        productprice.classList.remove('is-valid');
       alarm.classList.replace('d-none','d-block');
        return false;
    }
}
productprice.addEventListener("keyup",validateproductp);
function validateproductd()
{
 
var regexdesc = /^[A-Z][a-z]{3,8}$/;
    if(regexdesc.test(productdesc.value)==true){
        productdesc.classList.add('is-valid');
        productdesc.classList.remove('is-invalid');
    watch.classList.replace('d-block','d-none');
        return true;
    }
    else{
        productdesc.classList.add('is-invalid');
        productdesc.classList.remove('is-valid');
       watch.classList.replace('d-none','d-block');
        return false;
    }
}

document.body.addEventListener('keydown',function(e)
{
    if(e.key=='Enter')
    {
        addproduct()  ;
    }
})