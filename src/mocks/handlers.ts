// mocks/handlers.ts

import { http, HttpResponse } from "msw";
import { cities } from "@/data/cities";

export const handlers = [
  http.get("/api/cities", () => {
    return HttpResponse.json(cities);
  }),
];