export enum Endpoints {
  BASE_URI = 'https://jsonplaceholder.typicode.com',
  TODOS = 'todos'
}

export const formatURL = (endpoint: Endpoints) => {
  return '${Endpoints.BASE_URI}/${endpoint}';
}