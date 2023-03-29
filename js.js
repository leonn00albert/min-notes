function changeFur(cat, fur){
    cat.fur = fur;
}

const cat = {fur: "gray"}

changeFur(cat, "orange")
console.log(cat.fur);

const cat2 = Object.freeze({fur: "orange"});

changeFur(cat2, 'black');

console.log(cat2.fur)