// function reverseStr(str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];

//     }
//     console.log(reverseStr);

// }
// reverseStr("hello");
// function reverse(str_input) {
//     let reversed = ""
//     for (let i = str_input.length - 1; i >= 0; i--) {
//       reversed += str_input[i]
//     }
//     console.log(reversed);
//   }
//   reverse("hello");


function str(string){
return string.charAt(0).toUpperCase() + string.slice(1) 
}
const newstr =str("this is Test");
console.log(newstr);


// bai 4

let mindX =[];
let staff ={
}
staff={name: "a", price: "20", bard:"mi"}
mindX.push(staff);
staff={name: "a", price: "20", bard:"mi"}
mindX.push(staff);
staff={name: "a", price: "20", bard:"mi"}
mindX.push(staff);

console.log(mindX);

let userInput = prompt("enter c,r,u,d").toLowerCase();

if(userInput === "c"){

    let newName = prompt("enter new name").toLowerCase();
    let newprice =prompt("enter new price").toLowerCase();
    let newBand = prompt("enter new name").toLowerCase();

    staff.name=newName;
    staff.bard=newBand;
    staff.price=newprice;

    mindX.push(staff);
    for(let i = 0; i<=mindX.length-1;i++){
                console.log(`${i+1} ${mindX[i]}`);
               }
        

}else if(userInput === "r"){
for(let i = 0; i<=mindX.length-1;i=i+1){
    staff =mindX[i]
    for(let key in staff){
        console.log(key,staff[key]);
    }
}}

else if(userInput === "d"){
    let position = Number(prompt('Enter position you want delete'));
           mindX.splice(position-1 ,1);
           for(let i = 0; i<=mindX.length-1;i++){
            console.log(`
            ${i+1} ${mindX[i]}`);
    }}else if(userInput ==="u"){
        let position =Number(prompt("enter postion you want update"));
               mindX[position-1].name = prompt("thay doi ten");
               mindX[position-1].price = prompt("thay doi ten");
               mindX[position-1].bard = prompt("thay doi ten");
             
               for(let i = 0; i<=mindX.length-1;i++){
                console.log(`
                ${i+1} ${mindX[i]}`);
    }}

    // bai 3
    // function unique(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//         if (newArr.indexOf(arr[i]) === -1) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }
// console.log(unique([1, 1, 2, 8, 5, 3, 1, 5, 6, 7, 4]))