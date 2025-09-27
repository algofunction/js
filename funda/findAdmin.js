// Déclare une fonction nommée `findAdmin` qui prend deux paramètres :
// - `list` : un tableau d'objets représentant des développeurs.
// - `lang` : une chaîne de caractères représentant le langage de programmation à filtrer.
function findAdmin(list, lang) {

  // Utilise la méthode `filter` sur le tableau `list` pour créer un nouveau tableau.
  // La méthode `filter` parcourt chaque élément du tableau et applique une fonction de rappel (callback).
  // Seuls les éléments pour lesquels la fonction de rappel retourne `true` sont inclus dans le nouveau tableau.
  return list.filter(

    // La fonction de rappel prend un paramètre `developer`, qui représente chaque objet du tableau `list`.
    (developer) =>

      // Vérifie si la propriété `language` de l'objet `developer` est égale à `lang`
      // ET si la propriété `githubAdmin` de l'objet `developer` est égale à 'yes'.
      // Si les deux conditions sont vraies, l'objet est inclus dans le tableau résultant.
      developer.language === lang && developer.githubAdmin === 'yes'
  );
}

// Définition du tableau `list1` contenant les objets des développeurs
var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

// Appel de la fonction `findAdmin` avec le tableau `list1` et le langage 'JavaScript'
var result = findAdmin(list1, 'JavaScript');

// Affiche le résultat dans la console
console.log(result);
