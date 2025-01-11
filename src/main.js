let number = prompt("Zadejte číslo k určení: ")
function add_number(number){
    for (let i = 1; i <= number; i++){
        if (i%2===0) {
            console.log(i + " " + "je sudé");
        }

        else{
            console.log(i+ " " + "je liché")
        }

    }

}

add_number(number)