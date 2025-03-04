export function Check() {
    // let data = [{
    //     id: 1, children: [{
    //         id: 2, children: [
    //             {
    //                 id: 3, children: [
    //                     { id: 4, children: [] },
    //                     { id: 6, children: [] },
    //                 ]
    //             }
    //         ]
    //     },
    //     { id: 5, children: [] },
    //     ]
    // }];
    
    // console.log(Provider(data, null))


    const data = [
        [1,2,3],
        
    ]

}

// let allData = [];
// function Provider(data, parent) {
//     data.forEach(element => {
//         element.parent = parent
//         console.log("procces1", element.id)
//         if (element.children.length > 0) {

//             console.log(element);
//             // step second
//             element.children.forEach(element2 => {
//                 element2.parent = element
//                 console.log("procces2", element2.id ? element2.id : element)
//                 if (element2?.children?.length > 0) {
//                     console.log(2, element2);
//                     CheckRepeat(element2);
//                 }
//                 else {
//                     console.log(2, "out", element2.id)
//                     allData.push(element2)

//                 }

//             });
//             // CheckRepeat(element);
//         }
//         else {
//             console.log("out", element.id);
//             allData.push(element)

//         }

//     });
//     return allData;
// }


// function CheckRepeat(data) {
//     alert(data.id)

//     Provider(data.children, data)

// }