enum SafeColors {
  "indigo",
  "amber",
  "slate",
  "orange",
}

export const safeColors = Object.values(SafeColors).filter((color) => isNaN(Number(color)))
console.info(safeColors)
export const getRandomSafeColor = () => safeColors[Math.floor(Math.random() * (safeColors.length - 1))]
export type ColorType = keyof typeof SafeColors