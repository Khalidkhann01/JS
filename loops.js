
// let myarray=["esapata","alipata","umipata"]

// for (let i=0;i<myarray.length;i++){
//     console.log(myarray[i])
// }



// for (i=1;i<=10;i++){
//     console.log(`outer loop ${i}`)
//     for(j=1;j<=10;j++){
//         console.log(`inner loop ${i}*${j}=${i*j}`)
//     }

// }
// let arr=["supermane","alipata","umipata"]
// let j =0

// while (j<arr.length){
//     console.log(arr[j])
//     j++
// }

// let i =0
// let arr=["supermane","alipata","umipata"]
// do {
//     console.log(`value is ${arr[i]}`)
//     i=i+2

// }while(
//     i<arr.length
// )


// for (i=0;i<10;i++){
//     if (i==3){
//         console.log("special value detected "+i)
//         break
//     }
// }

// let maps = new Map()
// maps.set("ali","Ali is a good boy")
// maps.set("alipata","king");

// for (const [key,value] of maps) {
//    console.log(key)
//    console.log(value)
    
// }

let myarrr=[
    {
    name:"nasir",
    email:"nasirky@GMAIL.COM",
    address:"germany"
},
    {
    name:"ali",
    email:"ali@GMAIL.COM",
    address:"germany"
},
    {
    name:"umer",
    email:"umer@GMAIL.COM",
    address:"munich/germany"
},
]

let filteredArray = myarrr.filter((item) => {
    if (item.name === "a") {
        console.log(`found ${item.name}`);
        return true; // include this item in the filtered array
    } else {
        
        return false; // exclude this item from the filtered array
    }
});


console.log(filteredArray)


// Array.forEach((items,index,arrlist)=>{})


    // NOTES

    // DRAWBACK OF FOREACH => It does not return anything if you store it in a variable



    // Explicit return vs implicit return 
    // An explicit return means that you use the return keyword to specify 
    // the value that should be returned by the function.


    // if you start a scope then you have to return the value because it is not implicit return