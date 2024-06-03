import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from './models/todo-model';
import { formatURL, Endpoints } from './endpoints';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  public allTodos(): Observable<TodoModel[]>{
    const uri = formatURL(Endpoints.TODOS);

    return this.http.get<TodoModel[]>(uri);
  }

  public oneTodo(todoId: number): Observable<TodoModel>{
    const uri = formatURL(Endpoints.TODOS) + `/${todoId}`;

    return this.http.get<TodoModel>(uri);
  }
}
