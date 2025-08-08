/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)
*/

function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}


/**
 * Multiplie un nombre par 5 élevé à la puissance du nombre de chiffres dans le nombre.
 *
 * @param {number} number - Le nombre à multiplier.
 * @returns {number} Le résultat de la multiplication du nombre par 5 élevé à la puissance du nombre de chiffres.
 */
function multiply(number) {
  // Calcule la longueur du nombre en termes de chiffres, en ignorant le signe négatif
  const length = Math.abs(number).toString().length;

  // Multiplie le nombre par 5 élevé à la puissance de la longueur du nombre
  return number * Math.pow(5, length);
}
