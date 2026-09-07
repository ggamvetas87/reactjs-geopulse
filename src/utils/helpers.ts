// utils/helpers.ts

export function getPollutionLabel(pollution?: number) {
  if (pollution === undefined) {
    return "";
  }

  if (pollution <= 30) {
    return "Low pollution";
  }

  if (pollution <= 60) {
    return "Moderate pollution";
  }

  if (pollution <= 90) {
    return "High pollution";
  }

  return "Very High pollution";
}
