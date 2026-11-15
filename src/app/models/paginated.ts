export type Paginated<K extends string, T> = {
  [P in K]: T[];  
} & {
  total: number;      // how many items exist in total
  skip: number;       // how many were skipped
  limit: number;      // how many came back in this page
};

