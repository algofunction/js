/*Please write a function that sums a list, but ignores any duplicated items in the list.

For instance, for the list [3, 4, 3, 6] the function should return 10,
and for the list [1, 10, 3, 10, 10] the function should return 4.*/
    /*
        1Définit une fonction nommée `sumNoDuplicates` qui prend un tableau `arr` comme argument.
        
        2Initialise un tableau vide `uniqueArr` pour stocker les éléments uniques du tableau d'entrée.
        3Initialise une variable `sum` à 0 pour accumuler la somme des éléments uniques.
        
        4Commence une boucle qui itère sur chaque élément `num` du tableau `arr`.
        
        5Vérifie si l'index de la première occurrence de `num` est égal à l'index de sa dernière occurrence.
        Si la condition est vraie, cela signifie que `num` n'apparaît qu'une seule fois dans le tableau.


        6Ajoute `num` au tableau `uniqueArr`.
        7Ajoute la valeur de `num` à la variable `sum`.
        
        Ferme le bloc `if`.
        Ferme la boucle `forEach`.
        Retourne la valeur de `sum`, qui est la somme des éléments uniques du tableau `arr`.
    */

function sumNoDuplicates(arr) {//1
        let uniqueArr = [];//2
        let sum = 0;//3
        arr.forEach(num => {//4
                
            if (arr.indexOf(num) === arr.lastIndexOf(num)) {//5
                uniqueArr.push(num);//6
                sum += num;//7
                    
            }
        });
        return sum;
}
