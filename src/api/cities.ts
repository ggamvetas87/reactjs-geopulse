// api/cities.ts

import type { City } from "@/types/city";

export async function getCities(): Promise<City[]> {
  const response = await fetch("/api/cities");

  if (!response.ok) {
    throw new Error("Failed to fetch cities");
  }

  const data = await response.json();

  return data as City[];
}
