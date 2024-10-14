function countSheeps(list) { 
let count = 0;
    for (let index=0; index < list.length ; index++) {
            if (list[index] != null && value) {  
                count++;
            }
        }

        if (count > 0) {
            console.log(`There are ${count} sheep in total`);
        } else {
            console.log("UPS!!! Wolfs eaten Sheeps");
        }
        
    }


const list1 = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ];
const list2 = [ false, false, false ];

countSheeps(list1); 
countSheeps(list2);