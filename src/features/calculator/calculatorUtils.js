/**
 * Calcula la Tasa Metabólica Basal (TMB) usando Mifflin-St Jeor
 */
export const calcularTMB = (peso, altura, edad, genero) => {
  // Fórmula: TMB = 10 * peso (kg) + 6.25 * altura (cm) - 5 * edad (años) + constante
  const base = (10 * peso) + (6.25 * altura) - (5 * edad);
  return genero === 'hombre' ? base + 5 : base - 161;
};

/**
 * Multiplica la TMB por el factor de actividad física (Gasto Energético Total - TDEE)
 */
export const calcularCaloriasTotales = (tmb, nivelActividad) => {
  const factores = {
    sedentario: 1.2,       // Poco o nada de ejercicio
    ligero: 1.375,        // Ejercicio ligero 1-3 días a la semana
    moderado: 1.55,       // Ejercicio moderado 3-5 días a la semana
    activo: 1.725,        // Ejercicio fuerte 6-7 días a la semana
    muyActivo: 1.9        // Ejercicio muy fuerte, atleta o trabajo físico pesado
  };

  return Math.round(tmb * (factores[nivelActividad] || 1.2));
};

/**
 * Distribuye los macronutrientes de forma equilibrada (Provisional: 50% Carbs, 25% Prot, 25% Grasa)
 * 1g Proteína = 4 kcal | 1g Carbohidrato = 4 kcal | 1g Grasa = 9 kcal
 */
export const calcularMacros = (caloriasTotales) => {
  return {
    carbohidratos: Math.round((caloriasTotales * 0.50) / 4),
    proteinas: Math.round((caloriasTotales * 0.25) / 4),
    grasas: Math.round((caloriasTotales * 0.25) / 9),
  };
};