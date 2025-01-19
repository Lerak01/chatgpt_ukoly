let jake_cislo = prompt("Napiš jaké číslo chceš vypsat: ")
function max_cislo(cislo){
    for (let i=1; i<=10; i++){
         let vysledek = cislo * i
        console.log(`${jake_cislo} x ${i} = ${vysledek}`)
    }
}

max_cislo(jake_cislo)

