'use strict';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  

function Mobile(user , type){
    this.user=user;
    this.type=type;
    this.price=getRndInteger(100,500);
    this.condition=this.condition

    custmor.push(this);

}

 let custmor=[];


 function stringData(){
     let info=JSON.stringify(custmor);
     localStorage.setItem('usres', info);
 }

let parent =document.getElementById('test');
let table =document.createElement('table');
parent.appendChild(table);

//let header=['user' , 'type' , 'price' ,'condition'];

function makingHeader(){
    let firstRow=document.createElement('tr');
    table.appendChild(firstRow);
    let secondRow=document.createElement('th');
    firstRow.appendChild(secondRow);
    secondRow.textContent=`user`;
    let thirdRow=document.createElement('th');
    firstRow.appendChild(thirdRow);
    thirdRow.textContent=`type`;
    let fourthRow=document.createElement('th');
    firstRow.appendChild(fourthRow);
    fourthRow.textContent=`price`;
    let fifthRow=document.createElement('th');
    firstRow.appendChild(fifthRow);
    fifthRow.textContent=`condition`;


}
makingHeader();


Mobile.prototype.render=function(){
    let list=document.createElement('tr');
    table.appendChild(list);
    let list2=document.createElement('td');
    list.appendChild(list2);
    list2.textContent=this.user;
    let list3=document.createElement('td');
    list.appendChild(list3);
    list3.textContent=this.type;
    let list4=document.createElement('td');
    list.appendChild(list4);
    list4.textContent=this.price;
    if(this.price<200){
        this.condition='used'
    }
    else{
        this.condition='New'
    }
    let list5=document.createElement('td')
    list.appendChild(list5);
    list5.textContent=this.condition
}





//form

let form=document.getElementById('form');
form.addEventListener('submit' , handClick);

function handClick(event){
    event.preventDefault()

    console.log(event);


    let user=event.target.user.value;
    console.log(user);

    let type=event.target.mobile.value;
    console.log(type);

    let addnew= new Mobile(user , type);
    addnew.render();

    stringData();




}

function gettingData(){
    let data=localStorage.getItem('usres');
    let parseObject=JSON.parse(data);

    if(parseObject){
        for (let i = 0; i < parseObject.length; i++) {
           new Mobile(parseObject[i].user,parseObject[i].type);
            
        }
    }
}
gettingData();
console.log(Mobile);

for (let i = 0; i < custmor.length; i++) {
    custmor[i].render()
    
    
}