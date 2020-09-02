
const ages = [14, 29, 33, 22, 8, 64];

const minMethod = (array) => {
    let minArray = [];
    minArray.push(array[0]);
    //console.log(minArray);
    for (let i=0; i < array.length; i++) {
        for (let j=0; j < array.length; j++) {
            if (array[j] < minArray) {
                minArray.pop();
                minArray.push(array[j]);
            }
        } 
    }
    console.log(minArray);
    
}

minMethod(ages);
