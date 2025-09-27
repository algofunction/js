function circleArea(radius) {
  // La fonction prend un paramètre `radius` qui représente le rayon du cercle.

  // Vérifie si le rayon est inférieur ou égal à 0 (négatif ou nul).
  if (radius <= 0) {
    // Si le rayon n'est pas positif, lève une erreur avec un message explicite.
    throw new Error("the radius is not positive");
  }

  // Calcule l'aire du cercle en utilisant la formule : π * rayon².
  // `Math.PI` représente la constante π (environ 3.14159).
  // `Math.pow(radius, 2)` élève le rayon au carré.
  const area = Math.PI * Math.pow(radius, 2);

  // Arrondit le résultat à 2 décimales pour respecter la tolérance de 0.01.
  // `toFixed(2)` convertit le nombre en chaîne de caractères avec 2 décimales.
  // `parseFloat()` convertit cette chaîne en nombre décimal pour éviter les problèmes de type.
  return parseFloat(area.toFixed(2));
}
