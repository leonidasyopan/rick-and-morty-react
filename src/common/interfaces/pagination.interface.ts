import { Character } from "./character.interface";

export interface Pagination {
  info: {
    count: Number
    pages: Number
    next: Number
    prev: Number
  },
  results: Character[]
}
