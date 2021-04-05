


// let s ="what your favorite such as";
// let a = s.split(" ")

// console.log(a);

// const a = [4, 5, 7, -8];
// console.log(...a);

// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
// };
// for (let x in product) {
//     console.log(x);
// }
// for(const[key, value] of Object.entries(product) ){
//     console.log(key+":",value);
// }

// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Du',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
// };
// let {subject,dueDate,assignTo} =task;
// console.log(`${subject}    
// ${dueDate}
// ${assignTo}`

// );


// let product = ["jeans","T-Shirt", "Socks"]
    


//    let userInput = prompt("enter C, R,U,D").toLowerCase();
//    if(userInput ==="c"){
//        let newitem= prompt("enter new name of item")
//        product.push(newitem);
//        alert("done");
//        for(let i = 0; i<=product.length-1;i++){
//         console.log(`${i+1} ${product[i]}`);
//        }

//    }else if (userInput === "r"){
//        console.log("the curent items are");
// for(let i = 0; i<=product.length-1;i++){
//     console.log(`
//     ${i+1} ${product[i]}`);
// }
//    }else if(userInput==="u"){
//        let position =Number(prompt("enter postion you want update"));
//        let newName = prompt("enter new name");
//        product[position-1]= newName;
      
//       alert("done");
//        for(let i = 0; i<=product.length-1;i++){
//         console.log(`
//         ${i+1} ${product[i]}`);
        
//         alert(product);
    

//    }}else if(userInput === "d"){
//        let position = Number(prompt('Enter position you want delete'));
//        product.splice(position-1 ,1);
//        for(let i = 0; i<=product.length-1;i++){
//         console.log(`
//         ${i+1} ${product[i]}`);

//    }}else(userInput === "e"){
//        break;
//        console.log("err");
//    }




let userInput = prompt("enter number, ngan cach nahu boi dau ,");
let arrNumber = inputNumber.split(",")
 let arr=[]
    for(let i=0;i<arrNumber.length;i++){
        arr.push(Number(arrNumber[i]))
       
    }

    function sumArray(arr){
            let sum = 0
           for(let number of arr){
               sum = sum + number
           }
           return sum
        }

    console.log(sumArray(arr))

    let inputNumber = prompt("enter 1,2,3,..")

    let arrNumber = inputNumber.split(",")
    let arr=[]
       for(let i=0;i<arrNumber.length;i++){
           arr.push(Number(arrNumber[i]))
       }
   
       alert(`The smallest number is ${Math.min(...arr)}`);
    